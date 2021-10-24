// Canonical URL
export const canoncialUrl: string =
	process.env.NEXT_PUBLIC_TARGET_ENV === 'prod'
		? 'https://www.blacc.xyz/'
		: 'http://www.staging.blacc.xyz/';

// Export images
export const homePageImages: string[] = [
	'https://images.unsplash.com/photo-1573162915955-6a8ba9d2fe20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80',
	'https://images.unsplash.com/photo-1573164713347-df1f7d6aeb03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80',
	'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
	'https://images.unsplash.com/photo-1612299273045-362a39972259?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80',
	'https://images.unsplash.com/photo-1612299273045-362a39972259?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80',
	'https://images.unsplash.com/photo-1612299273045-362a39972259?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1771&q=80',
	'https://images.unsplash.com/photo-1573164574397-dd250bc8a598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80',
	'https://images.unsplash.com/photo-1573496800440-5c9c48a8d0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
	'https://images.unsplash.com/photo-1573166953836-06864dc70a21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80',
];

export const pillars = [
	{
		label: 'equity',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae sollicitudin libero. Sed placerat mollis tortor, sit amet ullamcorper ex fermentum a. Sed mauris lacus, euismod nec tincidunt id, scelerisque eget justo.',
	},
	{
		label: 'education',
		description:
			'Mauris dapibus tellus faucibus, ultricies tellus et, aliquet libero. Suspendisse a eleifend purus. Maecenas rutrum rhoncus risus, ut tempus odio.',
	},
	{
		label: 'collaboration',
		description:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sodales libero ipsum, et pharetra ante tincidunt ut.',
	},
];

export const whyUs = [
	{ title: '500+', subtitle: 'memebers' },
	{ title: '24/7', subtitle: 'relaxed space' },
	{ title: '13+', subtitle: 'shared projects' },
	{ title: '$0', subtitle: 'to join' },
];

export const reviews = [
	{
		name: '@Darryl_codes',
		review: 'This is such a dope space for me to learn new things',
	},
	{
		name: '@Darryl_codes',
		review: 'This is such a dope space for me to learn new things',
	},
	{
		name: '@Darryl_codes',
		review: 'This is such a dope space for me to learn new things',
	},
	{
		name: '@Darryl_codes',
		review: 'This is such a dope space for me to learn new things',
	},
	{
		name: '@Darryl_codes',
		review: 'This is such a dope space for me to learn new things',
	},
	{
		name: '@Darryl_codes',
		review: 'This is such a dope space for me to learn new things',
	},
];
