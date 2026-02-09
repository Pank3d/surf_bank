import { Button, Select, Input, Textarea } from '@/shared/ui';
import { useSendContactEmail } from '@/shared/api';
import clsx from 'clsx';
import style from './FindOutMoreForm.module.scss';
import { useState, useRef, useEffect } from 'react';

interface Props {
	className?: string;
	description?: string[];
	onSubmit?: () => void;
}

// Моковые данные для селектов
const VOLUME_OPTIONS = [
	'Under 100 000 EUR',
	'100 001 - 250 000 EUR',
	'250 001 - 500 000 EUR',
	'500 001 - 1 000 000 EUR',
	'1 000 001 - 5 000 000 EUR',
	'Over 5 000 001 EUR',
];

const REGION_OPTIONS = [
	'US',
	'Canada',
	'EU',
	'Middle East',
	'Africa',
	'APAC',
	'LAC',
];

const INDUSTRY_OPTIONS = [
	'Precious Metals & Jewelry',
	'Tobacco & Alcohol',
	'Advertising & Marketing',
	'Information & Data Services',
	'Venture Capital & Private Equity',
	'Security & Investigation Services',
	'Education & Research',
	'Entertainment, Sports & Media',
	'Non-Profit & Government Entities',
	'Gaming & Gambling',
	'Personal Services',
	'Real Estate & Construction',
	'Agriculture & Food Services',
	'Transportation & Logistics',
	'Religious Organizations',
	'Civil & Social Organizations',
	'Finance',
	'Technology',
	'E-commerce',
	'Healthcare',
	'Other',
];

const COMPANY_AGE_OPTIONS = [
	'Less than 1 year',
	'1 to 2 years',
	'2 - 5 years',
	'More than 5 years',
];

