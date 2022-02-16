import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { RoomProvider } from '@liveblocks/react';
import RealtimeWrapper from '@/components/molecules/RealtimeWrapper';
import { GetServerSideProps } from 'next';

interface Props {
	geo: string;
}

const Home = ({ geo }: Props) => {
	console.log({ geo });

	return (
		<RoomProvider id="only-room">
			<RealtimeWrapper geo={geo}>
				<Box>
					<Box py="12">
						<Image
							alt="logo"
							width={50}
							height={50}
							src="/logo-light.png"
						/>
					</Box>
					<Box py="12">
						<Image
							alt="logo"
							width={50}
							height={50}
							src="/logo-light.png"
						/>
					</Box>
					<Box py="12">
						<Image
							alt="logo"
							width={50}
							height={50}
							src="/logo-light.png"
						/>
					</Box>
					<Box py="12">
						<Image
							alt="logo"
							width={50}
							height={50}
							src="/logo-light.png"
						/>
					</Box>
					<Box py="12">
						<Image
							alt="logo"
							width={50}
							height={50}
							src="/logo-light.png"
						/>
					</Box>
					<Box py="12">
						<Image
							alt="logo"
							width={50}
							height={50}
							src="/logo-light.png"
						/>
					</Box>
					<Box py="12">
						<Image
							alt="logo"
							width={50}
							height={50}
							src="/logo-light.png"
						/>
					</Box>
					<Box py="12">
						<Image
							alt="logo"
							width={50}
							height={50}
							src="/logo-light.png"
						/>
					</Box>
					<Box py="12">
						<Image
							alt="logo"
							width={50}
							height={50}
							src="/logo-light.png"
						/>
					</Box>
					<Box py="12">
						<Image
							alt="logo"
							width={50}
							height={50}
							src="/logo-light.png"
						/>
					</Box>
				</Box>
			</RealtimeWrapper>
		</RoomProvider>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	console.log({
		x_geo: context.res.getHeader('x-geo'),
		headers: context.req.headers['x-geo'],
	});
	return {
		props: { geo: context.req.headers['x-geo'] },
	};
};
