// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘
// Icon Site https://lucide.dev/
const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Jason',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'b6907d289e10d714a6e88b30761fae22', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '43.492',
	defaultLongitude: '-112.040',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'folder-clock',
			id: '1',
			links: [
				{
					name: 'Intranet',
					link: 'http://bocif-int.bankofcommerce.org',
				},
				{
					name: 'IT Shhhhh',
					link: 'http://bocif-int.bankofcommerce.org/it.php',
				},
				{
					name: 'BAM Dashboard',
					link: 'http://bocif-bamplus/BAMPlus/SecurityManager/Account/LogOn?ReturnUrl=%2fbamplus%2fdashboard',
				},
				{
					name: 'H360 Report Writer',
					link: 'http://bocif-hrz360/bank01bi/bi/',
				},
			],
		},
		{
			icon: 'binary',
			id: '2',
			links: [
				{
					name: 'Vshere Idaho Falls',
					link: 'https://10.9.4.100/',
				},
				{
					name: 'HorizonXE',
					link: 'https://bochzprd.bankofcommerce.org:17000/HORIZON/',
				},
				{
					name: 'Office 365',
					link: 'https://admin.microsoft.com',
				},
				{
					name: 'MaaS360',
					link: 'https://m3.maas360.com/emc/#',
				},
				{
					name: 'Pure Storage',
					link: 'https://10.9.6.46/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'panda',
			id: '1',
			links: [
				{
					name: 'VeloCloud',
					link: 'https://vco134-usvi1.velocloud.net/ui/login',
				},
				{
					name: 'Falcon',
					link: 'https://falcon.crowdstrike.com/login',
				},
				{
					name: 'IBM Navigator',
					link: 'http://10.9.2.87:2002/Navigator/login',
				},
				{
					name: 'Mail Portal',
					link: 'https://iportal.postoffice.net/Portal/',
				},
			],
		},
		{
			icon: 'bug',
			id: '2',
			links: [
				{
					name: 'Adlumin Portal',
					link: 'https://portal.adlumin.com/users/sign_in',
				},
				{
					name: 'Umbrella',
					link: 'https://dashboard.umbrella.com/o/8296565/#/overview',
				},
				{
					name: 'ClearPass',
					link: 'https://10.9.4.160/tips/tipsContent.action',
				},
				{
					name: 'Avidascend',
					link: 'https://1887id.ascend.banktel.com/web/Approval/Dashboard',
				},
			],
		},
	],
};
