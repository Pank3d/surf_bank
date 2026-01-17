import { Section } from '@/shared/ui';
import {
	SectionNotifications,
	SectionOperations,
	SectionFinancial,
	SectionTable,
} from './ui';
import { useState } from 'react';

export const DashboardPage = () => {
	const [currencyType, setCurrencyType] = useState<'crypto' | 'fiat'>('crypto');
	return (
		<Section title='Dashboard'>
			<SectionNotifications />
			<SectionOperations />
			<SectionFinancial
				currencyType={currencyType}
				onCurrencyTypeChange={setCurrencyType}
			/>
			<SectionTable currencyType={currencyType} />
		</Section>
	);
};
