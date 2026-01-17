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
								{isCrypto && 'walletAddress' in data && data.walletAddress && (
									<p className={style.walletAddress}>
										Address: {data.walletAddress.substring(0, 12)}...
									</p>
								)}
							</div>
						</div>

						<div className={style.actionButtons}>
							{buttons.map(({ icon, text, fn }, index) => (
								<button
									className={style.actionButton}
									key={index}
									onClick={fn}
									title={text}
								>
									<img src={icon} alt={text} />
								</button>
							))}
						</div>
					</div>

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
				</div>

				{!isCrypto && 'bankName' in data && (
					<div className={style.bankDetails}>
						<h3 className={style.bankDetailsTitle}>Bank Details</h3>
						<div className={style.bankInfo}>
							<div className={style.bankRow}>
								<span className={style.bankLabel}>Bank name</span>
								<span className={style.bankValue}>{data.bankName}</span>
							</div>
							<div className={style.bankRow}>
								<span className={style.bankLabel}>Account number</span>
								<span className={style.bankValue}>{data.accountNumber}</span>
							</div>
							{'swiftCode' in data && data.swiftCode && (
								<div className={style.bankRow}>
									<span className={style.bankLabel}>SWIFT/BIC</span>
									<span className={style.bankValue}>{data.swiftCode}</span>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
