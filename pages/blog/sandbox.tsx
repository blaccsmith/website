import BlogHeader from '@/components/molecules/BlogHeader';
import { Box, Flex, Heading, Button, Stack, Link } from '@chakra-ui/react';
import { getBlog } from 'mdx';
import components from 'mdx/components';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { BlogMetadata } from 'types';

interface Props {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	frontMatter: BlogMetadata;
}
export default function Sandbox({ frontMatter, source }: Props): JSX.Element {
	const router = useRouter();
	const [isScrollable, setScrollable] = useState(false);

	// Scroll to top on button click
	const handleScrollToTop = (): void => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (typeof window !== 'undefined') {
		window.onscroll = (): void => {
			makeButtonVisible();
		};
	}

	// Appear scrollable when the user scrolls down
	const makeButtonVisible = (): void => {
		const scrollTop = window.pageYOffset;
		if (scrollTop > 0) {
			setScrollable(true);
		} else {
			setScrollable(false);
		}
	};

	return (
		<Flex justifyContent="space-evenly" p="6">
			<Box
				pos="sticky"
				top="24"
				h="fit-content"
				w="fit-content"
				rounded="md"
				border="1px"
				borderColor="#424242"
				p="3"
			>
				<Heading as="h3" fontSize="lg" color="white">
					Helpful Resources
				</Heading>
				<Stack pl="3" mt="2" mb="4">
					<Link
						isExternal
						href="https://www.markdownguide.org/basic-syntax/"
						color="brand.accent.dark"
					>
						Markdown Guide
					</Link>
					<Link
						isExternal
						href="https://mdxjs.com/"
						color="brand.accent.dark"
					>
						MDX Docs
					</Link>
				</Stack>
				<Button
					size="sm"
					border="1px"
					_hover={{}}
					_active={{}}
					borderColor="#424242"
					bg="transparent"
					color="white"
					onClick={() => router.reload()}
				>
					Update changes
				</Button>
			</Box>
			<Box ml="9">
				<BlogHeader metadata={frontMatter} />
				<Box as="article" id="content" maxW="1000px">
					<MDXRemote {...source} components={components} />
				</Box>
			</Box>
			<Button
				display={isScrollable ? 'block' : 'none'}
				position="fixed"
				zIndex="99"
				bottom="10"
				right="30"
				border="1px"
				borderColor="#6200EA"
				bg="transparent"
				_hover={{ color: 'white', bg: '#6200EA' }}
				color="#6200EA"
				onClick={handleScrollToTop}
			>
				Back to Top
			</Button>
		</Flex>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const props = await getBlog('example');
	return { props };
};
