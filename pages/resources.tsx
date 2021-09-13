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
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Repo from '@/components/atoms/Repo';

export default function Resources() {
	const toast = useToast();
	const [repo, setRepo] = useState('');
	const [repos, setRepos] = useState([]);
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
		console.log(data.resources);
		setRepos(data.resources);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Box
			minHeight="calc(100vh - 218px)"
			p={{ base: '3', md: '16' }}
			pos="relative"
		>
			<Heading as="h1" color="brand.white" fontSize="4xl" mb="12">
				Resources
			</Heading>
			<Grid mb="12" rowGap="6" columnGap="3" templateColumns="1fr 1fr">
				{repos.map(({ repository }, idx) => (
					<Repo key={idx} data={repository} isLoaded={!loading} />
				))}
			</Grid>
			<SlideFade in={!loading} offsetY="20px">
				<Box
					p="3"
					bg='#292929'
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
