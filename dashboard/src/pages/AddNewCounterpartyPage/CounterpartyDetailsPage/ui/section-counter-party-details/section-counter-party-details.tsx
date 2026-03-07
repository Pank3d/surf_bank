import { internalPath } from '@/shared/routes/routes';
import style from './section-counter-party-details.module.scss';
import { accounts } from '../../model/data';
import arrow from '@/assets/arrow-gray.svg';
import { StepsButtons } from '@/widgets';
export const SectionCounterpartyDetails = () => (
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

		<StepsButtons
			back={internalPath.counterparties.base}
			to={internalPath.counterparties.accountDetails}
		/>
	</div>
);
