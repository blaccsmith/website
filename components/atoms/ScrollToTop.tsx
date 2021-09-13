import { Box, Center, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';

export default function ScrollToTop() {
	const [isScrolling, setScrolling] = useState(false);
	const [isHovering, setisHovering] = useState(false);

	useEffect(() => {
		if (window) {
			window.addEventListener('scroll', () => {
				setScrolling(window.scrollY > 120);
			});
		}
	}, []);

	return (
		<Box
			position="fixed"
			zIndex="99"
			bottom="20"
			transition="all .2s"
			_hover={{ cursor: isScrolling ? 'pointer' : 'none' }}
			right={isScrolling ? '6' : '-15'}
			opacity={isScrolling ? '1' : '0'}
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			<Text
				as="span"
				zIndex="-1"
				fontSize="lg"
				pos="absolute"
				top={isHovering ? '-30px' : '9px'}
				transition="all .2s"
				left="14px"
			>
				🚀
			</Text>
			<Center
				as="button"
				h="12"
				w="12"
				rounded="full"
				shadow="0 4px 16px #6200EA"
				color="brand.white"
				bg="brand.accent.light"
				onMouseOver={() => setisHovering(true)}
				onMouseOut={() => setisHovering(false)}
			>
				<MdArrowUpward />
			</Center>
		</Box>
	);
}
