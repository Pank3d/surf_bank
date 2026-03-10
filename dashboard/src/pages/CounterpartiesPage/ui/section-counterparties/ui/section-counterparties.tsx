import style from './section-counterparties.module.scss';
import { accounts } from '../model/data';

import { Button } from '@/shared/ui';

import plusFilled from '@/assets/plus-filled.svg';
import plus from '@/assets/plus-white.svg';
import { internalPath } from '@/shared/routes/routes';
import { useNavigate } from 'react-router-dom';
import arrow from '@/assets/arrow-gray.svg';
export const SectionCounterparties = () => {
	const navigate = useNavigate();

	const handleAddCounterparty = () => {
		navigate(internalPath.counterparties.counterpartyDetails);
	};

	return (
		<div className={style.container}>
			<div className={style.accountsSection}>
				<div className={style.accountsGrid}>
					{accounts.map(account => (
						<div className={style.accountCard}>
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
			{!accounts.length && (
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
