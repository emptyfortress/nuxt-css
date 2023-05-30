<script setup lang="ts"></script>

<template lang="pug">
div
	h4 Additional colors
	.panel
		q-icon(name="mdi-palette" size="xl" color="primary")
		div
			p Довольно большая группа цветов, не вошедшая в остальные группы.
			p Включает в себя: типографику, поверхности, окантовки, выделения в списках, нейтральные тона и др.
	.panel
		q-icon(name="mdi-format-paint" size="xl" color="primary")
		div
			.fw-bold Где используются:
			ul.mb-0
				li Тексты
				li Backgrounds
				li Menu
				li Shadows
				li Hovers
</template>

<style scoped lang="scss"></style>
