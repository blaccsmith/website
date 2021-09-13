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

export default function Resources() {
	const toast = useToast();
	const [repo, setRepo] = useState('');
	const [repos, setRepos] = useState<{ repository: Repository }[]>([]);
	const [tags, setTags] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleClick = async () => {
		if (!repo.startsWith('https://github.com')) setIsError(true);
		else {
			setIsError(false);
			const { data } = await axios.post('/api/resources', { url: repo });

			toast({
				title: data.message,
				status: 'success',
				duration: 4000,
				isClosable: true,
			});
		}
	};

	const fetchData = async () => {
		setLoading(true);
		const { data } = await axios.get('/api/resources');
		setRepos(data.resources);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (repos.length) {
			const temp: string[] = [];
			repos.forEach(({ repository }: { repository: Repository }) => {
				temp.push(
					...repository.repositoryTopics.nodes.map(
						(el) => el.topic.name
					)
				);
			});
			setTags(Array.from(new Set(temp)));
		}
	}, [repos]);

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
				overflowY="hidden"
				overflowX="scroll"
				css={{
					'&::-webkit-scrollbar': { display: 'none' },
				}}
			>
				{tags.map((el) => (
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
				{repos.map(({ repository }, idx) => (
					<Repo key={idx} data={repository} isLoaded={!loading} />
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
							color={isError ? 'red.300' : 'brand.white'}
						>
							{isError
								? 'Not a valid repo'
								: 'Paste the repo url'}
						</FormHelperText>
					</FormControl>
				</Box>
			</SlideFade>
		</Box>
	);
}
