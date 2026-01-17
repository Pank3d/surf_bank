import type { cryptoTableData, fiatTableData } from '../model/data';

export type CryptoTransaction = (typeof cryptoTableData)[number];
export type FiatTransaction = (typeof fiatTableData)[number];
export type Transaction = CryptoTransaction | FiatTransaction;
