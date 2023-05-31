<script setup lang="ts">
import { additionalVars } from '@/data/vars'

const route = useRoute()
const mode = ref(false)

const list = computed(() => {
	return additionalVars.value.filter((item: any) => item.subfolder === route.params.id)
})
</script>

<template lang="pug">
div
	h4
		span.up {{ route.params.id }}
		|&nbsp;colors
	.mygrid
		ColorSample(v-for="item in list" :key="item.label" :item="item" :mode="mode" :big="true")
</template>

<style scoped lang="scss">
.up {
	text-transform: capitalize;
}
.mygrid {
	display: flex;
	justify-items: start;
	gap: 1rem;
	flex-wrap: wrap;
	padding: 4px;
}
</style>
