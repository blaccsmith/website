import type { NextFetchEvent, NextRequest } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
	console.log('Edit and run at the edge!');

	return new Response({
		ip: req.ip,
		geo: req.geo, // this will spin the globe!
		ua: req.ua,
	});
}
