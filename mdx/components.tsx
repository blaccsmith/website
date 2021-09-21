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
} from '@chakra-ui/react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const CodeBlock = ({ children, className }: any) => {
	const language = className.replace(/language-/, '');

	return (
		<Highlight {...defaultProps} code={children} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={{ ...style, padding: '20px' }}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span
									key={key}
									{...getTokenProps({ token, key })}
								/>
							))}
						</div>
					))}
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
