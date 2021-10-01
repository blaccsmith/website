/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	Text,
	Heading,
	Flex,
	Input,
	useToast,
	SlideFade,
	HStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Repo from '@/components/atoms/Repo';
import { Repository } from 'types';
import useRepos from '@/hooks/useRepos';

export default function Resources() {
	const toast = useToast();
	const [repo, setRepo] = useState('');
	const [topic, setTopic] = useState('');
	const [adding, setAdding] = useState(false);
	const [tags, setTags] = useState<string[]>([]);
	const [isInputError, setIsInputError] = useState(false);
	const { repos, error, loading } = useRepos();

	const filteredTags = tags.filter((el) => el === topic);
	const filteredRepos = repos?.filter((repo) =>
		repo.repositoryTopics.nodes.some((el) => el.topic.name === topic)
	);

	const handleTagClick = (tag: string) => {
		setTopic(topic === tag ? '' : tag);
	};

	const handleClick = async () => {
		try {
			if (!repo.startsWith('https://github.com')) {
				setIsInputError(true);
			} else if (repos.find((el) => el.url === repo)) {
				toast({
					title: 'Repository already added',
					description:
						'This repository has already been added and approved.',
					status: 'error',
					duration: 5000,
					isClosable: true,
				});
			} else {
				setAdding(true);
				setIsInputError(false);
				const { data } = await axios.post('/api/resources', {
					url: repo,
				});
				setAdding(false);
				setRepo('');
				toast({
					title: data?.message?.addRepo ?? data.error,
					status: data?.message ? 'success' : 'error',
					duration: 4000,
					isClosable: true,
				});
			}
		} catch (error: any) {
			toast({
				title: error.message,
				status: 'error',
				duration: 4000,
				isClosable: true,
			});
		}
	};

	useEffect(() => {
		if (repos?.length) {
			const temp: string[] = [];
			repos.forEach((repo: Repository) => {
				temp.push(
					...repo.repositoryTopics.nodes.map((el) => el.topic.name)
				);
			});
			setTags(Array.from(new Set(temp)));
		}
	}, [repos]);

	useEffect(() => {
		error && setIsInputError(true);
	}, [error]);

	return (
		<Box
			minHeight="calc(100vh - 218px)"
			p={{ base: '3', md: '16' }}
			pos="relative"
		>
			<Heading as="h1" color="brand.white" fontSize="4xl">
				Resources
			</Heading>
			<HStack
				w="full"
				mt="4"
				// bg="red"
				minH="27px"
				overflowY="hidden"
				overflowX="scroll"
				css={{
					'&::-webkit-scrollbar': { display: 'none' },
				}}
			>
				{(topic ? filteredTags : tags).map((el) => (
					<Text
						key={el}
						minW="max-content"
						py="1"
						px="2"
						rounded="md"
						fontSize="sm"
						bg="#333"
						userSelect="none"
						cursor="pointer"
						color="brand.offWhite"
						transition="all .2s"
						onClick={() => handleTagClick(el)}
						_hover={{
							borderColor: 'transparent',
							bg: 'brand.purple.400',
						}}
					>
						{el}
					</Text>
				))}
			</HStack>
			<Grid my="12" rowGap="6" columnGap="3" templateColumns="1fr 1fr">
				{(topic ? filteredRepos : repos)?.map((el, idx) => (
					<Repo key={idx} data={el} />
				))}
			</Grid>
			<SlideFade in={!loading} offsetY="20px">
				<Box
					p="3"
					bg="#292929"
					rounded="xl"
					justifyContent="space-between"
					alignItems="center"
				>
					<Text color="brand.offWhite" mb="2">
						Have a repo you want others to know about? Let us know.
					</Text>
					<FormControl id="Repo">
						<Flex flexDir={{ base: 'column', md: 'row' }}>
							<Input
								value={repo}
								type="text"
								color="brand.white"
								bg="#353535"
								borderColor="transparent"
								_hover={{ borderColor: 'brand.purple.400' }}
								_active={{ borderColor: 'brand.purple.400' }}
								_focus={{ borderColor: 'brand.purple.400' }}
								onChange={(e) => setRepo(e.target.value)}
								placeholder="Ex: https://github.com/blaccsmith/website"
							/>
							<Button
								color="brand.white"
								px="12"
								isLoading={adding}
								loadingText="Submitting"
								mt={{ base: '2', md: '0' }}
								ml={{ base: '0', md: '2' }}
								transition="all .2s"
								onClick={handleClick}
								bgGradient="linear(to-r, brand.purple.400, brand.purple.500)"
								_hover={{}}
								_active={{}}
								_focus={{}}
							>
								Submit
							</Button>
						</Flex>
						<FormHelperText
							color={isInputError ? 'red.300' : 'brand.white'}
						>
							{isInputError
								? 'Not a valid repo'
								: 'Paste the repo url'}
						</FormHelperText>
					</FormControl>
				</Box>
			</SlideFade>
		</Box>
	);
}
