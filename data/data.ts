const nodes = [
	{
		label: 'Web Client',
		header: 'root',
		avatar: '/webclient.svg',
		desc: 'Это дескрипшн',
		url: '/',
		children: [
			{
				label: 'Principles',
				icon: 'mdi-folder-outline',
				url: '/principles',
				children: [
					{
						label: 'Primary colors',
						icon: 'mdi-numeric-1-circle-outline',
						url: '/principles/primary',
					},
					{
						label: 'Secondary colors',
						icon: 'mdi-numeric-2-circle-outline',
						url: '/principles/secondary',
					},
					{
						label: 'Светофор',
						icon: 'mdi-traffic-light',
						url: '/principles/traffic',
					},
				],
			},
			{
				label: 'Variables',
				icon: 'mdi-folder-outline',
				url: '/variables',
				children: [
					{
						label: 'Primary colors',
						icon: 'mdi-folder-outline',
						url: '/variables/primary',
						children: [
							{
								label: 'color-dark',
								variable: true,
								icon: 'mdi-variable',
								traffic: true,
								url: '/variables/primary/dark',
								desc: 'Используется в качестве <code>primary color</code> в дефолтной теме DV для всех страниц, кроме Заданий и Документов.<br />Является частью <b>cветофора</b>.',
							},
							{
								label: 'color-doc',
								variable: true,
								icon: 'mdi-variable',
								traffic: true,
								url: '/variables/primary/doc',
								desc: 'Используется в качестве <code>primary color</code> для Документов.<br />Является частью <b>cветофора</b>.',
							},
							{
								label: 'color-task',
								variable: true,
								traffic: true,
								icon: 'mdi-variable',
								url: '/variables/primary/task',
								desc: 'Используется в качестве <code>primary color</code> для Заданий.<br />Является частью <b>cветофора</b>.',
							},
							{
								label: 'color-link',
								variable: true,
								icon: 'mdi-variable',
								url: '/variables/primary/link',
								desc: 'Глобальный цвет линков в приложении.',
							},
						],
					},
					{
						label: 'Secondary colors',
						icon: 'mdi-folder-outline',
						url: '/variables/secondary',
						children: [
							{
								label: 'error-color',
								variable: true,
								icon: 'mdi-variable',
								url: '/variables/secondary/error',
							},
							{
								label: 'pink-color',
								variable: true,
								icon: 'mdi-variable',
								url: '/variables/secondary/pink',
							},
							{
								label: 'accent-color',
								variable: true,
								icon: 'mdi-variable',
								url: '/variables/secondary/accent',
							},
							{
								label: 'info-color',
								variable: true,
								icon: 'mdi-variable',
								url: '/variables/secondary/info',
							},
							{
								label: 'warning-color',
								variable: true,
								icon: 'mdi-variable',
								url: '/variables/secondary/warning',
							},
							{
								label: 'success-color',
								variable: true,
								icon: 'mdi-variable',
								url: '/variables/secondary/success',
							},
							{
								label: 'red-color',
								variable: true,
								icon: 'mdi-variable',
								url: '/variables/secondary/red',
							},
							{
								label: 'draggable-color',
								variable: true,
								icon: 'mdi-variable',
								url: '/variables/secondary/draggable',
							},
						],
					},
				],
			},
			{
				label: 'Controls',
				icon: 'mdi-folder-outline',
				url: '/controls',
				children: [
					{ label: 'Button', url: '/controls/button', icon: 'mdi-xml' },
					{ label: 'Input', url: '/controls/input', icon: 'mdi-xml' },
				],
			},
		],
	},
]

export { nodes }
