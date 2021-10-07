// Canonical URL
export const canoncialUrl: string =
	process.env.NEXT_PUBLIC_TARGET_ENV === 'prod'
		? 'https://www.blacc.xyz/'
		: 'http://www.staging.blacc.xyz/';
