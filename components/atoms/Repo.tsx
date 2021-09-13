import {
	Box,
	Text,
	Skeleton,
	Stack,
	Flex,
	HStack,
	Wrap,
} from '@chakra-ui/react';
import { Repository } from 'types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MdStarBorder } from 'react-icons/md';
import { convertNum } from '@/utils/index';
import { formatDistance } from 'date-fns';

interface Props {
	isLoaded: boolean;
	data: Repository;
}

export default function Repo({ data, isLoaded }: Props) {
	const timeAgo = formatDistance(new Date(data.updatedAt), new Date(), {
		addSuffix: true,
	});

	return (
		<Link passHref href={data.url}>
			<Skeleton
				as="a"
				rounded="lg"
				target="_blank"
				startColor="#222"
				endColor="#333"
				objectFit="cover"
				h="fit-content"
				isLoaded={isLoaded}
			>
				<Stack
					spacing={0}
					border="1px"
					h="fit-content"
					borderColor="#555"
					transition="all .2s"
					_hover={{ borderColor: 'brand.purple.400' }}
					_focus={{ borderColor: 'brand.purple.400' }}
					rounded="lg"
					p="3"
				>
					<Box mb="2">
						<Flex
							justifyContent="space-between"
							alignItems="center"
						>
							<HStack>
								<Box
									pos="relative"
									h="6"
									w="6"
									rounded="full"
									overflow="hidden"
								>
									<Image
										src={data.openGraphImageUrl}
										layout="fill"
									/>
								</Box>
								<Text color="brand.white" fontWeight="medium">
									{data.name}
								</Text>
							</HStack>
							<HStack
								px="3"
								py="1"
								rounded="full"
								color="brand.white"
								spacing={1}
								alignItems="center"
								bgGradient="linear(to-r, brand.purple.400, brand.purple.500)"
							>
								<MdStarBorder size={16} />
								<Text fontWeight="medium" fontSize="sm">
									{convertNum(data.stargazerCount)}
								</Text>
							</HStack>
						</Flex>
						<Text
							fontSize="sm"
							mt="2"
							color="brand.offWhite"
							noOfLines={2}
						>
							{timeAgo}
						</Text>
						<Text color="brand.white" noOfLines={2}>
							{data.description}
						</Text>
					</Box>
					<Wrap flexGrow={1} pos="relative">
						{data.repositoryTopics.nodes.map((el, idx) => (
							<Text
								px="3"
								py="1"
								key={idx}
								rounded="full"
								bg="rgba(123, 97, 255,.25)"
								color="brand.accent.dark"
								fontSize="sm"
							>
								{el.topic.name}
							</Text>
						))}
					</Wrap>
				</Stack>
			</Skeleton>
		</Link>
	);
}
