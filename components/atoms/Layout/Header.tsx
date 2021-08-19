import { Flex } from '@chakra-ui/layout';
import Image from 'next/image';

const HeaderUI = () => {
	return (
		<Flex
			p="12"
			bg="background"
			pos="sticky"
			top="0"
			w="full"
			justifyContent="space-between"
		>
			<Image width={50} height={50} src="/logo-light.png" />
		</Flex>
	);
};

export default function Header(): JSX.Element {
	return <HeaderUI />;
}
