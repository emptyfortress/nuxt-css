<script setup lang="ts">
const { node } = useNodes()
</script>

<template lang="pug">
div
	h4 {{node?.label}}
	.panel
		q-icon(:name="node?.icon" size="xl" color="primary")
		div(v-html="node?.desc")
</template>

<style scoped lang="scss"></style>
