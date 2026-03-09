import type { Currency } from "./model/currencies";


export interface ExchangeData {
	fromCurrency: Currency;
	toCurrency: Currency;
	fromAmount: string;
	toAmount: string;
	fromAccount?: string;
	toAccount?: string;
}
