/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		domains: [
			'avatars.githubusercontent.com',
			'images.unsplash.com',
			'repository-images.githubusercontent.com',
		],
	},
	extends: ['plugin:@next/next/recommended'],
	reactStrictMode: true,
};
