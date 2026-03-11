// SectionCurrency.tsx - первый шаг
import { useState } from 'react';
import style from './section-currency.module.scss';
import { СurrencyCard, Button } from '@/shared/ui';
import { currencyTypes } from '../model/data';
import { internalPath } from '@/shared/routes/routes';
import { useNavigate } from 'react-router-dom';

export const SectionCurrency = () => {
	const navigate = useNavigate();
	const [selectedType, setSelectedType] = useState<string | null>(
		currencyTypes.find(c => c.active)?.type || null,
	);

	const handleCardClick = (type: string) => {
		setSelectedType(type);
	};

	const handleContinue = () => {
		if (selectedType) {
			navigate(internalPath.sendMoney.currency, {
				state: { currencyType: selectedType }, // Передаем тип валюты
			});
		}
	};

	return (
		<div className={style.container}>
			<div className={style.currency}>
				{currencyTypes.map(({ icon, title, description, type }) => (
					<СurrencyCard
						key={title}
						active={selectedType === type}
						icon={icon}
						title={title}
						description={description}
						onClick={() => handleCardClick(type)}
					/>
				))}
			</div>

			<Button
				onClick={handleContinue}
				className={style.button}
				dark
				disabled={!selectedType}
			>
				Continue
			</Button>
		</div>
	);
};
