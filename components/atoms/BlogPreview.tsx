import { AspectRatio, Text, Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { BlogMetadata } from 'types';
import Link from 'next/link';
import { MdAccessTime } from 'react-icons/md';
import ProgressiveImage from './ProgressiveImage';

interface Props {
	data: BlogMetadata;
	timeAgo: string;
}

export default function BlogPreview({ data, timeAgo }: Props) {
	const slug = data.title
		.split(' ')
		.map((el) => el.toLowerCase())
		.join('-');

	return (
		<Link passHref href={`/blog/${slug}`}>
			<Box as="a">
				<AspectRatio
					pos="relative"
					ratio={16 / 9}
					overflow="hidden"
					rounded="xl"
					maxW="80"
				>
					<ProgressiveImage
						src={data.thumbnail}
						minW={320}
						minH={240}
						objectFit="cover"
						layout="fill"
						alt="Blog thumbnail"
					/>
				</AspectRatio>
				<Text
					my="2"
					fontSize="xl"
					color="brand.white"
					fontWeight="bold"
				>
					{data.title}
				</Text>
				<HStack>
					<MdAccessTime color="#eee" />
					<Text my="2" fontSize="md" color="brand.offWhite">
						{timeAgo}
					</Text>
				</HStack>
			</Box>
		</Link>
	);
}
