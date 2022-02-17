import { createClient } from '@liveblocks/client';

export const client = createClient({
	publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PK as string,
});
