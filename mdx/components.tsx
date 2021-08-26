/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockquote from '@/components/atoms/Blockquote';
import {
	Heading,
	Box,
	Link,
	Text,
	List,
	ListItem,
	OrderedList,
	Center,
} from '@chakra-ui/react';
import Image from 'next/image';

export const components = {
	h2: (props: any) => (
		<Heading {...props} as="h2" fontSize="3xl" mb="3" color="white" />
	),
	h3: (props: any) => (
		<Heading {...props} as="h3" fontSize="xl" mb="2" color="white" />
	),
	p: (props: any) => <Text {...props} mb="9" color="white" />,
	a: (props: any) => (
		<Link
			{...props}
			color="brand.accent.dark"
			textDecoration="underline"
			target="_blank"
		/>
	),
	blockquote: (props: any) => <Blockquote {...props} />,
	img: (props: any) => (
		<Center w="full">
			<Box
				my="6"
				w="full"
				maxW="700px"
				minH="350px"
				pos="relative"
				rounded="xl"
				overflow="hidden"
				h="full"
			>
				<Image layout="fill" objectFit="cover" {...props} />
			</Box>
		</Center>
	),
	ul: (props: any) => (
		<List
			ml="8"
			mb="8"
			spacing={4}
			listStyleType="circle"
			{...props}
		></List>
	),
	ol: (props: any) => (
		<OrderedList as="ol" ml="8" mb="8" spacing={4} {...props}></OrderedList>
	),
	li: (props: any) => (
		<ListItem {...props} color="white">
			{props.children}
		</ListItem>
	),
};

export default components;
