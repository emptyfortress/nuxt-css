<script setup lang="ts">
const { node } = useNodes()
</script>

<template lang="pug">
div
	AnimZag(:zag="node?.label")
</template>

<style scoped lang="scss"></style>
