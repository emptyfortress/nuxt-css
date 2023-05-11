// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['nuxt-quasar-ui'],
	quasar: {
		sassVariables: 'assets/quasar.variables.scss',
		/* */
	},
	css: ['@/assets/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/_color.scss" as *;',
				},
			},
		},
	},
})
