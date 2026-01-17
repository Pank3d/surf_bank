import style from './Table.module.scss';
import { TableRow } from '../TableRow/TableRow';
import { TableRowMobile } from '../TableRow/TableRow-mobile';
import {
	cryptoTableData,
	fiatTableData,
} from '@/pages/DashboardPage/ui/section-table/model/data';
import type {
	CryptoTransaction,
	FiatTransaction,
} from '@/pages/DashboardPage/ui/section-table/types';

interface Props {
	currencyType?: 'crypto' | 'fiat';
}

export const Table = ({ currencyType = 'crypto' }: Props) => {
	const isFiat = currencyType === 'fiat';
	const tableData = isFiat ? fiatTableData : cryptoTableData;

	return (
		<>
			<table className={style.table}>
				<thead className={style.head}>
					<tr className={style.row}>
						<th className={style.cell}>ID</th>
						<th className={style.cell}>Date</th>
						<th className={style.cell}>Transfer amount</th>
						{!isFiat && <th className={style.cell}>Amount received</th>}
						<th className={style.cell}>Type</th>
						{!isFiat && <th className={style.cell}>Fee</th>}
						<th className={style.cell}>Status</th>
					</tr>
				</thead>
				<tbody className={style.body}>
					{tableData.map((transaction, index) => {
						if (isFiat) {
							const fiatTransaction = transaction as FiatTransaction;
							return (
								<TableRow
									key={`fiat-${index}`}
									id={fiatTransaction.id}
									date={fiatTransaction.date}
									transfer_amount={fiatTransaction.transfer_amount}
									type={fiatTransaction.type}
									status={fiatTransaction.status}
									isFiat={true}
								/>
							);
						} else {
							const cryptoTransaction = transaction as CryptoTransaction;
							return (
								<TableRow
									key={`crypto-${index}`}
									id={cryptoTransaction.id}
									date={cryptoTransaction.date}
									transfer_amount={cryptoTransaction.transfer_amount}
									received_amount={cryptoTransaction.received_amount}
									type={cryptoTransaction.type}
									fee={cryptoTransaction.fee}
									status={cryptoTransaction.status}
									sender={cryptoTransaction.sender}
									receiver={cryptoTransaction.receiver}
									isFiat={false}
								/>
							);
						}
					})}
				</tbody>
			</table>

			<table className={style.table__mobile}>
				<tbody className={style.body}>
					{tableData.map((transaction, index) => {
						if (isFiat) {
							const fiatTransaction = transaction as FiatTransaction;
							return (
								<TableRowMobile
									key={`mobile-fiat-${index}`}
									id={fiatTransaction.id}
									date={fiatTransaction.date}
									transfer_amount={fiatTransaction.transfer_amount}
									type={fiatTransaction.type}
									status={fiatTransaction.status}
									isFiat={true}
								/>
							);
						} else {
							const cryptoTransaction = transaction as CryptoTransaction;
							return (
								<TableRowMobile
									key={`mobile-crypto-${index}`}
									id={cryptoTransaction.id}
									date={cryptoTransaction.date}
									transfer_amount={cryptoTransaction.transfer_amount}
									received_amount={cryptoTransaction.received_amount}
									type={cryptoTransaction.type}
									fee={cryptoTransaction.fee}
									status={cryptoTransaction.status}
									isFiat={false}
								/>
							);
						}
					})}
				</tbody>
			</table>
		</>
	);
};
