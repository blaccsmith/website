/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockquote from '@/components/atoms/Blockquote';
import {
	Heading,
	Box,
	Link,
	Text,
	List,
	Image,
	ListItem,
	OrderedList,
	Center,
} from '@chakra-ui/react';

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
		<Image
			{...props}
			w="full"
			my="16"
			alt={props.children}
			maxW="700px"
			alignSelf="center"
			marginLeft="auto"
			marginRight="auto"
			minH="350px"
			layout="fill"
			rounded="xl"
			objectFit="cover"
		/>
	),
	ul: (props: any) => (
		<List {...props} ml="8" mb="8" spacing={4} listStyleType="circle" />
	),
	ol: (props: any) => (
		<OrderedList {...props} as="ol" ml="8" mb="8" spacing={4} />
	),
	li: (props: any) => (
		<ListItem {...props} color="white">
			{props.children}
		</ListItem>
	),
};

export default components;
