// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['nuxt-quasar-ui', 'nuxt-icons', '@vueuse/motion/nuxt'],
	quasar: {
		sassVariables: 'assets/styles/quasar.variables.scss',
		extras: {
			fontIcons: ['mdi-v6'],
		},
		plugins: ['Notify', 'Loading'],
		config: {
			notify: {
				position: 'top-right',
				timeout: 3000,
				icon: 'mdi-alert',
				color: 'primary',
				classes: 'notific',
			},
			loading: {
				delay: 100,
				html: true,
				spinnerSize: 120,
			},
		},
	},
	css: ['@/assets/styles/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/_theme.scss" as *;',
				},
			},
		},
	},
	devtools: {
		enabled: false,
	},
	// experimental: {
	// 	viewTransition: true,
	// },
	app: {
		pageTransition: {
			name: 'page',
			mode: 'out-in', // default
		},
		layoutTransition: {
			name: 'layout',
			mode: 'out-in', // default
		},
	},
})
