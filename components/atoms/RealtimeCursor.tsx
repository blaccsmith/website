import { Box, Center, Text } from '@chakra-ui/react';

interface Props {
	geo: string;
	color: string;
	x: number;
	y: number;
}

export default function RealtimeCursor({ geo, color, x, y }: Props) {
	const { city, country } = JSON.parse(geo.split('=')[1]);

	return !geo ? null : (
		<Center
			pos="absolute"
			inset={0}
			zIndex="banner"
			maxW="max-content"
			maxH="max-content"
			transition="transform 0.35s cubic-bezier(.17,.93,.38,1)"
			transform={`translateX(${x}px) translateY(${y}px)`}
		>
			<Box
				as="svg"
				maxH={9}
				maxW={6}
				width="24"
				height="36"
				viewBox="0 0 24 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
					fill={color}
				/>
			</Box>
			<Box
				px={2}
				rounded="full"
				minW="max-content"
				pos="absolute"
				zIndex="banner"
				backdropFilter="blur(5px)"
				bg="brand.translucent"
				overflow="hidden"
				bottom={-1}
			>
				<Text color="#fff" fontWeight="medium" fontSize="xs">
					{city}, {country}
				</Text>
			</Box>
		</Center>
	);
}
