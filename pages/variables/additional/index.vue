<script setup lang="ts">
import { additionalVars } from '@/data/vars'

const mode = ref(false)
</script>

<template lang="pug">
div
	h4 Additional colors
	div(v-for="item in additionalVars") {{ item.label }}
</template>

<style scoped lang="scss"></style>
