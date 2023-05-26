<script setup lang="ts">
const items = [
	{ id: 1, label: '--color-dark', var: 'var(--color-dark)', val: 'laks' },
	{ id: 2, label: '--color-doc', var: 'var(--color-doc)', val: 'laks' },
	{ id: 3, label: '--color-task', var: 'var(--color-task)', val: 'laks' },
	{ id: 4, label: '--color-link', var: 'var(--color-link)', val: 'laks' },
]

const mode = ref(false)
</script>

<template lang="pug">
div
	h4
		|Primary colors
		q-toggle(v-model="mode")
	.panel
		.mygrid
			ColorSample(v-for="item in items" :key="item.id" :item="item" :mode="mode")
</template>

<style scoped lang="scss">
.panel {
	display: block;
}
.mygrid {
	display: flex;
	justify-items: start;
	gap: 1rem;
	flex-wrap: wrap;
}
h4 {
	--at-apply: flex justify-between items-center;
}
</style>
