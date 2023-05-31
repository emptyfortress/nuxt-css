import { computed } from 'vue'
const vars = [
	{
		id: 0,
		label: 'color-dark',
		var: 'var(--color-dark)',
		val: '#2c4159',
		folder: 'primary',
		textColor: 'white',
		param: 'dark',
		info: 'Используется в качестве <b>primary color</b> в дефолтной теме DV для всех страниц, кроме Заданий и Документов.<br />Является частью <b>cветофора</b>.',
		chips: ['primary', 'default', 'светофор'],
		definition: '--color-dark: hsl(var(--color-dark-h), var(--color-dark-s), var(--color-dark-l));',
		linked: [
			{
				label: '--color-dark-h',
				val: '212',
			},
			{
				label: '--color-dark-s',
				val: '34%',
			},
			{
				label: '--color-dark-l',
				val: '26%',
			},
		],
	},
	{
		id: 1,
		label: 'color-doc',
		var: 'var(--color-doc)',
		val: '#2196f3',
		folder: 'primary',
		textColor: 'white',
		param: 'doc',
		info: 'Используется в качестве <b>primary color</b> для <b>Документов</b>.<br />Является частью <b>cветофора</b>.',
		chips: ['primary', 'default', 'светофор'],
		definition: '--color-doc: hsl(var(--color-doc-h), var(--color-doc-s), var(--color-doc-l));',
		linked: [
			{
				label: '--color-doc-h',
				val: '207',
			},
			{
				label: '--color-doc-s',
				val: '90%',
			},
			{
				label: '--color-doc-l',
				val: '54%',
			},
		],
	},
	{
		id: 2,
		label: 'color-task',
		var: 'var(--color-task)',
		val: '#6dae50',
		folder: 'primary',
		textColor: 'white',
		param: 'task',
		info: 'Используется в качестве <b>primary color</b> для <b>Заданий</b>.<br />Является частью <b>cветофора</b>.',
		chips: ['primary', 'default', 'светофор'],
		definition: '--color-task: hsl(var(--color-task-h), var(--color-task-s), var(--color-task-l));',
		linked: [
			{
				label: '--color-task-h',
				val: '101',
			},
			{
				label: '--color-task-s',
				val: '37%',
			},
			{
				label: '--color-task-l',
				val: '50%',
			},
		],
	},
	{
		id: 3,
		label: 'color-link',
		var: 'var(--color-link)',
		val: '#0a6fc2',
		folder: 'primary',
		textColor: 'white',
		param: 'link',
		info: 'Используется в качестве цвета текстовых <b>линков</b>.',
		chips: ['primary', 'default'],
		definition: '--color-link: hsl(var(--color-link-h), var(--color-link-s), var(--color-link-l));',
		linked: [
			{
				label: '--color-link-h',
				val: '207',
			},
			{
				label: '--color-link-s',
				val: '90%',
			},
			{
				label: '--color-link-l',
				val: '40%',
			},
		],
	},

	{
		id: 4,
		label: 'info-color',
		var: 'var(--info-color)',
		val: '#80a3f9',
		folder: 'secondary',
		textColor: 'black',
		param: 'info',
		info: 'Используется для оформления семантически <b>нейтральных</b> сообщений системы.',
		definition: '--info-color: hsl(223, 91%, 74%);',
	},
	{
		id: 5,
		label: 'success-color',
		var: 'var(--success-color)',
		val: '#4cae4f',
		folder: 'secondary',
		textColor: 'white',
		param: 'success',
		info: 'Семнатически позитивный цвет. Используется для индикации <b>успешного</b> завершения действия пользователя.',
		definition: '--success-color: hsl(122, 39%, 49%);',
	},
	{
		id: 6,
		label: 'warning-color',
		var: 'var(--warning-color)',
		val: '#ff8000',
		folder: 'secondary',
		textColor: 'white',
		param: 'warning',
		info: 'Используется для индикации <b>потенциально опасных</b> действий пользователя или важных сообщений системы.',
		definition: '--warning-color: hsl(30, 100%, 50%);',
	},
	{
		id: 7,
		label: 'error-color',
		var: 'var(--error-color)',
		val: '#85000f',
		folder: 'secondary',
		textColor: 'white',
		param: 'error',
		info: 'Сообщения об <b>ошибках</b> и выделение элементов интерфейса о которых <b>необходимо</b> знать пользователю.',
		definition: '--error-color: hsl(353, 100%, 26%);',
	},
	{
		id: 8,
		label: 'red-color',
		var: 'var(--red-color)',
		val: '#ff0055',
		folder: 'additional',
		textColor: 'white',
		param: 'red',
	},
	{
		id: 9,
		label: 'pink-color',
		var: 'var(--pink-color)',
		val: '#ffc2c9',
		folder: 'secondary',
		textColor: 'black',
		param: 'pink',
		info: 'Семантически негативный бэкграунд. Для подсветки невалидных полей в формах.',
		definition: '--pink-color: hsl(353, 100%, 88%);',
	},
	{
		id: 10,
		label: 'accent-color',
		var: 'var(--accent-color)',
		val: '#9c27b0',
		folder: 'secondary',
		textColor: 'white',
		param: 'accent',
		info: 'Дополнительный к первичному цвет для выделения элементов интерфейса. Опциональный.',
		definition: '--accent-color: #9c27b0;',
	},
	{
		id: 11,
		label: 'draggable-color',
		var: 'var(--draggable-color)',
		val: '#3bff00',
		folder: 'secondary',
		textColor: 'black',
		param: 'draggable',
		info: 'Выделение элементов, которые можно перетаскивать.',
		definition: '--draggable-color: #3bff00;',
	},

	{
		id: 12,
		label: 'black',
		var: 'var(--black)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 13,
		label: 'white',
		var: 'var(--white)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 14,
		label: 'bg-light',
		var: 'var(--bg-light)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 15,
		label: 'bg-panel',
		var: 'var(--bg-panel)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 16,
		label: 'bg-header',
		var: 'var(--bg-header)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 17,
		label: 'bg-card',
		var: 'var(--bg-card)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 18,
		label: 'bg-dark',
		var: 'var(--bg-dark)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 19,
		label: 'bg-main',
		var: 'var(--bg-main)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 20,
		label: 'bg-selected',
		var: 'var(--bg-selected)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 21,
		label: 'bg-selected-hover',
		var: 'var(--bg-selected-hover)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 22,
		label: 'hover-black-05',
		var: 'var(--hover-black-05)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 23,
		label: 'hover-black-10',
		var: 'var(--hover-black-10)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 24,
		label: 'hover-black-15',
		var: 'var(--hover-black-15)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 25,
		label: 'hover-black-20',
		var: 'var(--hover-black-20)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 26,
		label: 'hover-black-30',
		var: 'var(--hover-black-30)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 27,
		label: 'hover-black-40',
		var: 'var(--hover-black-40)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 28,
		label: 'hover-black-50',
		var: 'var(--hover-black-50)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 29,
		label: 'hover-black-60',
		var: 'var(--hover-black-60)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 30,
		label: 'hover-black-70',
		var: 'var(--hover-black-70)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 31,
		label: 'hover-black-80',
		var: 'var(--hover-black-80)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 32,
		label: 'hover-black-85',
		var: 'var(--hover-black-85)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},

	{
		id: 33,
		label: 'hover-white-05',
		var: 'var(--hover-white-05)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 34,
		label: 'hover-white-10',
		var: 'var(--hover-white-10)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 35,
		label: 'hover-white-15',
		var: 'var(--hover-white-15)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 36,
		label: 'hover-white-20',
		var: 'var(--hover-white-20)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 37,
		label: 'hover-white-30',
		var: 'var(--hover-white-30)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 38,
		label: 'hover-white-50',
		var: 'var(--hover-white-50)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 39,
		label: 'hover-white-90',
		var: 'var(--hover-white-90)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},

	{
		id: 40,
		label: 'hovers__white-bg',
		var: 'var(--hovers__white-bg)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 41,
		label: 'shadow-color',
		var: 'var(--shadow-color)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 42,
		label: 'border-color-transparent',
		var: 'var(--border-color-transparent)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 43,
		label: 'border-color',
		var: 'var(--border-color)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},

	{
		id: 44,
		label: 'drop-target',
		var: 'var(--drop-target)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 45,
		label: 'drop-target-border',
		var: 'var(--drop-target-border)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 46,
		label: 'deep-blue',
		var: 'var(--deep-blue)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 47,
		label: 'focus-color',
		var: 'var(--focus-color)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},

	{
		id: 48,
		label: 'grey10',
		var: 'var(--grey10)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 49,
		label: 'grey20',
		var: 'var(--grey20)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 50,
		label: 'grey30',
		var: 'var(--grey30)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 51,
		label: 'grey40',
		var: 'var(--grey40)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 52,
		label: 'grey50',
		var: 'var(--grey50)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 53,
		label: 'grey60',
		var: 'var(--grey60)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 54,
		label: 'grey70',
		var: 'var(--grey70)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 55,
		label: 'grey80',
		var: 'var(--grey80)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 56,
		label: 'grey85',
		var: 'var(--grey85)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 57,
		label: 'grey90',
		var: 'var(--grey90)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 58,
		label: 'grey93',
		var: 'var(--grey93)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},

	{
		id: 59,
		label: 'text-color-primary',
		var: 'var(--text-color-primary)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 60,
		label: 'text-color-body',
		var: 'var(--text-color-body)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 61,
		label: 'text-color-secondary',
		var: 'var(--text-color-secondary)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 62,
		label: 'text-color-grey',
		var: 'var(--text-color-grey)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
	{
		id: 63,
		label: 'text-color-inverse',
		var: 'var(--text-color-inverse)',
		val: '',
		folder: 'additional',
		textColor: 'white',
		param: '',
	},
]

const primaryVars = computed(() => {
	return vars.filter((item) => item.folder === 'primary')
})
const secondaryVars = computed(() => {
	return vars.filter((item) => item.folder === 'secondary')
})
const additionalVars = computed(() => {
	return vars.filter((item) => item.folder === 'additional')
})
export { vars, primaryVars, secondaryVars, additionalVars }
