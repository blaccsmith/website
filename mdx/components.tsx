/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockquote from '@/components/atoms/Blockquote';
import {
	Heading,
	Box,
	Link,
	Tooltip,
	Text,
	List,
	Center,
	Image,
	ListItem,
	OrderedList,
} from '@chakra-ui/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { MdContentCopy } from 'react-icons/md';

const CodeBlock = ({ children, className }: any) => {
	const language = className.replace(/language-/, '');

	return (
		<Highlight {...defaultProps} code={children} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={{
						...style,
						padding: '16px',
						borderRadius: '8px',
						position: 'relative',
					}}
				>
					{tokens.map((line, i) => (
						<Box key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span
									key={key}
									{...getTokenProps({ token, key })}
								/>
							))}
						</Box>
					))}
					<Tooltip label="Copy">
						<Center
							pos="absolute"
							cursor="pointer"
							top="4"
							right="4"
							rounded="md"
							h="8"
							w="8"
							onClick={() =>
								navigator.clipboard.writeText(children)
							}
							bg="rgba(0,0,0,.15)"
						>
							<MdContentCopy />
						</Center>
					</Tooltip>
				</pre>
			)}
		</Highlight>
	);
};

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
	pre: (props: any) => <Box {...props} />,
	code: (props: any) => <CodeBlock {...props} />,
};

export default components;
