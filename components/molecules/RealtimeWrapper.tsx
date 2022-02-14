import { useOthers, useMyPresence } from '@liveblocks/react';
import { Box } from '@chakra-ui/react';
import RealtimeCursor from '../atoms/RealtimeCursor';

const colors = [
	'#E57373',
	'#9575CD',
	'#4FC3F7',
	'#81C784',
	'#FFF176',
	'#FF8A65',
	'#F06292',
	'#7986CB',
];

interface Props {
	children: React.ReactNode;
}

export default function RealtimeWrapper({ children }: Props) {
	const [{ cursor }, updateMyPresence] = useMyPresence();
	const others = useOthers();

	return (
		<Box
			onPointerMove={(event) =>
				updateMyPresence({
					cursor: {
						x: Math.round(event.clientX),
						y: Math.round(event.clientY),
					},
				})
			}
			onPointerLeave={() => updateMyPresence({ cursor: null })}
		>
			{others.map(({ connectionId, presence }) => {
				if (presence == null || presence.cursor == null) {
					return null;
				}

				return (
					<RealtimeCursor
						key={`cursor-${connectionId}`}
						color={colors[connectionId % colors.length]}
						x={presence.cursor.x}
						y={presence.cursor.y}
					/>
				);
			})}
			{children}
		</Box>
	);
}
