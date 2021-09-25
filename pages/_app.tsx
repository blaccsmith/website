import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';

import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/900.css';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import Layout from '@/components/atoms/Layout';
import Sidebar from '@/components/molecules/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Sidebar />
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}
export default MyApp;
