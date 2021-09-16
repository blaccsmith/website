import {
	Box,
	Divider,
	SlideFade,
	Stack,
	Center,
	Text,
	HStack,
} from '@chakra-ui/react';
import { Author } from 'types';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import { ImTwitter, ImGithub, ImLinkedin } from 'react-icons/im';

interface Props {
	show: boolean;
	data: Author;
}
export default function AuthorInfo({ data, show }: Props): JSX.Element {
	return (
		<SlideFade in={show} offsetY="20px">
			<Box
				pos="sticky"
				top="24"
				h="fit-content"
				minW="fit-content"
				w="250px"
				rounded="md"
				d={{ base: 'none', lg: 'block' }}
				border="1px"
				overflow="hidden"
				borderColor="#424242"
			>
				<Stack spacing={1} alignSelf="center" p="3">
					<Center
						minW="24"
						rounded="full"
						overflow="hidden"
						minH="24"
						alignSelf="center"
						userSelect="none"
						bg="brand.accent.dark"
						pos="relative"
					>
						{data.photo ? (
							<Image
								alt="author's photo"
								layout="fill"
								objectFit="cover"
								src={data.photo}
							/>
						) : (
							<Text
								fontWeight="medium"
								fontSize="xl"
								color="brand.black"
							>
								{data.name[0]}
							</Text>
						)}
					</Center>
					<Text color="brand.white" textAlign="center" fontSize="sm">
						About the author
					</Text>
					<Text color="brand.white" textAlign="center" fontSize="lg">
						{data.name}
					</Text>
				</Stack>
				<Divider />

				<HStack size="sm" w="full" variant="ghost">
					{data.twitter && (
						<NextLink href={data.twitter} passHref>
							<Center
								py="3"
								as="a"
								target="_blank"
								cursor="pointer"
								color="brand.white"
								_hover={{ bg: 'rgba(255,255,255,0.15)' }}
								_active={{ bg: 'rgba(255,255,255,0.15)' }}
								_focus={{ bg: 'rgba(255,255,255,0.15)' }}
								flexGrow={1}
							>
								<ImTwitter size={18} />
							</Center>
						</NextLink>
					)}
					{data.github && (
						<NextLink href={data.github} passHref>
							<Center
								py="3"
								as="a"
								target="_blank"
								cursor="pointer"
								color="brand.white"
								_hover={{ bg: 'rgba(255,255,255,0.15)' }}
								_active={{ bg: 'rgba(255,255,255,0.15)' }}
								_focus={{ bg: 'rgba(255,255,255,0.15)' }}
								flexGrow={1}
							>
								<ImGithub size={18} />
							</Center>
						</NextLink>
					)}
					{data.linkedin && (
						<NextLink href={data.linkedin} passHref>
							<Center
								py="3"
								as="a"
								target="_blank"
								cursor="pointer"
								color="brand.white"
								_hover={{ bg: 'rgba(255,255,255,0.15)' }}
								_active={{ bg: 'rgba(255,255,255,0.15)' }}
								_focus={{ bg: 'rgba(255,255,255,0.15)' }}
								flexGrow={1}
							>
								<ImLinkedin size={18} />
							</Center>
						</NextLink>
					)}
				</HStack>
			</Box>
		</SlideFade>
	);
}
