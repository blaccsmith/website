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
} from '@chakra-ui/react';
import Image from 'next/image';

export const components = {
	h2: (props: any) => (
		<Heading as="h2" fontSize="3xl" mb="3" color="white" {...props} />
	),
	h3: (props: any) => (
		<Heading as="h3" fontSize="xl" mb="2" color="white" {...props} />
	),
	p: (props: any) => <Text mb="9" color="white" {...props} />,
	a: (props: any) => (
		<Link
			color="brand.accent.dark"
			textDecoration="underline"
			target="_blank"
			{...props}
		/>
	),
	blockquote: (props: any) => <Blockquote {...props} />,
	img: (props: any) => (
		<Box
			my="6"
			pos="relative"
			overflow="hidden"
			rounded="xl"
			w="auto"
			maxW="700px"
			minH="350px"
		>
			<Image layout="fill" objectFit="cover" {...props} />
		</Box>
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
