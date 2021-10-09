import { getBlog, getBlogPaths } from 'mdx';
import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { BlogMetadata } from 'types';
import { components } from 'mdx/components';
import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { canoncialUrl } from '../../constants';
import BlogHeader from '@/components/molecules/BlogHeader';
import AuthorInfo from '@/components/molecules/AuthorInfo';
import ScrollToTop from '@/components/atoms/ScrollToTop';
import { useRouter } from 'next/dist/client/router';

interface Props {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	frontMatter: BlogMetadata;
}

export default function BlogPost({ frontMatter, source }: Props) {
	const router = useRouter();
	const [showAuthor, setShowAuthor] = useState(false);
	const { slug } = router.query;

	useEffect(() => {
		if (window) {
			window.addEventListener('scroll', () => {
				setShowAuthor(window.scrollY > 120);
			});
		}
	}, []);

	return (
		<>
			<NextSeo
				title={frontMatter.title}
				openGraph={{
					type: 'website',
					url: `${canoncialUrl}blog/${slug}`,
					title: frontMatter.title,
					description: `By ${frontMatter.author.name}`,
					images: [
						{
							url: `${canoncialUrl}blog_banner.png`,
							width: 1200,
							height: 630,
							alt: 'BLACC Logo',
							type: 'image/png',
						},
					],
				}}
			/>
			<Flex justifyContent="center" p="6">
				<AuthorInfo show={showAuthor} data={frontMatter.author} />
				<Box ml={{ base: '0', lg: '9' }} overflowY="scroll">
					<BlogHeader metadata={frontMatter} />
					<Box as="article" id="content" maxW="1000px">
						<MDXRemote {...source} components={components} />
					</Box>
				</Box>
				<ScrollToTop />
			</Flex>
		</>
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
