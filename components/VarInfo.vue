<script setup lang="ts">
interface PropType {
	item: Color
}

const props = defineProps<PropType>()

const color = computed(() => {
	return props.item.val
})
</script>

<template lang="pug">
.panel
	q-icon(name="mdi-information-outline" size="xl" color="primary")
	div
		p(v-html="props.item.info")
		p
			q-chip(v-for="chip in props.item.chips") {{chip}}

.panel
	q-icon(name="mdi-code-braces" size="xl" color="primary")
	div
		.def Definition:
		.code
			.full
				|{
				// .inside(v-html="props.item.definition")
				.inside {{ props.item.definition }}
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
					div background: {{ props.item.var }};
				|}
			.square

.panel(v-if="props.item.linked")
	q-icon(name="mdi-link-variant" size="xl" color="primary")
	div
		.fw-bold Связанные переменные
		q-markup-table(flat)
			thead
				tr
					th Имя
					th Значение
			tbody
				tr(v-for="e in props.item.linked" :key="e.label")
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
body.body--dark .q-dark {
	color: var(--dark-text-color);
}
</style>
