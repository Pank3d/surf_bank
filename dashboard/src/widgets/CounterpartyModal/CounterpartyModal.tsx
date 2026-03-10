import style from './CounterpartyModal.module.scss';
import closeIcon from '@/assets/close.svg';
import { accounts, LLC_DATA, type LLCType } from './model/data';
import backpack from '@/assets/backpackblack.svg';

interface Props {
	isOpen: boolean;
	onClose: () => void;
	counterpartyName: LLCType;
}

export const CounterpartyModal = ({
	isOpen,
	onClose,
	counterpartyName,
}: Props) => {
	if (!isOpen) return null;

	const data = LLC_DATA[counterpartyName];
	const { name, accountNumber } = accounts[0];

	return (
		<div className={style.overlay} onClick={onClose}>
			<div className={style.modal} onClick={e => e.stopPropagation()}>
				<div className={style.content}>
					<div className={style.accountCard}>
						<div className={style.accountLeft}>
							<div className={style.accountHeader}>
								<img src={backpack} className={style.accountIcon} />
								<div className={style.accountData}>
									<span className={style.accountName}>{name}</span>
									<span className={style.accountNumber}>{accountNumber}</span>
								</div>
							</div>
						</div>
					</div>
					<div className={style.accountRight}>
						<button className={style.closeButton} onClick={onClose}>
							<img src={closeIcon} alt='Close' />
						</button>
					</div>

					{/* Recipient Information */}
					<div className={style.details}>
						{data?.recipient && (
							<div className={style.bankDetails}>
								<h3 className={style.bankDetailsTitle}>
									Recipient information
								</h3>
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
										<span className={style.bankValue}>
											{data.recipient.iban}
										</span>
									</div>

									<div className={style.bankRow}>
										<span className={style.bankLabel}>SWIFT/BIC:</span>
										<span className={style.bankValue}>
											{data.recipient.swiftCode}
										</span>
									</div>
									<div className={style.bankRow}>
										{/* Пустая ячейка для выравнивания */}
									</div>
								</div>
							</div>
						)}

						{/* Bank Details */}
						{data?.address && (
							<div className={style.bankDetails}>
								<h3 className={style.bankDetailsTitle}>Bank Details</h3>
								<div className={style.bankGrid}>
									<div className={style.bankRow}>
										<span className={style.bankLabel}>Bank name:</span>
										<span className={style.bankValue}>
											{data.address.bankName}
										</span>
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
										<span className={style.bankLabel}>
											State/region/district:
										</span>
										<span className={style.bankValue}>
											{data.address.stateRegion}
										</span>
									</div>

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
					</div>
				</div>
			</div>
		</div>
	);
};
