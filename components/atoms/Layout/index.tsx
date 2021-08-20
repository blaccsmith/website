import { Box } from '@chakra-ui/layout';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
	return (
		<Box w="100vw" minH="100vh" bg="black" pos="relative">
			{children}
		</Box>
	);
}
