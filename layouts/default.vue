<script setup lang="ts"></script>

<template lang="pug">
div
	header
		q-btn(label="Next" color="primary" to="/test")
		q-btn(label="back" color="primary" to="/")
		Switcher
	NuxtPage
</template>

<style scoped lang="scss">
header {
	height: 50px;
	line-height: 50px;
	border-bottom: var(--border);
	position: sticky;
	top: 0;
	z-index: 2;
	background: var(--headerBg);
	padding: 0 2rem;
	display: flex;
	align-items: center;
	gap: 1rem;
}
</style>
