import { Button, Input, Textarea } from '@/shared/ui';
import { useSendContactEmail } from '@/shared/api';
import clsx from 'clsx';
import style from './LetsConnectForm.module.scss';
import { useState } from 'react';

interface Props {
	className?: string;
	description?: string[];
	onSubmit?: () => void;
}

export const LetsConnectForm = ({
	className,
	description,
	onSubmit,
}: Props) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		phone: '',
		message: '',
	});
	const [isChecked, setIsChecked] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null); // состояние для ошибки

	const sendContactEmail = useSendContactEmail();

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validateForm = (): string | null => {
		if (!formData.name.trim()) {
			return 'Name is required';
		}

		if (!formData.email.trim()) {
			return 'Email is required';
		}

		if (!validateEmail(formData.email)) {
			return 'Please enter a valid email address';
		}

		if (!formData.company.trim()) {
			return 'Company name is required';
		}

		if (!formData.message.trim()) {
			return 'Message is required';
		}

		if (!isChecked) {
			return 'You must agree to the Privacy Policy';
		}

		return null;
	};

	const handleSubmit = async () => {
		// Сбрасываем предыдущую ошибку
		setErrorMessage(null);

		// Валидируем форму
		const validationError = validateForm();
		if (validationError) {
			setErrorMessage(validationError);
			return;
		}

		try {
			const result = await sendContactEmail.mutateAsync({
				name: formData.name.trim(),
				email: formData.email.trim(),
				company: formData.company.trim(),
				phone: formData.phone.trim(),
				message: formData.message.trim(),
			});

			if (result.success) {
				alert('Message sent successfully!');
				setFormData({
					name: '',
					email: '',
					company: '',
					phone: '',
					message: '',
				});
				setIsChecked(false);
				setErrorMessage(null); // очищаем ошибку при успехе
				onSubmit?.();
			} else {
				setErrorMessage(
					`Something went wrong. Please try reloading this page.`,
				);
			}
		} catch (error) {
			console.error('Error sending contact email:', error);
			setErrorMessage('Something went wrong. Please try reloading this page.');
		}
	};

	return (
		<div className={clsx(style.form, className)}>
			<div className={style.inputs}>
				<Input
					placeholder='Name*'
					value={formData.name}
					onChange={e =>
						setFormData(prev => ({ ...prev, name: e.target.value }))
					}
					required
				/>
				<Input
					placeholder='Email*'
					type='email'
					value={formData.email}
					onChange={e =>
						setFormData(prev => ({ ...prev, email: e.target.value }))
					}
					required
				/>
			</div>
			<div className={style.inputs}>
				<Input
					placeholder='Company name*'
					value={formData.company}
					onChange={e =>
						setFormData(prev => ({ ...prev, company: e.target.value }))
					}
					required
				/>
				<Input
					placeholder='Telegram or Whatsapp'
					value={formData.phone}
					onChange={e =>
						setFormData(prev => ({ ...prev, phone: e.target.value }))
					}
				/>
			</div>
			<Textarea
				className={style.textarea}
				placeholder='Message*'
				value={formData.message}
				onChange={e =>
					setFormData(prev => ({ ...prev, message: e.target.value }))
				}
				required
			/>
			<div className={style.descContrainer}>
				{description?.map((str, index) => (
					<p className={style.description} key={index}>
						{str}
					</p>
				))}
				<div className={style.checkboxContainer}>
					<div className={style.checkboxWrapper}>
						<input
							type='checkbox'
							className={style.checkboxInput}
							checked={isChecked}
							onChange={e => setIsChecked(e.target.checked)}
							id='terms-checkbox'
						/>
						<label htmlFor='terms-checkbox' className={style.checkboxLabel}>
							I have read and agree to the Privacy Policy
						</label>
					</div>
				</div>
			</div>
			<Button
				className={style.button}
				arrow
				type='submit'
				onClick={handleSubmit}
				disabled={sendContactEmail.isPending}
			>
				{sendContactEmail.isPending ? 'Sending...' : 'Submit'}
			</Button>

			{errorMessage && <div className={style.errorMessage}>{errorMessage}</div>}
		</div>
	);
};
