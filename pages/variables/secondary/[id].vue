<script setup lang="ts">
import { vars } from '@/data/vars'

const route = useRoute()

const item = computed(() => {
	return vars.filter((e) => e.param === route.params.id)[0]
})
</script>

<template lang="pug">
div
	h4
		// ColorSample(:item="item.val" :mode="false" size="50px")
		// AnimZag(:label="item.label")
	p {{ item }}
</template>

<style scoped lang="scss"></style>
