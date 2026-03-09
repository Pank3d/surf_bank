import { useState } from 'react';
import style from './section-counterparties.module.scss';
import { Button } from '@/shared/ui';
// import plusFilled from '@/assets/plus-filled.svg';
// import plus from '@/assets/plus-white.svg';
import { internalPath } from '@/shared/routes/routes';
import { useNavigate } from 'react-router-dom';
import arrow from '@/assets/arrow-gray.svg';
import { accounts as initialAccounts } from '../../model/data';
import { StepsButtons } from '@/widgets';
import clsx from 'clsx';
import backpack from '@/assets/backpack.svg';

// Определяем тип для аккаунта
type Account = {
	name: string;
	accountNumber: string;
	balance: string;
	icon: string;
};

export const SectionCounterparties = () => {
	const navigate = useNavigate();
	const [openCardId, setOpenCardId] = useState<number | null>(null);

	// Приводим initialAccounts к нужному типу (это наши 2 изначальных аккаунта)
	const typedInitialAccounts: Account[] = initialAccounts.map(account => ({
		...account,
		name: account.name,
		accountNumber: account.accountNumber,
		balance: account.balance,
		icon: account.icon,
	}));

	// Состояние для хранения текущих отображаемых аккаунтов
	const [displayedAccounts, setDisplayedAccounts] =
		useState<Account[]>(typedInitialAccounts);

	// Создаем массив дополнительных аккаунтов (5 штук)
	const additionalAccounts: Account[] = [
		{
			name: 'Surf Bank LLC',
			accountNumber: '123-abc-def456-ghi783',
			balance: '100.00',
			icon: backpack,
		},
		{
			name: 'Surf Bank LLC',
			accountNumber: '789-xyz-uvw123-xyz456',
			balance: '250.00',
			icon: backpack,
		},
		{
			name: 'Surf Bank LLC',
			accountNumber: '456-mno-pqr789-stu012',
			balance: '75.50',
			icon: backpack,
		},
		{
			name: 'Surf Bank LLC',
			accountNumber: '234-jkl-ghi345-mno678',
			balance: '500.00',
			icon: backpack,
		},
		{
			name: 'Surf Bank LLC',
			accountNumber: '567-stu-vwx901-yza234',
			balance: '1000.00',
			icon: backpack,
		},
	];

	// Все доступные аккаунты (для выпадающего списка)
	const allAccounts = [...typedInitialAccounts, ...additionalAccounts];

	const handleAddCounterparty = () => {
		navigate(internalPath.counterparties.counterpartyDetails);
	};

	const toggleCard = (id: number) => {
		setOpenCardId(openCardId === id ? null : id);
	};

	const selectCounterparty = (cardIndex: number, selectedAccount: Account) => {
		// Создаем новый массив с обновленным аккаунтом
		const updatedAccounts = [...displayedAccounts];
		updatedAccounts[cardIndex] = selectedAccount;

		// Обновляем состояние
		setDisplayedAccounts(updatedAccounts);

		// Закрываем аккордеон
		setOpenCardId(null);
	};

	return (
		<div className={style.container}>
			<div className={style.accountsSection}>
				<div className={style.accountsGrid}>
					{/* Отображаем аккаунты из состояния displayedAccounts */}
					{displayedAccounts.map((account, index) => (
						<div key={index} className={style.accountCardWrapper}>
							<div
								className={clsx(
									style.accountCard,
									openCardId === index && style.accountCardOpen,
								)}
								onClick={() => toggleCard(index)}
							>
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
									<img
										src={arrow}
										alt='Menu'
										className={clsx(
											style.arrowIcon,
											openCardId === index && style.arrowIconOpen,
										)}
									/>
								</div>
							</div>

							{/* Раскрывающийся список с дополнительными аккаунтами */}
							<div
								className={clsx(
									style.dropdownContent,
									openCardId === index && style.dropdownContentOpen,
								)}
							>
								<div className={style.dropdownInner}>
									{/* Показываем все аккаунты кроме текущего */}
									{allAccounts
										.filter(a => a.accountNumber !== account.accountNumber)
										.map((otherAccount, i) => (
											<div
												key={i}
												className={style.listItem}
												onClick={() => selectCounterparty(index, otherAccount)}
											>
												<span className={style.listItemText}>
													{otherAccount.name}
												</span>
												<img
													src={arrow}
													alt='→'
													className={style.listItemArrow}
												/>
											</div>
										))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Остальной код без изменений */}
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
