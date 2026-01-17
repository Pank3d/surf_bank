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

	const sendContactEmail = useSendContactEmail();

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const isFormValid = () => {
		return (
			formData.name.trim() !== '' &&
			formData.email.trim() !== '' &&
			validateEmail(formData.email) &&
			formData.company.trim() !== '' &&
			formData.message.trim() !== '' &&
			isChecked // чекбокс должен быть отмечен
		);
	};

	const handleSubmit = async () => {
		// Validate all required fields
		if (!formData.name.trim()) {
			alert('Name is required');
			return;
		}

		if (!formData.email.trim()) {
			alert('Email is required');
			return;
		}

		if (!validateEmail(formData.email)) {
			alert('Please enter a valid email address');
			return;
		}

		if (!formData.company.trim()) {
			alert('Company name is required');
			return;
		}

		if (!formData.message.trim()) {
			alert('Message is required');
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
				onSubmit?.();
			} else {
				alert(`Failed to send message: ${result.error || result.message}`);
			}
		} catch (error) {
			console.error('Error sending contact email:', error);
			alert('Failed to send message. Please try again.');
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
				{/* Добавляем чекбокс с текстом из description */}
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
							I have read and agree to the terms above
						</label>
					</div>
				</div>
			</div>
			<Button
				className={style.button}
				arrow
				type='submit'
				onClick={handleSubmit}
				disabled={sendContactEmail.isPending || !isFormValid()}
			>
				{sendContactEmail.isPending ? 'Sending...' : 'Submit'}
			</Button>
		</div>
	);
};
