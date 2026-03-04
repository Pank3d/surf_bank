import style from './section-currency.module.scss';

import downloadIcon from '@/assets/download2.svg';
import arrow from '@/assets/arrow-currency.svg';
import dotsIcon from '@/assets/dots.svg';

import { DATA, accounts } from '../model/data';

export const SectionCurrency = () => {
	const data = DATA;
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
						<div key={account.currency} className={style.accountCard}>
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
								<img src={dotsIcon} alt='Menu' className={style.dotsIcon} />
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
		</div>
	);
};
