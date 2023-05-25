// uno.config.ts
import { defineConfig, presetUno, transformerDirectives } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
	shortcuts: [],
	theme: {
		colors: {},
	},
	presets: [presetUno()],
	extractors: [extractorPug()],
	transformers: [transformerDirectives()],
})
