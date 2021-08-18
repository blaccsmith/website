import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		purple: {
			900: '#7B61FF',
		},
		black: {
			900: '#333333',
		},
		gray: {
			900: '#909090',
		},
	},
	fonts: {
		heading: 'Rubik',
		body: 'Inter',
	},
});
