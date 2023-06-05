<script setup lang="ts">
const tab = ref('info')
</script>

<template lang="pug">
div
	h4 Variables
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
