import { getBlog, getBlogPaths } from 'mdx';
import { Box, Heading, Text } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { BlogMetadata } from 'types';
import { components } from 'mdx/components';

interface Props {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	frontMatter: BlogMetadata;
}

export default function BlogPost({ frontMatter, source }: Props) {
	const tags = frontMatter.tags?.split(',').map((tag) => tag.trim());

	return (
		<Box p="12">
			<Box border="1px">
				<Heading>{frontMatter.title}</Heading>
				<Text>{frontMatter.published}</Text>
				{tags?.map((tag) => (
					<Text key={tag}>#{tag}</Text>
				))}
			</Box>

			<Box mt="9">
				<MDXRemote {...source} components={components} />
			</Box>
		</Box>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const props = await getBlog(params?.slug as string);
	return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getBlogPaths().map((slug) => ({ params: { slug } }));
	return { paths, fallback: false };
};
