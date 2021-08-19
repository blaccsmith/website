import { Flex } from '@chakra-ui/layout';
import Image from 'next/image';

const HeaderUI = () => {
	return (
		<Flex
			as="header"
			p="5"
			pl="6"
			bg="translucent"
			pos="sticky"
			top="0"
			w="full"
			zIndex="banner"
			backdropFilter="blur(10px)"
			justifyContent="space-between"
		>
			<Image width={32} height={32} src="/logo-light.png" />
		</Flex>
	);
};

export default function Header(): JSX.Element {
	return <HeaderUI />;
}
