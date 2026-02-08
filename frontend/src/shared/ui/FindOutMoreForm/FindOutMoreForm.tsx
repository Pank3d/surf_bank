import { Button, Select } from '@/shared/ui';
import { useSendContactEmail } from '@/shared/api';
import clsx from 'clsx';
import style from './FindOutMoreForm.module.scss';
import { useState } from 'react';

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

const REGION_OPTIONS = ['US', 'Canada', 'EU', 'APAC', 'LAC'];

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
		phone: '',
		industry: '',
		companyAge: '',
		email: '',
	});
	const [isChecked, setIsChecked] = useState(false);
	const [activeSelect, setActiveSelect] = useState<string | null>(null);

	const sendContactEmail = useSendContactEmail();

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const isFormValid = () => {
		return (
			formData.expectedVolume.trim() !== '' &&
			formData.region.trim() !== '' &&
			formData.phone.trim() !== '' &&
			formData.industry.trim() !== '' &&
			formData.companyAge.trim() !== '' &&
			formData.email.trim() !== '' &&
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

	const handleEmailClick = () => {
		const email = prompt('Please enter your email:');
		if (email && validateEmail(email)) {
			setFormData(prev => ({ ...prev, email }));
		} else if (email) {
			alert('Please enter a valid email address');
		}
	};

	const handlePhoneClick = () => {
		const phone = prompt('Please enter your phone number (with country code):');
		if (phone) {
			setFormData(prev => ({ ...prev, phone }));
		}
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

		if (!formData.phone.trim()) {
			alert('Phone is required');
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

		if (!validateEmail(formData.email)) {
			alert('Please enter a valid email address');
			return;
		}

		try {
			const result = await sendContactEmail.mutateAsync({
				name: 'N/A',
				email: formData.email.trim(),
				company: 'N/A',
				phone: formData.phone.trim(),
				message: `Company Information:
Expected Monthly Crypto Payment Volume: ${formData.expectedVolume}
Region: ${formData.region}
Industry: ${formData.industry}
Company Incorporation Period: ${formData.companyAge}
Email: ${formData.email}`,
			});

			if (result.success) {
				alert('Message sent successfully!');
				setFormData({
					expectedVolume: '',
					region: '',
					phone: '',
					industry: '',
					companyAge: '',
					email: '',
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
				<div className={style.optionsContent}>
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
					<button
						className={style.closeButton}
						onClick={() => setActiveSelect(null)}
					>
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
					<Select
						className={style.select}
						placeholder={formData.phone || 'Phone'}
						onClick={handlePhoneClick}
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
					<Select
						className={style.select}
						placeholder={formData.email || 'Email'}
						onClick={handleEmailClick}
					/>
				</div>
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
