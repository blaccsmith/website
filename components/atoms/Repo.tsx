import {
	Box,
	Text,
	Skeleton,
	Stack,
	Flex,
	HStack,
	Wrap,
	Divider,
} from '@chakra-ui/react';
import { Repository } from 'types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MdPeople, MdStarBorder } from 'react-icons/md';
import { convertNum } from '@/utils/index';
import { formatDistance } from 'date-fns';

interface Props {
	isLoaded: boolean;
	data: Repository;
	handleClick: (url: string) => void;
}

export default function Repo({ data, isLoaded, handleClick }: Props) {
	const hasComments = data.name.length % 2 === 0;
	const timeAgo = formatDistance(new Date(data.updatedAt), new Date(), {
		addSuffix: true,
	});

	return (
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
			>
				<Link passHref href={data.url}>
					<Box as="a" target="_blank">
						<Box p="3" pb="0" mb="2">
							<Flex
								justifyContent="space-between"
								alignItems="center"
							>
								<Flex>
									<Box
										pos="relative"
										h="6"
										w="6"
										d={{ base: 'none', md: 'block' }}
										rounded="full"
										overflow="hidden"
									>
										<Image
											src={data.openGraphImageUrl}
											layout="fill"
										/>
									</Box>
									<Text
										ml={{ base: '0', md: '2' }}
										color="brand.white"
										fontWeight="medium"
									>
										{data.name}
									</Text>
								</Flex>
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
									<Text
										fontWeight="medium"
										fontSize={{ base: 'xs', md: 'sm' }}
									>
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
						<Wrap px="3" pb="3" flexGrow={1} pos="relative">
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
					</Box>
				</Link>
				<Divider />
				<Flex
					as="button"
					bg="transparent"
					rounded="0"
					px="3"
					py="2"
					justifyContent="space-between"
					d={hasComments ? 'flex' : 'none'}
					alignItems="center"
					color="brand.offWhite"
					onClick={() => handleClick(data.url)}
				>
					<HStack>
						<MdPeople size={18} />
						<Text fontSize={{ base: 'xs', md: 'sm' }}>
							{data.name.length} Comments
						</Text>
					</HStack>
					<Box
						bg="brand.purple.400"
						py="1"
						px="4"
						rounded="sm"
						fontWeight="medium"
						color=""
						fontSize="xs"
					>
						VIEW
					</Box>
				</Flex>
			</Stack>
		</Skeleton>
	);
}
