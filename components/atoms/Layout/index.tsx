import { Box } from '@chakra-ui/layout';
import { ReactNode } from 'react';
import { RoomProvider } from '@liveblocks/react';
import RealtimeWrapper from '@/components/molecules/RealtimeWrapper';

interface Props {
	children: ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
	return (
		<RoomProvider id="test-room">
			<Box w="100vw" minH="100vh" bg="brand.black" pos="relative">
				<RealtimeWrapper>{children}</RealtimeWrapper>
			</Box>
		</RoomProvider>
	);
}
