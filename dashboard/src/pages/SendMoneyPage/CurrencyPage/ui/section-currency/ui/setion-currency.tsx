import { useState } from 'react';
import style from './section-currency.module.scss';
import { СurrencyCard } from '@/shared/ui';
import { currency as currencyData } from '../model/data';
import { internalPath } from '@/shared/routes/routes';
import { StepsButtons } from '@/widgets';
import { useNavigate } from 'react-router-dom';

export const SectionCurrency = () => {
	const navigate = useNavigate();
	const [selectedCurrency, setSelectedCurrency] = useState<string | null>(
		// Находим активный по умолчанию или выбираем первый
		currencyData.find(c => c.active)?.title || null,
	);

	const handleCardClick = (title: string) => {
		setSelectedCurrency(title);
	};

  	const handleContinue = () => {
			// Передаем state через navigate
			navigate(internalPath.sendMoney.account, {
				state: { selectedCurrency },
			});
		};

	return (
		<div className={style.container}>
			<div className={style.currency}>
				{currencyData.map(({ icon, title }) => (
					<СurrencyCard
						key={title}
						active={selectedCurrency === title}
						icon={icon}
						title={title}
            className={style.currencyCard}
						onClick={() => handleCardClick(title)}
					/>
				))}
			</div>

			<StepsButtons
				back={internalPath.sendMoney.base}
				onContinue={handleContinue}
				disabled={!selectedCurrency}
			/>
		</div>
	);
};
