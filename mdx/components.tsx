/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heading, Box, Link, Text } from '@chakra-ui/react';
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
			color="blue"
			textDecoration="underline"
			target="_blank"
			{...props}
		/>
	),
	img: (props: any) => (
		<Box
			mb="6"
			pos="relative"
			overflow="hidden"
			rounded="xl"
			w="200px"
			h="200px"
		>
			<Image layout="fill" objectFit="cover" {...props} />
		</Box>
	),
};

export default components;
