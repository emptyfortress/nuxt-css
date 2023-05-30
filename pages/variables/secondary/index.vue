<script setup lang="ts">
import { secondaryVars } from '@/data/vars'

const mode = ref(false)
</script>

<template lang="pug">
div
	h4
		|Secondary colors
		VarSwitcher(v-model="mode")
	.mygrid
		ColorSample(v-for="item in secondaryVars" :key="item.id" :item="item" :mode="mode" :big="true")
</template>

<style scoped lang="scss">
.mygrid {
	display: flex;
	justify-items: start;
	gap: 1rem;
	flex-wrap: wrap;
}
h4 {
	--at-apply: flex justify-between items-center;
	svg {
		color: var(--icon);
		margin-left: 1rem;
	}
}
</style>