export const FindOutMoreForm = ({
	className,
	description,
	onSubmit,
}: Props) => {
	const [formData, setFormData] = useState({
		expectedVolume: '',
		region: '',
		name: '',
		industry: '',
		companyAge: '',
		email: '',
		message: '',
	});
	const [isChecked, setIsChecked] = useState(false);
	const [activeSelect, setActiveSelect] = useState<string | null>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const sendContactEmail = useSendContactEmail();

	// Закрытие модалки при клике вне ее области
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				setActiveSelect(null);
			}
		};

		// Закрытие модалки по нажатию ESC
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setActiveSelect(null);
			}
		};

		if (activeSelect) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', handleEscapeKey);
			// Запрещаем скролл страницы при открытой модалке
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscapeKey);
			document.body.style.overflow = 'unset';
		};
	}, [activeSelect]);

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const isFormValid = () => {
		return (
			formData.expectedVolume.trim() !== '' &&
			formData.region.trim() !== '' &&
			formData.name.trim() !== '' &&
			formData.industry.trim() !== '' &&
			formData.companyAge.trim() !== '' &&
			formData.email.trim() !== '' &&
			formData.message.trim() !== '' &&
			validateEmail(formData.email) &&
			isChecked
		);
	};

	const handleSelectOption = (field: string, value: string) => {
		setFormData(prev => ({ ...prev, [field]: value }));
		setActiveSelect(null);
	};

	const handleSelectClick = (selectName: string) => {
		setActiveSelect(selectName);
	};

	const handleCloseModal = () => {
		setActiveSelect(null);
	};

	const handleSubmit = async () => {
		if (!formData.expectedVolume.trim()) {
			alert('Expected monthly crypto payment volume is required');
			return;
		}

		if (!formData.region.trim()) {
			alert('Region is required');
			return;
		}

		if (!formData.name.trim()) {
			alert('Name is required');
			return;
		}

		if (!formData.industry.trim()) {
			alert('Industry is required');
			return;
		}

		if (!formData.companyAge.trim()) {
			alert('Company incorporation period is required');
			return;
		}

		if (!formData.email.trim()) {
			alert('Email is required');
			return;
		}

		if (!formData.message.trim()) {
			alert('Message is required');
			return;
		}

		if (!validateEmail(formData.email)) {
			alert('Please enter a valid email address');
			return;
		}

		try {
			const result = await sendContactEmail.mutateAsync({
				name: formData.name.trim(),
				email: formData.email.trim(),
				company: 'N/A',
				phone: 'N/A',
				message: `Company Information:
Expected Monthly Crypto Payment Volume: ${formData.expectedVolume}
Region: ${formData.region}
Name: ${formData.name}
Industry: ${formData.industry}
Company Incorporation Period: ${formData.companyAge}
Email: ${formData.email}

Message: ${formData.message}`,
			});

			if (result.success) {
				alert('Message sent successfully!');
				setFormData({
					expectedVolume: '',
					region: '',
					name: '',
					industry: '',
					companyAge: '',
					email: '',
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

	const renderOptionsModal = () => {
		if (!activeSelect) return null;

		const options =
			activeSelect === 'expectedVolume'
				? VOLUME_OPTIONS
				: activeSelect === 'region'
					? REGION_OPTIONS
					: activeSelect === 'industry'
						? INDUSTRY_OPTIONS
						: activeSelect === 'companyAge'
							? COMPANY_AGE_OPTIONS
							: [];

		if (options.length === 0) return null;

		return (
			<div className={style.optionsModal}>
				<div className={style.optionsContent} ref={modalRef}>
					{/* Кнопка закрытия */}
					<button
						className={style.closeIconButton}
						onClick={handleCloseModal}
						aria-label='Close modal'
					>
						<svg
							className={style.closeIcon}
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
						>
							<path d='M18 6L6 18M6 6l12 12' />
						</svg>
					</button>

					<h3 className={style.optionsTitle}>
						{activeSelect === 'expectedVolume' && 'Select Payment Volume'}
						{activeSelect === 'region' && 'Select Region'}
						{activeSelect === 'industry' && 'Select Industry'}
						{activeSelect === 'companyAge' && 'Select Company Age'}
					</h3>
					<div className={style.optionsList}>
						{options.map(option => (
							<button
								key={option}
								className={style.optionButton}
								onClick={() => handleSelectOption(activeSelect, option)}
							>
								{option}
							</button>
						))}
					</div>
					<button className={style.closeButton} onClick={handleCloseModal}>
						Cancel
					</button>
				</div>
			</div>
		);
	};

	return (
		<div className={clsx(style.form, className)}>
			{/* Заголовок формы */}
			<h2 className={style.formTitle}>Company information</h2>

			<div className={style.columnsContainer}>
				{/* Левый столбец */}
				<div className={style.column}>
					<Select
						className={style.select}
						placeholder={
							formData.expectedVolume ||
							'Expected monthly crypto payment volume'
						}
						onClick={() => handleSelectClick('expectedVolume')}
					/>
					<Select
						className={style.select}
						placeholder={formData.region || 'Region'}
						onClick={() => handleSelectClick('region')}
					/>
				</div>

				{/* Правый столбец */}
				<div className={style.column}>
					<Select
						className={style.select}
						placeholder={formData.industry || 'Industry'}
						onClick={() => handleSelectClick('industry')}
					/>
					<Select
						className={style.select}
						placeholder={
							formData.companyAge ||
							'How long has your company been incorporated?'
						}
						onClick={() => handleSelectClick('companyAge')}
					/>
				</div>
			</div>

			{/* Разделитель */}
			<div className={style.divider} />

			{/* Поля для ввода */}
			<div className={style.inputsSection}>
				<div className={style.inputsRow}>
					<Input
						placeholder='Name*'
						value={formData.name}
						onChange={e =>
							setFormData(prev => ({ ...prev, name: e.target.value }))
						}
						required
						className={style.input}
					/>
					<Input
						placeholder='Email*'
						type='email'
						value={formData.email}
						onChange={e =>
							setFormData(prev => ({ ...prev, email: e.target.value }))
						}
						required
						className={style.input}
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
			</div>

			{/* Модальное окно с опциями */}
			{renderOptionsModal()}

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
				disabled={sendContactEmail.isPending || !isFormValid()}
			>
				{sendContactEmail.isPending ? 'Sending...' : 'Submit'}
			</Button>
		</div>
	);
};