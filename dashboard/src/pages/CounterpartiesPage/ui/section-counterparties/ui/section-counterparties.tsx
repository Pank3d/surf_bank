import { useState } from 'react';
import style from './section-counterparties.module.scss';
import { Button } from '@/shared/ui';
import { internalPath } from '@/shared/routes/routes';
import { useNavigate } from 'react-router-dom';
import arrow from '@/assets/arrow-gray.svg';
import { accounts, LLC, type LLCType } from '../model/data';
import { CounterpartyModal } from '@/widgets/CounterpartyModal/CounterpartyModal';
import plusFilled from '@/assets/plus-filled.svg';
import plus from '@/assets/plus-white.svg';

export const SectionCounterparties = () => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCounterparty, setSelectedCounterparty] =
		useState<LLCType>('Surf Bank LLC');

	const handleAddCounterparty = () => {
		navigate(internalPath.counterparties.counterpartyDetails);
	};

	const handleCardClick = (accountName: string) => {
		// Проверяем, есть ли это имя в LLC
		if (LLC.includes(accountName as LLCType)) {
			setSelectedCounterparty(accountName as LLCType);
			setIsModalOpen(true);
		}
	};

	const hasCounterparties = accounts && accounts.length > 0;

	return (
		<>
			{hasCounterparties ? (
				<div className={style.container}>
					<div className={style.accountsSection}>
						<div className={style.accountsGrid}>
							{accounts.map((account, index) => (
								<div
									key={index}
									className={style.accountCard}
									onClick={() => handleCardClick(account.name)}
								>
									<div className={style.accountLeft}>
										<div className={style.accountHeader}>
											<img src={account.icon} className={style.accountIcon} />
											<div className={style.accountData}>
												<span className={style.accountName}>
													{account.name}
												</span>
												<span className={style.accountNumber}>
													{account.accountNumber}
												</span>
											</div>
										</div>
									</div>

									<div className={style.accountRight}>
										<img src={arrow} alt='Menu' className={style.arrowIcon} />
									</div>
								</div>
							))}
						</div>
					</div>

					<div className={style.topBar}>
						<Button
							dark
							onClick={handleAddCounterparty}
							className={style.add_button}
						>
							Add New Counterparty
						</Button>
					</div>
				</div>
			) : (
				<div className={style.addNew__container}>
					<img className={style.icon} src={plusFilled} alt='' />
					<h5 className={style.title}>Add a new counterparty</h5>
					<p className={style.description}>
						You can add an unlimited number of counterparties and make payments
						to them in Fiat and Digital Assets.
					</p>
					<Button
						href={internalPath.counterparties.counterpartyDetails}
						dark
						className={style.button}
					>
						<img src={plus} alt='' />
						Add counterparty
					</Button>
				</div>
			)}

			<CounterpartyModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				counterpartyName={selectedCounterparty}
			/>
		</>
	);
};
