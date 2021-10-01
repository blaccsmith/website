import { Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';

export default function Footer(): JSX.Element {
	return (
		<Flex p="6" w="full" bg="brand.black" alignItems="center">
			<Image alt="logo" width={32} height={32} src="/logo-light.png" />
			<Text ml="8" color="#fff">
				This is the footer 😅
			</Text>
		</Flex>
	);
}
