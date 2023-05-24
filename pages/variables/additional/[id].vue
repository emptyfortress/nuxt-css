<script setup lang="ts">
const { node } = useNodes()
</script>

<template lang="pug">
div
	h4
		AnimZag(:zag="node?.label")
</template>

<style scoped lang="scss"></style>
