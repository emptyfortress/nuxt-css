<script setup lang="ts"></script>

<template lang="pug">
div
	h4 Secondary colors
	.panel
		q-icon(name="mdi-palette" size="xl" color="primary")
		div
			p
				Chip(label="secondary colors")
				|- это группа цветов, которые используются не так часто, как
				Chip(label="primary" url="/variables/primary")
				|и служат для акцентирования элементов интерфейса.
			p Обычно сюда входят цвета для предупреждений, сообщений об ошибках, информационных сообщений и тп.:
			ul.mb-0
				li Info color
				li Success color
				li Warning color
				li Error color
				li Accent color

	.panel
		q-icon(name="mdi-format-paint" size="xl" color="primary")
		div
			.fw-bold Где используются:
			ul.mb-0
				li Оформление модальных окон сообщений платформы
				li Цвет вспомогательных иконок
	.panel.note
		q-icon(name="mdi-reminder" size="xl" color="primary")
		div
			.fw-bold Примечание
			p Эти цвета не зависят от
				Chip(label="primary" url="/variables/primary")
				|и могут редактироваться независимо при настройке
				NuxtLink.link.ml-2(to="/principles/theme") тем.
</template>

<style scoped lang="scss"></style>
