import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/components/atoms/Layout';
import Header from '@/components/atoms/Layout/Header';
import { theme } from 'theme';
import Footer from '@/components/atoms/Layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</Layout>
		</ChakraProvider>
	);
}
export default MyApp;
