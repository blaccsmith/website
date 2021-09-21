import { Stack, Link, Center } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import NextLink from 'next/link';
import { MdInbox, MdMessage } from 'react-icons/md';

export default function Sidebar(): JSX.Element {
	const router = useRouter();

	return (
		<Stack spacing={6} w="20" px="4" pt="16" bg="#383838">
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
				<Center
					as="a"
					h="12"
					w="12"
					rounded="full"
					cursor="pointer"
					transition="all .2s"
					_hover={{ bg: 'rgba(0,0,0,.3)' }}
					color="brand.white"
					opacity={router.asPath === '/' ? 1 : 0.5}
				>
					<MdMessage size={24} />
				</Center>
			</NextLink>
			<NextLink passHref href="/resources">
				<Center
					as="a"
					h="12"
					w="12"
					rounded="full"
					cursor="pointer"
					transition="all .2s"
					_hover={{ bg: 'rgba(0,0,0,.3)' }}
					color="brand.white"
					opacity={router.asPath === '/resources' ? 1 : 0.5}
				>
					<MdInbox size={24} />
				</Center>
			</NextLink>
		</Stack>
	);
}
