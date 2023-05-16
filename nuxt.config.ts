// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['nuxt-quasar-ui', 'nuxt-icons', '@vueuse/motion/nuxt'],
	quasar: {
		sassVariables: 'assets/styles/quasar.variables.scss',
		extras: {
			fontIcons: ['mdi-v6'],
		},
		/* */
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
	// 	motion: {
	// 		directives: {
	// 			fuck: {
	// 				initial: {
	// 					opacity: 0,
	// 					rotate: 0,
	// 				},
	// 				enter: {
	// 					opacity: 1,
	// 					rotate: 380,
	// 				},
	// 			},
	// 			fick: {
	// 				initial: {
	// 					opacity: 0,
	// 					rotate: 0,
	// 				},
	// 				enter: {
	// 					opacity: 1,
	// 					rotate: 45,
	// 				},
	// 			},
	// 		},
	// 	},
})
