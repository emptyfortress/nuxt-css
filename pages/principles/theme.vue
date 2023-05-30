<script setup lang="ts"></script>

<template lang="pug">
div
	h4 Themes
	.panel
		q-icon(name="mdi-brightness-5" size="xl" color="primary")
		div
			p Темой называется набор цветов.
			p Обычно пользователи хотят использовать в качестве
				Chip(label="primary" url="/variables/primary")
				|свои брендированные цвета (и избавиться от
				b.ml-2 светофора
				|). Это достаточно просто сделать, переназначив переменные.
	.panel
		q-icon(name="mdi-brightness-4" size="xl" color="primary")
		div
			.fw-bold Тёмная тема
			p Тёмная тема - это пользовательский интерфейс с низким уровнем освещенности. Если планируется использование тёмной темы, то необходимо предусмотреть разные значения основных переменных для светлой и тёмной тем.
	.panel.note
		q-icon(name="mdi-reminder" size="xl" color="primary")
		div
			.fw-bold Примечание
			p Чтобы избавиться от
				b.mx-2 светофора
				|необходимо назначить одинаковые значения 3 переменным:
			ul
				li
					NuxtLink.link(to="/variables/primary/dark") color-dark
				li
					NuxtLink.link(to="/variables/primary/doc") color-doc
				li
					NuxtLink.link(to="/variables/primary/task") color-task
			p При этом цвет текста в основных элементах интерфейса (например, кнопках) должен подстроиться автоматически.
</template>

<style scoped lang="scss"></style>
