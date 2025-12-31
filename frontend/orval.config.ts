export default {
	api: {
		input: {
			target: './api-spec.yaml',
		},
		output: {
			target: './src/api/generated.ts',
			client: 'react-query',
			prettier: true,

			override: {
				mutator: {
					path: './src/api/axios-instance.ts',
					name: 'customInstance',
					param: 'data',
					isRaw: true,
				},
			},
		},
	},
};
