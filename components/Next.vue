<script setup lang="ts">
const { node } = useNodes()
</script>

<template lang="pug">
.next.q-gutter-x-xs(v-if="node")
	q-btn(round color="secondary" icon="mdi-chevron-left" :to="node.prev" v-if="node.prev")
	q-btn(round color="secondary" icon="mdi-chevron-right" :to="node.next" v-if="node.next")
</template>

<style scoped lang="scss">
.next {
	position: fixed;
	bottom: 1rem;
	right: 1rem;
}
</style>
