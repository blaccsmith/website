import { GetStaticProps } from 'next';
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	HStack,
	Input,
	useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import resources from './api/resources';

interface Props {
	resources: any;
}

export default function Resources({ resources }: Props) {
	const [isError, setIsError] = useState(false);
	const [repo, setRepo] = useState('');
	const toast = useToast();

	const handleClick = async () => {
		if (!repo.startsWith('https://github.com')) setIsError(true);
		else {
			setIsError(false);
			const { data } = await axios.post('/api/resources');

			toast({
				title: data.message,
				status: 'success',
				duration: 4000,
				isClosable: true,
			});
		}
	};

	return (
		<Box minHeight="calc(100vh - 218px)" p="16">
			<Heading as="h1" color="brand.white" fontSize="4xl" mb="12">
				Resources
			</Heading>
			<FormControl id="Repo">
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
			{resources.map(({ id, resource }: any) => {
				return <Box key={id}>{resource.url}</Box>;
			})}
		</Box>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data }: any = await axios.get(
		'https://3000-ivory-pig-9rew31cw.ws-us15.gitpod.io/api/resources'
	);
	
	return {
		props: {
			resources: data,
		},
	};
};