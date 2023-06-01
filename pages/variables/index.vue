<script setup lang="ts">
const tab = ref('info')
</script>

<template lang="pug">
div
	h4 Variables
	q-tabs(v-model="tab" align="right").tab
		q-tab(name="info" label="Инфо")
		q-tab(name="list" label="Список")

	q-tab-panels(v-model="tab" animated)
		q-tab-panel(name="info")
			Info
		q-tab-panel(name="list")
			List

</template>

<style scoped lang="scss">
h4 {
	margin-bottom: 0;
}
.tab {
	margin-top: -2rem;
}
.q-tab-panels {
	background: transparent;
	color: var(--text-color);
}
</style>
