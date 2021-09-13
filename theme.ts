import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	fonts: {
		heading: 'Raleway',
		body: 'Montserrat',
		subtitle: 'Lato',
	},
	fontSizes: {
		xs: '0.64rem',
		sm: '0.8rem',
		md: '1rem',
		lg: '1.25rem',
		xl: '1.563rem',
		'2xl': '1.953rem',
		'3xl': '2.441rem',
		'4xl': '3.052rem',
		'5xl': '3.815rem',
		'6xl': '4.768rem',
		'7xl': '5.960rem',
		'8xl': '7.451rem',
		'9xl': '9.313rem',
	},
	colors: {
		brand: {
			white: '#f5f5f5',
			offWhite: '#eeeeee',
			black: '#212121',
			translucent: 'rgba(33, 33, 33, 0.65)',
			purple: {
				400: '#7B61FF',
				500: '#5b44fd',
			},
			accent: { light: '#6200EA', dark: '#B388FF' },
		},
	},
});
