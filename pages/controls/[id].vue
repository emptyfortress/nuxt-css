<script setup lang="ts">
const route = useRoute()
</script>

<template lang="pug">
h2 controls - {{ route.params.id }}
</template>

<style scoped lang="scss"></style>
