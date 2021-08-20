import { Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';

export default function Footer(): JSX.Element {
	return (
		<Flex p="12" w="full" bg="black" alignItems="center">
			<Image width={50} height={50} src="/logo-light.png" />
			<Text ml="8" color="#fff">
				This is the footer 😅
			</Text>
		</Flex>
	);
}
