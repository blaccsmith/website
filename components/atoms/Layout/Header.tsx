import { Flex, Text } from '@chakra-ui/layout';
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
			<Image alt="logo" width={32} height={32} src="/logo-light.png" />
			<Text color="brand.white">{process.env.NODE_ENV}</Text>
		</Flex>
	);
};

export default function Header(): JSX.Element {
	return <HeaderUI />;
}
