import { Box } from '@chakra-ui/react';
import React from 'react';

interface Props {
	color: string;
	x: number;
	y: number;
}

export default function RealtimeCursor({ color, x, y }: Props) {
	return (
		<Box
			as="svg"
			zIndex="banner"
			style={{
				position: 'absolute',
				left: 0,
				top: 0,
				transition: 'transform 0.35s cubic-bezier(.17,.93,.38,1)',
				transform: `translateX(${x}px) translateY(${y}px)`,
			}}
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
	);
}
