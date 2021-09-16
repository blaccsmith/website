import { Heading, HStack, Flex, Stack, Text, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BlogMetadata } from 'types';
import Image from 'next/image';
import { MdAccessTime, MdEdit } from 'react-icons/md';

interface Props {
	metadata: BlogMetadata;
}
export default function BlogHeader({ metadata }: Props): JSX.Element {
	const [readTime, setReadTime] = useState(0);
	const tags = metadata.tags?.split(',').map((tag) => tag.trim());

	useEffect(() => {
		const text = document.getElementById('content')?.innerText;
		const wpm = 225;
		const words = text?.trim().split(/\s+/).length;
		setReadTime(Math.ceil((words as number) / wpm));
	}, []);

	return (
		<Stack mb="9" spacing={3}>
			<Heading as="h1" color="white" fontWeight="bold">
				{metadata.title}
			</Heading>
			<Flex
				alignItems="center"
				justifyContent="start"
				flexDir={{ base: 'column', md: 'row' }}
			>
				<HStack spacing={2} alignSelf="start">
					<Center
						minW="6"
						rounded="full"
						overflow="hidden"
						minH="6"
						pos="relative"
						userSelect="none"
						bg="brand.accent.dark"
					>
						{metadata.author.photo ? (
							<Image
								alt="author's photo"
								layout="fill"
								objectFit="cover"
								src={metadata.author.photo}
							/>
						) : (
							<Text
								fontWeight="medium"
								fontSize="sm"
								color="brand.black"
							>
								{metadata.author.name[0]}
							</Text>
						)}
					</Center>
					<Text color="white" fontWeight="light">
						{metadata.author.name}
					</Text>
				</HStack>
				<HStack
					alignSelf="start"
					mt={{ base: '4', md: '0' }}
					ml={{ base: '0', md: '4' }}
				>
					<HStack spacing={1}>
						<MdEdit size={16} color="#fff" />
						<Text color="white" fontWeight="light">
							{metadata.published}
						</Text>
					</HStack>
					<HStack spacing={1}>
						<MdAccessTime size={16} color="#fff" />
						<Text color="white" fontWeight="light">
							{readTime} min read
						</Text>
					</HStack>
				</HStack>
			</Flex>
			<HStack>
				{tags?.map((tag, i) => (
					<Text
						key={i}
						px="2"
						py="1"
						border="1px"
						fontSize="sm"
						color="white"
						userSelect="none"
						borderRadius="md"
						fontWeight="medium"
						borderColor="#424242"
					>
						{tag.toUpperCase()}
					</Text>
				))}
			</HStack>
		</Stack>
	);
}
