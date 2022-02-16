import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
	const city = req.geo?.city;
	const country = req.geo?.country;
	const res = NextResponse.next();

	res.cookie('blacc-geo', JSON.stringify({ city, country }), {
		maxAge: 1000 * 60 * 60 * 24 * 1,
	});

	return res;
}
