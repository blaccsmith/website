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
import { DefaultSeo } from 'next-seo';
import React from 'react';
import { theme } from '../theme';
import Layout from '@/components/atoms/Layout';
import Footer from '@/components/atoms/Layout/Footer';
import Header from '@/components/atoms/Layout/Header';
import { canoncialUrl } from '../constants';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<DefaultSeo
					title="The Black Coder Community"
					openGraph={{
						type: 'website',
						url: `${canoncialUrl}`,
						images: [
							{
								url: `${canoncialUrl}/banner.png`,
								width: 1200,
								height: 630,
								alt: 'BLACC Banner',
								type: 'image/png',
							},
						],
						title: 'BLACC',
						site_name: 'The Black Coder Community',
					}}
					twitter={{
						handle: '@blaccxyz_',
						cardType: 'summary_large_image',
					}}
				/>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</Layout>
		</ChakraProvider>
	);
}
export default MyApp;
