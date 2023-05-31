<script setup lang="ts">
const props = defineProps({
	label: {
		type: String,
		default: 'chip',
	},
	url: {
		type: String,
		required: false,
	},
})
</script>

<template lang="pug">
NuxtLink(:to="props.url")
	q-chip {{ props.label }}
</template>

<style scoped lang="scss">
.q-chip {
	background: var(--my-bg-header);
	color: var(--prim);
	font-weight: 600;
}
body.body--dark .q-chip {
	background: #4e4336;
}
</style>
