import style from './section-counterparties.module.scss';
import { Button } from '@/shared/ui';
import { internalPath } from '@/shared/routes/routes';
import { useNavigate } from 'react-router-dom';
import arrow from '@/assets/arrow-gray.svg';
import { accounts } from '../../model/data';
import { StepsButtons } from '@/widgets';

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

			<StepsButtons
				back={internalPath.sendMoney.account}
				to={internalPath.sendMoney.accountDetails}
			/>
		</div>
	);
};
