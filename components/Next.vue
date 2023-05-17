<script setup lang="ts">
const props = defineProps({
	prev: {
		type: String,
	},
	next: {
		type: String,
	},
})
const route = useRoute()
</script>

<template lang="pug">
div
	q-card-actions(align="right")
		q-btn(round color="primary" icon="mdi-chevron-left" :to="props.prev" v-if="props.prev")
		q-btn(round color="primary" size="lg" icon="mdi-chevron-right" :to="props.next")
	pre {{ route }}
</template>

<style scoped lang="scss"></style>
