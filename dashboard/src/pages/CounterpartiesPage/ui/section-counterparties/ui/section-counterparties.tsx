import style from './section-counterparties.module.scss';
import { LLC, LLC_DATA, type LLCType } from '../model/data';

import { Button } from '@/shared/ui';
import { useState } from 'react';
import plusFilled from '@/assets/plus-filled.svg';
import plus from '@/assets/plus-white.svg';
import { internalPath } from '@/shared/routes/routes';
import { useNavigate } from 'react-router-dom';

export const SectionCounterparties = () => {
	const [selectedCompany, setSelectedCompany] = useState<LLCType>(LLC[0]); // По умолчанию первая компания
	const navigate = useNavigate();

	// Получаем данные для выбранной компании
	const selectedData = LLC_DATA[selectedCompany];

	const handleAddCounterparty = () => {
		navigate(internalPath.counterparties.counterpartyDetails);
	};

	const handleCompanySelect = (company: LLCType) => {
		setSelectedCompany(company);
	};

	return (
		<div className={style.container}>
			{LLC.length > 0 && (
				<>
					<div className={style.sidebar}>
						<div className={style.topBar}>
							<Button
								dark
								onClick={handleAddCounterparty}
								className={style.add_button}
							>
								Add New Counterparty
							</Button>
						</div>
						<div className={style.navigation}>
							{LLC.map(item => (
								<div
									key={item}
									className={`${style.navigation__item} ${
										selectedCompany === item
											? style.navigation__item_active
											: ''
									}`}
									onClick={() => handleCompanySelect(item)}
								>
									{item}
								</div>
							))}
						</div>
					</div>
					<div className={style.details}>
						<h1 className={style.llc_title}>
							{selectedData.recipient.recipientName}
						</h1>
						{selectedData?.recipient && (
							<div className={style.bankDetails}>
								<h3 className={style.bankDetailsTitle}>
									Recipient information
								</h3>
								<div className={style.bankGrid}>
									{/* Первая строка */}
									<div className={style.bankRow}>
										<span className={style.bankLabel}>Recipient name:</span>
										<span className={style.bankValue}>
											{selectedData.recipient.recipientName}
										</span>
									</div>
									<div className={style.bankRow}>
										<span className={style.bankLabel}>Recipient ID:</span>
										<span className={style.bankValue}>
											{selectedData.recipient.recipientId}
										</span>
									</div>

									{/* Вторая строка */}
									<div className={style.bankRow}>
										<span className={style.bankLabel}>Account ID:</span>
										<span className={style.bankValue}>
											{selectedData.recipient.accountId}
										</span>
									</div>
									<div className={style.bankRow}>
										<span className={style.bankLabel}>Currency:</span>
										<span className={style.bankValue}>
											{selectedData.recipient.currency}
										</span>
									</div>

									{/* Третья строка */}
									<div className={style.bankRow}>
										<span className={style.bankLabel}>Sending method:</span>
										<span className={style.bankValue}>
											{selectedData.recipient.sendingMethod}
										</span>
									</div>
									<div className={style.bankRow}>
										<span className={style.bankLabel}>IBAN:</span>
										<span className={style.bankValue}>
											{selectedData.recipient.iban}
										</span>
									</div>

									{/* Четвертая строка */}
									<div className={style.bankRow}>
										<span className={style.bankLabel}>SWIFT/BIC:</span>
										<span className={style.bankValue}>
											{selectedData.recipient.swiftCode}
										</span>
									</div>
									<div className={style.bankRow}>
										{/* Пустая ячейка для выравнивания сетки */}
									</div>
								</div>
							</div>
						)}

						{/* Bank Details */}
						{selectedData?.address && (
							<div className={style.bankDetails}>
								<h3 className={style.bankDetailsTitle}>Bank Details</h3>
								<div className={style.bankGrid}>
									{/* Первая строка */}
									<div className={style.bankRow}>
										<span className={style.bankLabel}>Bank name:</span>
										<span className={style.bankValue}>
											{selectedData.address.bankName}
										</span>
									</div>
									<div className={style.bankRow}>
										<span className={style.bankLabel}>Address line:</span>
										<span className={style.bankValue}>
											{selectedData.address.addressLine}
										</span>
									</div>

									{/* Вторая строка */}
									<div className={style.bankRow}>
										<span className={style.bankLabel}>City:</span>
										<span className={style.bankValue}>
											{selectedData.address.city}
										</span>
									</div>
									<div className={style.bankRow}>
										<span className={style.bankLabel}>
											State/region/district:
										</span>
										<span className={style.bankValue}>
											{selectedData.address.stateRegion}
										</span>
									</div>

									{/* Третья строка */}
									<div className={style.bankRow}>
										<span className={style.bankLabel}>Zip/postal code:</span>
										<span className={style.bankValue}>
											{selectedData.address.zipCode}
										</span>
									</div>
									<div className={style.bankRow}>
										<span className={style.bankLabel}>Country:</span>
										<span className={style.bankValue}>
											{selectedData.address.country}
										</span>
									</div>
								</div>
							</div>
						)}
					</div>
				</>
			)}

			{!LLC.length && (
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
		</div>
	);
};
