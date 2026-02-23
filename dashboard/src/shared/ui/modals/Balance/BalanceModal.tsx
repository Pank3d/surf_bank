import style from './BalanceModal.module.scss';
import clsx from 'clsx';

import closeIcon from '@/assets/close.svg';
import { buttons } from '@/pages/DashboardPage/ui/section-operations/model/data';
import type {
	CryptoModalData,
	FiatModalData,
} from '@/pages/DashboardPage/ui/sections-financial/types';

interface Props {
	isOpen: boolean;
	onClose: () => void;
	data: CryptoModalData | FiatModalData;
}

export const BalanceModal = ({ isOpen, onClose, data }: Props) => {
	if (!isOpen) return null;

	const isCrypto = data.type === 'crypto';

	return (
		<div
			className={clsx(style.modalOverlay, isOpen && style.open)}
			onClick={onClose}
		>
			<div className={style.modalContent} onClick={e => e.stopPropagation()}>
				<div className={style.modalHeader}>
					<h2 className={style.modalTitle}>Account Balance</h2>
					<button className={style.closeButton} onClick={onClose}>
						<img src={closeIcon} alt='Close' />
					</button>
				</div>

				<div className={style.cryptoSection}>
					<div className={style.cryptoHeaderWrapper}>
						<div className={style.cryptoHeader}>
							<img
								src={data.icon}
								alt={data.title}
								className={style.cryptoIcon}
							/>
							<div className={style.cryptoInfo}>
								<h3 className={style.cryptoName}>{data.title}</h3>
								{isCrypto && 'ethereumId' in data && data.ethereumId && (
									<p className={style.walletId}>ID: {data.ethereumId}</p>
								)}
								{isCrypto && 'bitcoinId' in data && data.bitcoinId && (
									<p className={style.walletId}>ID: {data.bitcoinId}</p>
								)}
								{'fiatId' in data && data.fiatId && (
									<p className={style.walletId}>ID: {data.fiatId}</p>
								)}
								{isCrypto && 'walletAddress' in data && data.walletAddress && (
									<p className={style.walletAddress}>
										Address: {data.walletAddress.substring(0, 12)}...
									</p>
								)}
							</div>
						</div>

						<div className={style.actionButtons}>
							{buttons.map(({ icon, text, fn }, index) => (
								<div className={style.actionButtonWrapper}>
									<button
										className={style.actionButton}
										key={index}
										onClick={fn}
										title={text}
									>
										<img src={icon} alt={text} />
									</button>
									<p className={style.actionButtonText}>{text}</p>
								</div>
							))}
						</div>
					</div>

					{isCrypto && (
						<div className={style.balanceInfo}>
							<p className={style.balanceAmount}>{data.balance}</p>
							<div className={style.priceInfo}>
								<span className={style.price}>{data.price}</span>
								<span
									className={clsx(
										style.rate,
										data.rate.startsWith('+')
											? style.positive
											: data.rate.startsWith('-')
												? style.negative
												: style.neutral,
									)}
								>
									{data.rate}%
								</span>
							</div>
							<p className={style.convertedPrice}>≈ {data.convertPrice}</p>
						</div>
					)}
				</div>
				{!isCrypto && <div className={style.details}>
					{!isCrypto && 'recipient' in data && data.recipient && (
						<div className={style.bankDetails}>
							<h3 className={style.bankDetailsTitle}>Recipient information</h3>
							<div className={style.bankGrid}>
								{/* Первая строка */}
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

								{/* Вторая строка */}
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

								{/* Третья строка */}
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

								{/* Четвертая строка */}
								<div className={style.bankRow}>
									<span className={style.bankLabel}>SWIFT/BIC:</span>
									<span className={style.bankValue}>
										{data.recipient.swiftCode}
									</span>
								</div>

								<div className={style.bankRow}>
									{/* Пустая ячейка для выравнивания сетки */}
								</div>
							</div>
						</div>
					)}

					{!isCrypto && 'bankName' in data && data.address && (
						<div className={style.bankDetails}>
							<h3 className={style.bankDetailsTitle}>Bank Details</h3>
							<div className={style.bankGrid}>
								{/* Первая строка */}
								<div className={style.bankRow}>
									<span className={style.bankLabel}>Bank name:</span>
									<span className={style.bankValue}>{data.bankName}</span>
								</div>
								<div className={style.bankRow}>
									<span className={style.bankLabel}>Address line:</span>
									<span className={style.bankValue}>
										{data.address.addressLine}
									</span>
								</div>

								{/* Вторая строка */}
								<div className={style.bankRow}>
									<span className={style.bankLabel}>City:</span>
									<span className={style.bankValue}>{data.address.city}</span>
								</div>
								<div className={style.bankRow}>
									<span className={style.bankLabel}>
										State/region/district:
									</span>
									<span className={style.bankValue}>
										{data.address.stateRegion}
									</span>
								</div>

								{/* Третья строка */}
								<div className={style.bankRow}>
									<span className={style.bankLabel}>Zip/postal code:</span>
									<span className={style.bankValue}>
										{data.address.zipCode}
									</span>
								</div>
								<div className={style.bankRow}>
									<span className={style.bankLabel}>Country:</span>
									<span className={style.bankValue}>
										{data.address.country}
									</span>
								</div>
							</div>
						</div>
					)}
				</div>}
			</div>
		</div>
	);
};
