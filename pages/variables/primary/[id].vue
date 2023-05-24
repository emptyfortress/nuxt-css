<script setup lang="ts">
const { node } = useNodes()
</script>

<template lang="pug">
div
	h4
		AnimZag(:zag="node?.label")
	p fuck
</template>

<style scoped lang="scss"></style>
