import { pendingRepos } from '@/utils/graphql/queries';
import {
	Flex,
	Heading,
	Center,
	Box,
	Link,
	Stack,
	Text,
	HStack,
} from '@chakra-ui/react';
import useRepos from 'hooks/useRepos';
import React from 'react';
import { MdCheck, MdClose, MdCallMade } from 'react-icons/md';

interface Props {
	handleClick: (approved: boolean) => void;
}

const ResourcesUI = ({ handleClick }: Props) => {
	const { error, repos } = useRepos({ query: pendingRepos });

	if (error) return <Text>{error.toString()}</Text>;
	return (
		<Flex
			py="16"
			flexGrow={1}
			justifyContent="start"
			alignItems="center"
			flexDir="column"
		>
			<Heading
				as="h3"
				fontSize="3xl"
				textAlign="center"
				color="brand.white"
			>
				Pending Resources
			</Heading>
			<Text color="brand.white" w="50%" mt="4" textAlign="center">
				Make sure these submissions are actual Github repos. If so,
				approve them, otherwise, decline them.
			</Text>
			<Box spacing={12} mt={32} w="full" maxW="650px">
				<Stack spacing={12}>
					{repos?.map((repo, idx) => (
						<Flex
							key={idx}
							p="6"
							w="full"
							bg="#2e2e2e"
							rounded="md"
							justifyContent="space-between"
							alignItems="center"
						>
							<Text color="brand.white">{repo.url}</Text>
							<HStack spacing={3}>
								<Link isExternal href={repo.url}>
									<Center
										as="button"
										minH="6"
										minW="6"
										rounded="full"
										cursor="pointer"
										color="brand.white"
										transition="all 0.2s"
										_hover={{ bg: 'brand.black' }}
									>
										<MdCallMade size={18} />
									</Center>
								</Link>
								<Center
									as="button"
									minH="6"
									minW="6"
									rounded="full"
									cursor="pointer"
									color="brand.purple.500"
									transition="all 0.2s"
									onClick={() => handleClick(true)}
									_hover={{ bg: 'brand.black' }}
								>
									<MdCheck size={18} />
								</Center>
								<Center
									as="button"
									minH="6"
									minW="6"
									rounded="full"
									cursor="pointer"
									color="red.500"
									transition="all 0.2s"
									onClick={() => handleClick(false)}
									_hover={{ bg: 'brand.black' }}
								>
									<MdClose size={18} />
								</Center>
							</HStack>
						</Flex>
					))}
				</Stack>
			</Box>
		</Flex>
	);
};

export default function Resources() {
	const handleClick = (approved: boolean) => {
		alert(approved);
	};
	return <ResourcesUI handleClick={handleClick} />;
}
