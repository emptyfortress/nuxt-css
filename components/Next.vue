<script setup lang="ts">
const props = defineProps({
	index: {
		type: Number,
		default: 0,
	},
})

const { flatten } = useNodes()

const prev = computed(() => {
	return flatten[props.index - 1].url
})
const next = computed(() => {
	if (props.index < flatten.length - 1) {
		return flatten[props.index + 1].url
	}
})
</script>

<template lang="pug">
.next.q-gutter-x-xs
	client-only
		Transition(name="fade")
			q-btn(round color="secondary" icon="mdi-chevron-left" :to="prev" v-if="props.index > 0")
		q-btn(round color="secondary" icon="mdi-chevron-right" :to="next" :disable="props.index === flatten.length - 1")
</template>

<style scoped lang="scss">
.next {
	position: fixed;
	bottom: 1rem;
	right: 1rem;
}
.mar {
	margin-right: 40px;
}
</style>
