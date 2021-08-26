import { getBlog, getBlogPaths } from 'mdx';
import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { BlogMetadata } from 'types';
import { components } from 'mdx/components';
import React, { useEffect, useState } from 'react';
import BlogHeader from '@/components/molecules/BlogHeader';
import AuthorInfo from '@/components/molecules/AuthorInfo';

interface Props {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	frontMatter: BlogMetadata;
}

export default function BlogPost({ frontMatter, source }: Props) {
	const [showAuthor, setShowAuthor] = useState(false);

	useEffect(() => {
		if (window) {
			window.addEventListener('scroll', () => {
				setShowAuthor(window.scrollY > 120);
			});
		}
	}, []);

	return (
		<Flex justifyContent="center" p="6">
			<AuthorInfo show={showAuthor} data={frontMatter.author} />
			<Box ml="9" overflowY="scroll">
				<BlogHeader metadata={frontMatter} />
				<Box as="article" id="content" maxW="1000px">
					<MDXRemote {...source} components={components} />
				</Box>
			</Box>
		</Flex>
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
