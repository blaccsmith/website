import ScrollToTop from '@/components/atoms/ScrollToTop';
import BlogHeader from '@/components/molecules/BlogHeader';
import { Box, Flex, Center } from '@chakra-ui/react';
import { getBlog } from 'mdx';
import components from 'mdx/components';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/dist/client/router';
import { BlogMetadata } from 'types';

interface Props {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	frontMatter: BlogMetadata;
}
export default function Sandbox({ frontMatter, source }: Props): JSX.Element {
	return (
		<Center p="6">
			<Box pos="relative" ml={{ base: '0', lg: '9' }}>
				<BlogHeader metadata={frontMatter} />
				<Box as="article" id="content" maxW="1000px">
					<MDXRemote {...source} components={components} />
				</Box>
			</Box>
			<ScrollToTop />
		</Center>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const props = await getBlog('example');
	return { props };
};
