import {
	Flex,
	Heading,
	Center,
	Box,
	Link,
	Stack,
	Text,
	HStack,
	useToast,
} from '@chakra-ui/react';
import useRepos from 'hooks/useRepos';
import useReviewRepo from 'hooks/useReviewRepo';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdCheck, MdClose, MdCallMade } from 'react-icons/md';
import empty from '../public/empty.png';

interface Props {
	handleClick: (url: string, approved: boolean) => void;
}

const ResourcesUI = ({ handleClick }: Props) => {
	const { error, repos } = useRepos();
	const unknown = repos === null || repos === undefined;

	if (error) return <Text>{error.toString()}</Text>;
	return (
		<Flex
			pt="16"
			pb="4"
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
			<Box spacing={12} mt={16} w="full" maxW="650px" overflowY="scroll">
				{unknown ? null : !repos?.length ? (
					<Stack spacing={12} mt={24}>
						<Center pos="relative" h="300px">
							<Image
								alt="empty state"
								src={empty}
								width="300px"
								placeholder="blur"
								objectFit="contain"
							/>
						</Center>
						<Text
							textAlign="center"
							fontWeight="medium"
							color="brand.accent.dark"
						>
							No pending repos to review at this time.
						</Text>
					</Stack>
				) : (
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
										onClick={() =>
											handleClick(repo.url, true)
										}
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
										onClick={() =>
											handleClick(repo.url, false)
										}
										_hover={{ bg: 'brand.black' }}
									>
										<MdClose size={18} />
									</Center>
								</HStack>
							</Flex>
						))}
					</Stack>
				)}
			</Box>
		</Flex>
	);
};

export default function Resources() {
	const toast = useToast();
	const router = useRouter();
	const [url, setUrl] = useState<string | null>(null);
	const [approved, setApproved] = useState<boolean | null>(null);
	const { res } = useReviewRepo({ variables: { url, approved } });

	useEffect(() => {
		if (res) {
			setUrl(null);
			setApproved(null);
			toast({
				title: res,
				status: 'success',
				duration: 1500,
				isClosable: true,
			});
			setTimeout(() => {
				router.reload();
			}, 1500);
		}
	}, [res]);

	const handleClick = (url: string, approved: boolean) => {
		setApproved(approved);
		setUrl(url);
	};

	return <ResourcesUI handleClick={handleClick} />;
}
