import { useState } from 'react';
import { SectionFirst, SectionExchange, SectionComplete } from './ui';
import { Section } from '@/shared/ui';
import type { ExchangeData } from './types';

export const ExchangePage = () => {
	const [step, setStep] = useState<'first' | 'exchange' | 'complete'>('first');
	const [exchangeData, setExchangeData] = useState<ExchangeData | null>(null);

	const handleFirstComplete = (data: ExchangeData) => {
		setExchangeData(data);
		setStep('exchange');
	};

	const handleExchangeComplete = () => {
		setStep('complete');
	};

	const handleBack = () => {
		setStep('exchange');
	};

	const getTitle = () => {
		switch (step) {
			case 'first':
				return 'Converted';
			case 'exchange':
				return 'Exchange';
			case 'complete':
				return 'Complete';
			default:
				return 'Converted';
		}
	};

	const getSubtitle = () => {
		if (step !== 'first') {
			return 'ID: f8g7h8j90hk7g8d9f0hjhg789';
		}
		return undefined;
	};

	return (
		<Section title={getTitle()} subtitle={getSubtitle()}>
			{step === 'first' && <SectionFirst onClick={handleFirstComplete} />}
			{step === 'exchange' && exchangeData && (
				<SectionExchange data={exchangeData} onClick={handleExchangeComplete} />
			)}
			{step === 'complete' && exchangeData && (
				<SectionComplete data={exchangeData} onClick={handleBack} />
			)}
		</Section>
	);
};
