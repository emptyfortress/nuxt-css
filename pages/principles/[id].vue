<script setup lang="ts">
const route = useRoute()
</script>

<template lang="pug">
div
	h2 Hello
	pre {{ route.params.id }}
</template>

<style scoped lang="scss"></style>
