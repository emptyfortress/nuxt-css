const nodes = [
	{
		id: 0,
		label: 'Web Client',
		header: 'root',
		avatar: '/webclient.svg',
		desc: 'Это дескрипшн',
		children: [
			{
				id: 1,
				label: 'Principles',
				icon: 'mdi-folder-outline',
				url: '/pr/',
				children: [
					{ id: 2, label: 'Primary colors', icon: 'mdi-folder-outline', url: '/pr/' },
					{ id: 3, label: 'Secondary colors', icon: 'mdi-folder-outline', url: '/pr/' },
				],
			},
			{
				id: 4,
				label: 'Variables',
				icon: 'mdi-folder-outline',
				url: '/folder/',
				children: [
					{
						id: 5,
						label: 'Colors',
						icon: 'mdi-folder-outline',
						url: '/folder/',
						children: [
							{
								id: 6,
								label: 'Primary colors',
								icon: 'mdi-folder-outline',
								url: '/folder/',
								children: [
									{
										id: 7,
										label: 'color-dark',
										variable: true,
										icon: 'mdi-variable',
										traffic: true,
										url: '/var/',
										desc: 'Используется в качестве <code>primary color</code> в дефолтной теме DV для всех страниц, кроме Заданий и Документов.<br />Является частью <b>cветофора</b>.',
									},
									{
										id: 8,
										label: 'color-doc',
										variable: true,
										icon: 'mdi-variable',
										traffic: true,
										url: '/var/',
										desc: 'Используется в качестве <code>primary color</code> для Документов.<br />Является частью <b>cветофора</b>.',
									},
									{
										id: 9,
										label: 'color-task',
										variable: true,
										traffic: true,
										icon: 'mdi-variable',
										url: '/var/',
										desc: 'Используется в качестве <code>primary color</code> для Заданий.<br />Является частью <b>cветофора</b>.',
									},
									{
										id: 10,
										label: 'color-link',
										variable: true,
										icon: 'mdi-variable',
										url: '/var/',
										desc: 'Глобальный цвет линков в приложении.',
									},
								],
							},
							{
								id: 11,
								label: 'Secondary colors',
								icon: 'mdi-folder-outline',
								url: '/folder/',
								children: [
									{
										id: 12,
										label: 'error-color',
										variable: true,
										icon: 'mdi-variable',
										url: '/var/',
									},
									{
										id: 13,
										label: 'pink-color',
										variable: true,
										icon: 'mdi-variable',
										url: '/var/',
									},
									{
										id: 14,
										label: 'accent-color',
										variable: true,
										icon: 'mdi-variable',
										url: '/var/',
									},
									{
										id: 15,
										label: 'info-color',
										variable: true,
										icon: 'mdi-variable',
										url: '/var/',
									},
									{
										id: 16,
										label: 'warning-color',
										variable: true,
										icon: 'mdi-variable',
										url: '/var/',
									},
									{
										id: 17,
										label: 'success-color',
										variable: true,
										icon: 'mdi-variable',
										url: '/var/',
									},
									{
										id: 18,
										label: 'red-color',
										variable: true,
										icon: 'mdi-variable',
										url: '/var/',
									},
									{
										id: 19,
										label: 'draggable-color',
										variable: true,
										icon: 'mdi-variable',
										url: '/var/',
									},
								],
							},
						],
					},
				],
			},
			{
				id: 20,
				label: 'Controls',
				icon: 'mdi-folder-outline',
				children: [
					{ id: 21, label: 'Button', icon: 'mdi-xml' },
					{ id: 22, label: 'Input', icon: 'mdi-xml' },
				],
			},
		],
	},
]

export { nodes }