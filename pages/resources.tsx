import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Grid,
	Heading,
	HStack,
	Input,
	useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Repo from '@/components/atoms/Repo';
import { Repository } from 'types';

interface Props {
	resources: any;
}

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
		<Box minHeight="calc(100vh - 218px)" p={{ base: '6', lg: '16' }}>
			<Heading as="h1" color="brand.white" fontSize="4xl" mb="12">
				Resources
			</Heading>
			<FormControl id="Repo" mb="12">
				<FormLabel color="brand.white">Paste a Repo url</FormLabel>
				<HStack>
					<Input
						value={repo}
						type="text"
						color="brand.white"
						_active={{ borderColor: 'brand.purple.400' }}
						_focus={{ borderColor: 'brand.purple.400' }}
						onChange={(e) => setRepo(e.target.value)}
						placeholder="Ex: https://github.com/blaccsmith/website"
					/>
					<Button
						color="brand.white"
						px="12"
						transition="all .2s"
						onClick={handleClick}
						bgGradient="linear(to-r, brand.purple.400, brand.purple.500)"
						_hover={{}}
						_active={{}}
						_focus={{}}
					>
						Submit
					</Button>
				</HStack>
				<FormHelperText color="red.300" d={isError ? 'block' : 'none'}>
					Not a valid repo
				</FormHelperText>
			</FormControl>
			<Grid rowGap="6" columnGap="3" templateColumns="1fr 1fr">
				{repos.map(({ repository }, idx) => (
					<Repo key={idx} data={repository} isLoaded={!loading} />
				))}
			</Grid>
		</Box>
	);
}
