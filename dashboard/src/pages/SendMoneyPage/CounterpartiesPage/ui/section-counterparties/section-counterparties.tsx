import style from './section-counterparties.module.scss';
import { Button } from '@/shared/ui';
import { internalPath } from '@/shared/routes/routes';
import { useNavigate } from 'react-router-dom';
import arrow from '@/assets/arrow-gray.svg';
import { accounts, LLC, type LLCType } from '../../model/data';
import { StepsButtons } from '@/widgets';
import { CounterpartyModal } from '@/widgets/CounterpartyModal/CounterpartyModal';
import { useState } from 'react';

export const SectionCounterparties = () => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCounterparty, setSelectedCounterparty] =
			useState<LLCType>('Surf Bank LLC');

	const handleAddCounterparty = () => {
		navigate(internalPath.counterparties.counterpartyDetails);
	};

		const handleCardClick = (accountName: string) => {
			if (LLC.includes(accountName as LLCType)) {
				setSelectedCounterparty(accountName as LLCType);
				setIsModalOpen(true);
			}
		};

	return (
		<>
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
											<span className={style.accountName}>{account.name}</span>
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

				<StepsButtons
					back={internalPath.sendMoney.account}
					to={internalPath.sendMoney.accountDetails}
				/>
			</div>

			<CounterpartyModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				counterpartyName={selectedCounterparty}
			/>
		</>
	);
};
