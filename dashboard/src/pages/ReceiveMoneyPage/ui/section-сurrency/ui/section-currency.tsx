import style from './section-currency.module.scss';
import { useState } from 'react';
import downloadIcon from '@/assets/download2.svg';
import arrow from '@/assets/arrow-currency.svg';
// import dotsIcon from '@/assets/dots.svg';

import { accounts, bankDetails, DATA } from '../model/data';
import { BalanceModal } from '@/shared/ui/modals/Balance/BalanceModal';
import type { ModalDataUnion } from '@/pages/DashboardPage/ui/sections-financial/types';

// Типизируем account
type Account = (typeof accounts)[number];

// Создаем маппинг для соответствия между аккаунтами и данными в bankDetails
const accountToBankDetailsMap: Record<string, keyof typeof bankDetails> = {
	EUR: 'EUR',
	BTC: 'Bitcoin',
	USDT: 'USDT (TRC20)',
	GBP: 'EUR', // Для GBP используем EUR данные или можно создать отдельные
};

export const SectionCurrency = () => {
	const data = DATA;
	const [selectedCard, setSelectedCard] = useState<ModalDataUnion | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleDotsClick = (account: Account) => {
		// Находим соответствующие данные в bankDetails
		const bankDetailsKey = accountToBankDetailsMap[account.currency];
		const bankData = bankDetails[bankDetailsKey];

		if (!bankData) {
			console.error(`No bank details found for currency: ${account.currency}`);
			return;
		}

		// Создаем базовые данные карточки из account
		const cardData = {
			icon: account.icon,
			title:
				bankDetailsKey === 'Bitcoin'
					? 'Bitcoin'
					: bankDetailsKey === 'USDT (TRC20)'
						? 'USDT (TRC20)'
						: account.currency,
			price:
				bankData.type === 'crypto' ? bankData.balance : `$${account.balance}`,
			rate: '0.00',
			convertPrice:
				bankData.type === 'crypto' ? bankData.balance : `$${account.balance}`,
			type: bankData.type,
		};

		// Объединяем с bankData
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
			<div className={style.accountsHeader}>
				<h2 className={style.accountsTitle}>Accounts</h2>
				<div className={style.totalBalanceSelector}>
					<span className={style.totalBalanceText}>Total balance</span>
					<img src={arrow} alt='Select' className={style.arrowIcon} />
				</div>
			</div>

			<div className={style.accountsSection}>
				<div className={style.accountsGrid}>
					{accounts.map(account => (
						<div
							key={account.currency}
							className={style.accountCard}
							onClick={() => handleDotsClick(account)}
						>
							<div className={style.accountLeft}>
								<div className={style.accountHeader}>
									<img
										src={account.icon}
										alt={account.currency}
										className={style.accountIcon}
									/>
									<div className={style.accountData}>
										<span className={style.accountName}>{account.name}</span>
										<span className={style.accountNumber}>
											{account.accountNumber}
										</span>
									</div>
								</div>
							</div>

							<div className={style.accountRight}>
								<div className={style.accountBalance}>
									<span className={style.balanceValue}>
										{account.balance} {account.currency}
									</span>
								</div>
								{/* <img
									src={dotsIcon}
									alt='Menu'
									className={style.dotsIcon}
									onClick={() => handleDotsClick(account)}
								/> */}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className={style.details}>
				{data?.recipient && (
					<div className={style.bankDetails}>
						<div className={style.bankDetailsHeader}>
							<h3 className={style.bankDetailsTitle}>Recipient information</h3>
							<button className={style.downloadButton}>
								<img
									src={downloadIcon}
									alt='Download'
									className={style.downloadIcon}
								/>
								Download
							</button>
						</div>
						<div className={style.bankGrid}>
							<div className={style.bankRow}>
								<span className={style.bankLabel}>Recipient name:</span>
								<span className={style.bankValue}>
									{data.recipient.recipientName}
								</span>
							</div>
							<div className={style.bankRow}>
								<span className={style.bankLabel}>Recipient ID:</span>
								<span className={style.bankValue}>
									{data.recipient.recipientId}
								</span>
							</div>

							<div className={style.bankRow}>
								<span className={style.bankLabel}>Account ID:</span>
								<span className={style.bankValue}>
									{data.recipient.accountId}
								</span>
							</div>
							<div className={style.bankRow}>
								<span className={style.bankLabel}>Currency:</span>
								<span className={style.bankValue}>
									{data.recipient.currency}
								</span>
							</div>

							<div className={style.bankRow}>
								<span className={style.bankLabel}>Sending method:</span>
								<span className={style.bankValue}>
									{data.recipient.sendingMethod}
								</span>
							</div>
							<div className={style.bankRow}>
								<span className={style.bankLabel}>IBAN:</span>
								<span className={style.bankValue}>{data.recipient.iban}</span>
							</div>

							<div className={style.bankRow}>
								<span className={style.bankLabel}>SWIFT/BIC:</span>
								<span className={style.bankValue}>
									{data.recipient.swiftCode}
								</span>
							</div>
							<div className={style.bankRow}></div>
						</div>
					</div>
				)}

				{data?.address && (
					<div className={style.bankDetails}>
						<h3 className={style.bankDetailsTitle}>Bank Details</h3>
						<div className={style.bankGrid}>
							<div className={style.bankRow}>
								<span className={style.bankLabel}>Bank name:</span>
								<span className={style.bankValue}>{data.address.bankName}</span>
							</div>
							<div className={style.bankRow}>
								<span className={style.bankLabel}>Address line:</span>
								<span className={style.bankValue}>
									{data.address.addressLine}
								</span>
							</div>

							<div className={style.bankRow}>
								<span className={style.bankLabel}>City:</span>
								<span className={style.bankValue}>{data.address.city}</span>
							</div>
							<div className={style.bankRow}>
								<span className={style.bankLabel}>State/region/district:</span>
								<span className={style.bankValue}>
									{data.address.stateRegion}
								</span>
							</div>

							<div className={style.bankRow}>
								<span className={style.bankLabel}>Zip/postal code:</span>
								<span className={style.bankValue}>{data.address.zipCode}</span>
							</div>
							<div className={style.bankRow}>
								<span className={style.bankLabel}>Country:</span>
								<span className={style.bankValue}>{data.address.country}</span>
							</div>
						</div>
					</div>
				)}
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
