import { useState } from 'react';
import style from './section-currency.module.scss';
import { СurrencyCard, Button } from '@/shared/ui';
import { currency as currencyData } from '../model/data';
import { internalPath } from '@/shared/routes/routes';
import { useNavigate } from 'react-router-dom';

export const SectionCurrency = () => {
	const navigate = useNavigate();
	const [selectedCurrency, setSelectedCurrency] = useState<string | null>(
		currencyData.find(c => c.active)?.title || null,
	);

	const handleCardClick = (title: string) => {
		setSelectedCurrency(title);
	};

	const handleContinue = () => {
		if (selectedCurrency) {
			navigate(internalPath.sendMoney.currency, {
				state: { currency: selectedCurrency },
			});
		}
	};

	return (
		<div className={style.container}>
			<div className={style.currency}>
				{currencyData.map(({ icon, title, description }) => (
					<СurrencyCard
						key={title}
						active={selectedCurrency === title}
						icon={icon}
						title={title}
						description={description}
						onClick={() => handleCardClick(title)}
					/>
				))}
			</div>

			<Button
				onClick={handleContinue}
				className={style.button}
				dark
				disabled={!selectedCurrency}
			>
				Continue
			</Button>
		</div>
	);
};
