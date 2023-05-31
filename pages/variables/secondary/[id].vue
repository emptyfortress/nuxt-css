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
		AnimZag(:item="item" size="48px")
	VarInfo(:item="item")

</template>

<style scoped lang="scss"></style>
