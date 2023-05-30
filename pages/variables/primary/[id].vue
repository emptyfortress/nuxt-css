<script setup lang="ts">
import { vars } from '@/data/vars'

const route = useRoute()

const item = computed(() => {
	return vars.filter((e) => e.param === route.params.id)[0]
})
const color = computed(() => {
	return item.value.val
})
</script>

<template lang="pug">
div
	h4
		AnimZag(:item="item" size="48px")
	.panel
		q-icon(name="mdi-information-outline" size="xl" color="primary")
		div
			p(v-html="item.info")
			p
				q-chip(v-for="chip in item.chips") {{chip}}

	.panel
		q-icon(name="mdi-code-braces" size="xl" color="primary")
		div
			.def Definition:
			.code
				.full
					|{
					.inside --{{item.label}}: hsl(var(--{{item.label}}-h), var(--{{item.label}}-s), var(--{{item.label}}-l));
					|}
			br
			.def Usage:
			.code
				div
					|{
					.inside
						div width: 100px;
						div height: 100px;
						div border: 5px solid black;
						div background: {{ item.var }};
					|}
				.square

	.panel(v-if="item.linked")
		q-icon(name="mdi-link-variant" size="xl" color="primary")
		div
			.fw-bold Связанные переменные
			q-markup-table(flat)
				thead
					tr
						th Имя
						th Значение
				tbody
					tr(v-for="e in item.linked" :key="e.label")
						td.code {{ e.label }}
						td {{ e.val }}


</template>

<style scoped lang="scss">
.square {
	background: v-bind(color);
}
:deep(.q-table) {
	width: initial;
	thead th {
		text-align: left;
	}
	tbody td {
		font-size: 1rem;
	}
}
</style>
