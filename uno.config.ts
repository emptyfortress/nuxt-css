// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
	shortcuts: [],
	theme: {
		colors: {},
	},
	presets: [presetUno(), presetAttributify()],
	extractors: [extractorPug()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
})
