import style from './section-counterparties.module.scss';
import { Button } from '@/shared/ui';
import { internalPath } from '@/shared/routes/routes';
import { useNavigate } from 'react-router-dom';
import plus from '@/assets/plus-white.svg';
import check from '@/assets/check-green.svg';
import { accounts, LLC, type LLCType } from '../../model/data';
import { StepsButtons } from '@/widgets';
import { CounterpartyModal } from '@/widgets/CounterpartyModal/CounterpartyModal';
import { useState } from 'react';
import clsx from 'clsx';

export const SectionCounterparties = () => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCounterparty, setSelectedCounterparty] =
		useState<LLCType | null>(null);
	const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
	const [selectedAccount, setSelectedAccount] = useState<
		(typeof accounts)[number] | null
	>(null);

	const handleAddCounterparty = () => {
		navigate(internalPath.counterparties.counterpartyDetails);
	};

	const handleCardClick = (
		account: (typeof accounts)[number],
		cardId: string,
	) => {
		// Выбираем карточку по уникальному идентификатору
		setSelectedCardId(cardId);
		setSelectedAccount(account);
	};

	const handleNameClick = (accountName: string, e: React.MouseEvent) => {
		e.stopPropagation(); // Предотвращаем всплытие к карточке
		if (LLC.includes(accountName as LLCType)) {
			setSelectedCounterparty(accountName as LLCType);
			setIsModalOpen(true);
		}
	};

	const handleContinue = () => {
		if (selectedAccount) {
			navigate(internalPath.sendMoney.accountDetails, {
				state: {
					selectedCounterparty: selectedAccount.name,
					selectedAccount: selectedAccount,
				},
			});
		}
	};

	return (
		<>
			<div className={style.container}>
				<div className={style.accountsSection}>
					<div className={style.accountsGrid}>
						{accounts.map((account, index) => {
							// Создаем уникальный ID для каждой карточки
							const cardId = `${account.name}-${index}-${account.accountNumber}`;

							return (
								<div
									key={cardId}
									className={clsx(
										style.accountCard,
										selectedCardId === cardId && style.active,
									)}
									onClick={() => handleCardClick(account, cardId)}
								>
									<div className={style.accountLeft}>
										<div className={style.accountHeader}>
											<img
												src={account.icon}
												className={style.accountIcon}
												alt=''
											/>
											<div className={style.accountData}>
												<span
													className={style.accountName}
													onClick={e => handleNameClick(account.name, e)}
												>
													{account.name}
												</span>
												<span className={style.accountNumber}>
													{account.accountNumber}
												</span>
											</div>
										</div>
									</div>

									<div className={style.accountRight}>
										{selectedCardId === cardId && (
											<img
												src={check}
												className={style.checkIcon}
												alt='Selected'
											/>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<Button
					dark
					onClick={handleAddCounterparty}
					className={style.add_button}
				>
					<img src={plus} alt='' />
					<span className={style.buttonText}>Add Counterparty</span>
				</Button>

				<StepsButtons
					back={internalPath.sendMoney.account}
					onContinue={handleContinue}
					disabled={!selectedAccount}
				/>
			</div>

			<CounterpartyModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				counterpartyName={selectedCounterparty || 'Surf Bank LLC'}
			/>
		</>
	);
};
