<script setup lang="ts"></script>

<template lang="pug">
div
	header
		.title
			q-icon(name="mdi-language-css3" size="lg")
			div CSS variables
			// q-btn(label="Next" color="primary" to="/test")
			// q-btn(label="back" color="primary" to="/")
		Switcher
	NuxtPage
</template>

<style scoped lang="scss">
header {
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid var(--border-color);
	position: sticky;
	top: 0;
	z-index: 2;
	background: var(--bg-header);
	padding: 0 2rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	color: var(--icon);
}
.title {
	display: flex;
	align-items: center;
	flex-grow: 1;
	gap: 0.5rem;
	font-size: 1.2rem;
}
</style>
