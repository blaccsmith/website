import { Box, Text, Skeleton, Stack, Flex, HStack } from '@chakra-ui/react';
import { Repository } from 'types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MdStarBorder } from 'react-icons/md';
import { convertNum } from '@/utils/index';

interface Props {
	isLoaded: boolean;
	data: Repository;
}

export default function Repo({ data, isLoaded }: Props) {
	return (
		<Link passHref href={data.url}>
			<Skeleton
				as="a"
				target="_blank"
				objectFit="cover"
				isLoaded={isLoaded}
			>
				<Stack
					spacing={3}
					border="1px"
					h="fit-content"
					borderColor="#212121"
					transition="all .2s"
					_hover={{ borderColor: 'brand.purple.400' }}
					_focus={{ borderColor: 'brand.purple.400' }}
					rounded="lg"
					p="3"
				>
					<Flex justifyContent="space-between" alignItems="center">
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
					</Flex>
					<Text color="brand.white" noOfLines={2}>
						{data.description}
					</Text>
					<HStack color="brand.offWhite">
						<MdStarBorder />
						<Text fontSize="sm">
							{convertNum(data.stargazerCount)}
						</Text>
					</HStack>
				</Stack>
			</Skeleton>
		</Link>
	);
}
