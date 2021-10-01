import { Stack, Link, Center, SlideFade, Text, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import { MdInbox, MdMessage, MdLastPage } from 'react-icons/md';

export default function Sidebar(): JSX.Element {
	const router = useRouter();
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<Stack
			spacing={6}
			px="4"
			userSelect="none"
			pt="16"
			bg="#383838"
			overflowX="hidden"
			transition="all .2s"
			flex={`0 0 ${showSidebar ? '178.422px' : '80px'}`}
		>
			<Link isExternal href="https://blacc.xyz">
				<Center
					bg="black"
					rounded="full"
					pos="relative"
					overflow="hidden"
					h="12"
					w="12"
				>
					<Image
						alt="logo"
						src="/logo-light.png"
						width={32}
						height={32}
					/>
				</Center>
			</Link>
			<NextLink passHref href="/">
				<HStack as="a">
					<Center
						minH="12"
						minW="12"
						rounded="full"
						cursor="pointer"
						transition="all .2s"
						_hover={{ bg: 'rgba(0,0,0,.3)' }}
						color="brand.white"
						opacity={router.asPath === '/' ? 1 : 0.5}
					>
						<MdMessage size={24} />
					</Center>
					<SlideFade in={showSidebar} offsetX="20px" offsetY="0">
						<Text color="brand.white">Bot</Text>
					</SlideFade>
				</HStack>
			</NextLink>
			<NextLink passHref href="/resources">
				<HStack as="a">
					<Center
						minH="12"
						minW="12"
						rounded="full"
						cursor="pointer"
						transition="all .2s"
						_hover={{ bg: 'rgba(0,0,0,.3)' }}
						color="brand.white"
						opacity={router.asPath === '/resources' ? 1 : 0.5}
					>
						<MdInbox size={24} />
					</Center>
					<SlideFade in={showSidebar} offsetX="20px" offsetY="0">
						<Text color="brand.white">Resources</Text>
					</SlideFade>
				</HStack>
			</NextLink>
			<Center
				h="12"
				w="12"
				rounded="full"
				cursor="pointer"
				transition="all .2s"
				_hover={{ bg: 'rgba(0,0,0,.3)' }}
				color="brand.white"
				pos="absolute"
				bottom="4"
				onClick={() => setShowSidebar(!showSidebar)}
				transform={!showSidebar ? 'rotate(0)' : 'rotate(-180deg)'}
			>
				<MdLastPage size={24} />
			</Center>
		</Stack>
	);
}
