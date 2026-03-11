// SectionCurrency.tsx - второй шаг
import { useState, useEffect } from 'react';
import style from './section-currency.module.scss';
import { СurrencyCard } from '@/shared/ui';
import { fiatCurrencies, cryptoCurrencies, type Currency } from '../model/data';
import { internalPath } from '@/shared/routes/routes';
import { StepsButtons } from '@/widgets';
import { useNavigate, useLocation } from 'react-router-dom';

export const SectionCurrency = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
	const [currencies, setCurrencies] = useState<Currency[]>([]);

	const currencyType = location.state?.currencyType;

	useEffect(() => {
		if (currencyType === 'fiat') {
			setCurrencies(fiatCurrencies);
			// Выбираем первый доступный кошелек, если есть
			const firstAvailable = fiatCurrencies.find(c => c.isAvailable);
			setSelectedCurrency(firstAvailable?.title || null);
		} else if (currencyType === 'crypto') {
			setCurrencies(cryptoCurrencies);
			const firstAvailable = cryptoCurrencies.find(c => c.isAvailable);
			setSelectedCurrency(firstAvailable?.title || null);
		} else {
			navigate(internalPath.sendMoney.base);
		}
	}, [currencyType, navigate]);

	const handleCardClick = (title: string, isAvailable: boolean) => {
		if (isAvailable) {
			setSelectedCurrency(title);
		}
	};

	const handleContinue = () => {
		if (selectedCurrency) {
			navigate(internalPath.sendMoney.counterparty, {
				state: {
					selectedCurrency,
					currencyType,
				},
			});
		}
	};

	// Проверяем, доступна ли выбранная валюта
	const isSelectedAvailable = currencies.find(
		c => c.title === selectedCurrency,
	)?.isAvailable;

	return (
		<div className={style.container}>
			<div className={style.currency}>
				{currencies.map(({ icon, title, description, id, isAvailable }) => (
					<СurrencyCard
						key={title}
						active={selectedCurrency === title && !!isAvailable}
						icon={icon}
						title={title}
						description={description}
						id={id}
						className={style.currencyCard}
						onClick={() => handleCardClick(title, isAvailable ?? true)}
						isAvailable={isAvailable}
					/>
				))}
			</div>

			<StepsButtons
				back={internalPath.sendMoney.base}
				onContinue={handleContinue}
				disabled={!selectedCurrency || !isSelectedAvailable} // Блокируем кнопку, если выбран недоступный кошелек
			/>
		</div>
	);
};
