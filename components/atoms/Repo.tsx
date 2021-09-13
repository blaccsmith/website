import { Box, Text } from '@chakra-ui/react';
import { Repository } from 'types';
import Link from 'next/link';

interface Props {
	data: Repository;
}

export default function Repo({ data }: Props) {
	return (
		<Link passHref href={data.url}>
			<Box
				as="a"
				border="1px"
				h="fit-content"
				borderColor="#212121"
				rounded="lg"
				p="3"
			>
				<Text color="brand.white" fontWeight="medium">
					{data.name}
				</Text>
				<Text mt="2" color="brand.white" noOfLines={2}>
					{data.description}
				</Text>
			</Box>
		</Link>
	);
}
