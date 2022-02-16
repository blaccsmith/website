import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
	const city = req.geo?.city;
	const country = req.geo?.country;
	const res = NextResponse.next();
	res.cookie('blacc-geo', JSON.stringify({ city, country }));

	// if (city && country) {
	res.headers.set('X-Geo', `${city}, ${country}`);
	// }
	return res;
}
