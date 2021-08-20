/* eslint-disable @typescript-eslint/no-explicit-any */
import { HStack, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { MdFormatQuote } from 'react-icons/md';

export default function Blockquote(props: any): JSX.Element {
	return (
		<HStack
			{...props}
			my="6"
			py="2"
			px="8"
			rounded="md"
			border="1px"
			pos="relative"
			overflow="hidden"
			borderColor="brand.accent.dark"
			alignItems="start"
			sx={{ p: { marginBottom: 0 } }}
		>
			<Center
				minW="8"
				minH="8"
				pos="absolute"
				top="0"
				left="0"
				color="brand.accent.dark"
				transform="rotate(180deg)"
			>
				<MdFormatQuote size={24} />
			</Center>
			<Text fontSize="lg" fontWeight="medium">
				{props.children}
			</Text>
		</HStack>
	);
}
