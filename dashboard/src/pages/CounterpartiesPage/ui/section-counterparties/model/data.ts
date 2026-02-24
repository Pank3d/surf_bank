export const LLC = [
	'Surf Bank LLC',
	'Oracle LLS',
	'Google LLS',
	'Intel LLS',
	'IBM LLS',
] as const;

export const LLC_DATA = {
	'Surf Bank LLC': {
		address: {
			bankName: 'J.P.Morgan',
			city: 'New York',
			zipCode: 'EC1V078',
			country: 'USA',
			addressLine: '123 Main Street, Apt 4B, New York, NY 10001, USA',
			stateRegion: 'New York',
		},
		recipient: {
			recipientName: 'Surf Bank LLC',
			accountId: '79970DLOFKLV',
			sendingMethod: 'SEPA',
			swiftCode: 'SEO596B214',
			recipientId: '454-trhg-hjkg78j90h-kh7890',
			currency: 'EUR',
			iban: '454-trhg-hjkg78j90h-kh7890',
		},
	},

	'Oracle LLS': {
		address: {
			bankName: 'Bank of America',
			city: 'San Francisco',
			zipCode: '94105',
			country: 'USA',
			addressLine: '500 Oracle Parkway, Redwood City, CA 94065, USA',
			stateRegion: 'California',
		},
		recipient: {
			recipientName: 'Oracle LLS',
			accountId: 'ORCL7890123',
			sendingMethod: 'WIRE',
			swiftCode: 'BOFAUS3N',
			recipientId: '789-oplk-tyu12345-gh6789',
			currency: 'USD',
			iban: '789-oplk-tyu12345-gh6789',
		},
	},

	'Google LLS': {
		address: {
			bankName: 'Wells Fargo',
			city: 'Mountain View',
			zipCode: '94043',
			country: 'USA',
			addressLine: '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA',
			stateRegion: 'California',
		},
		recipient: {
			recipientName: 'Google LLS',
			accountId: 'GOOG4567890',
			sendingMethod: 'ACH',
			swiftCode: 'WFBIUS6S',
			recipientId: '456-google-llc-2024-001',
			currency: 'USD',
			iban: '456-google-llc-2024-001',
		},
	},

	'Intel LLS': {
		address: {
			bankName: 'Chase Bank',
			city: 'Santa Clara',
			zipCode: '95054',
			country: 'USA',
			addressLine: '2200 Mission College Blvd, Santa Clara, CA 95054, USA',
			stateRegion: 'California',
		},
		recipient: {
			recipientName: 'Intel LLS',
			accountId: 'INTL2345678',
			sendingMethod: 'SEPA',
			swiftCode: 'CHASUS33',
			recipientId: '234-intel-eu-2024-002',
			currency: 'EUR',
			iban: '234-intel-eu-2024-002',
		},
	},

	'IBM LLS': {
		address: {
			bankName: 'Citibank',
			city: 'Armonk',
			zipCode: '10504',
			country: 'USA',
			addressLine: '1 New Orchard Road, Armonk, NY 10504, USA',
			stateRegion: 'New York',
		},
		recipient: {
			recipientName: 'IBM LLS',
			accountId: 'IBM9876543',
			sendingMethod: 'WIRE',
			swiftCode: 'CITIUS33',
			recipientId: '987-ibm-global-2024-003',
			currency: 'USD',
			iban: '987-ibm-global-2024-003',
		},
	},
} as const;

// Типы для данных
export type LLCAddress = {
	bankName: string;
	city: string;
	zipCode: string;
	country: string;
	addressLine: string;
	stateRegion: string;
};

export type LLCRecipient = {
	recipientName: string;
	accountId: string;
	sendingMethod: string;
	swiftCode: string;
	recipientId: string;
	currency: string;
	iban: string;
};

export type LLCDataType = {
	address: LLCAddress;
	recipient: LLCRecipient;
};

// Тип для ключей LLC
export type LLCType = (typeof LLC)[number];