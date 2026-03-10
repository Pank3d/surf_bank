import { useState } from 'react';
import { StepsButtons } from '@/widgets';
import { СurrencyCard } from '@/shared/ui';
import { internalPath } from '@/shared/routes/routes';
import euro from '@/assets/euro-black.svg';
import style from './section-account.module.scss';
import { Link } from 'react-router-dom';

// Данные для карточек счетов
const accounts = [
	{
		icon: euro,
		title: 'EUR',
		description: 'Balance: 11 980.14',
		id: 'ff87hgj9hg6hk678',
	},
];

export const SectionAccount = () => {
	const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

	const handleCardClick = (accountId: string) => {
		setSelectedAccount(accountId);
	};

	return (
		<>
			<div className={style.cards}>
				{accounts.map(account => (
					<СurrencyCard
						key={account.id}
						icon={account.icon}
						title={account.title}
						description={account.description}
						id={account.id}
						active={selectedAccount === account.id}
						onClick={() => handleCardClick(account.id)}
					/>
				))}

				{/* Карточка для связи с поддержкой */}
				<div className={style.card}>
					<h6 className={style.title}>If you need one more EUR account</h6>
					<p className={style.description}>
						Please contact{' '}
						<Link to={internalPath.support} className={style.link}>
							support@surfbank.co
						</Link>{' '}
						or your dedicated Customer Success manager
					</p>
				</div>
			</div>

			<StepsButtons
				back={internalPath.sendMoney.currency}
				to={internalPath.sendMoney.counterparty}
				disabled={!selectedAccount}
			/>
		</>
	);
};
