import style from './section-financial.module.scss';
import { MoneyCard, Toggle, ArrowButton } from '@/shared/ui';
import { bankDetails, cryptoCards, fiatCards } from '../model/data';
import useEmblaCarousel from 'embla-carousel-react';
import arrow from '@/assets/arrow.svg';
import { useEffect, useState } from 'react';
import { BalanceModal } from '@/shared/ui/modals/Balance/BalanceModal';
import type { CardData, CurrencyType, ModalDataUnion } from '../types';
interface Props {
	currencyType: CurrencyType;
	onCurrencyTypeChange: (type: CurrencyType) => void;
}

export const SectionFinancial = ({
	currencyType,
	onCurrencyTypeChange,
}: Props) => {
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const [selectedCard, setSelectedCard] = useState<ModalDataUnion | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Получаем карточки в зависимости от выбранного типа
	const cards = currencyType === 'crypto' ? cryptoCards : fiatCards;

	// Реинициализируем карусель при смене типа
	useEffect(() => {
		emblaApi?.reInit();
	}, [currencyType, emblaApi]);

	const handleToggleChange = (toggle: string) => {
		const newType: CurrencyType = toggle === 'Crypto' ? 'crypto' : 'fiat';
		onCurrencyTypeChange(newType);
	};

	const handleCardClick = (cardData: CardData) => {
		const key = cardData.title as keyof typeof bankDetails;
		const bankData = bankDetails[key];

		if (!bankData) {
			console.error(`No data found for: ${cardData.title}`);
			return;
		}

		const modalData = {
			...cardData,
			...bankData,
		} as ModalDataUnion;

		setSelectedCard(modalData);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedCard(null);
	};

	return (
		<div className={style.container}>
			<div className={style.financials}>
				<Toggle
					toggles={['Crypto', 'Fiat']}
					onClick={handleToggleChange}
					activeToggle={currencyType === 'crypto' ? 'Crypto' : 'Fiat'}
				/>

				<div className={style.buttons}>
					<ArrowButton
						onClick={() => emblaApi?.scrollPrev()}
						icon={arrow}
						className={style.button}
					/>
					<ArrowButton
						onClick={() => emblaApi?.scrollNext()}
						icon={arrow}
						className={style.button}
					/>
				</div>
			</div>
			<div className={style.cards} ref={emblaRef}>
				<div className={style.cards__container}>
					{cards.map((cardData, index) => (
						<MoneyCard
							className={style.card}
							key={index}
							icon={cardData.icon}
							title={cardData.title}
							price={cardData.price}
							rate={cardData.rate}
							convertPrice={cardData.convertPrice}
							onClick={() => handleCardClick(cardData)}
						/>
					))}
				</div>
			</div>
			{selectedCard && (
				<BalanceModal
					isOpen={isModalOpen}
					onClose={handleCloseModal}
					data={selectedCard}
				/>
			)}
		</div>
	);
};
