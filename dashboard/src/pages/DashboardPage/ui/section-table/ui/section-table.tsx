import style from './section-table.module.scss';
import { Table } from '@/shared/ui';
import { Title } from '@/shared/ui';

interface Props {
	currencyType: 'crypto' | 'fiat';
}

export const SectionTable = ({ currencyType }: Props) => (
	<div className={style.container}>
		<Title>History</Title>
		<Table currencyType={currencyType} />
	</div>
);
