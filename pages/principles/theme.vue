<script setup lang="ts"></script>

<template lang="pug">
div
	h4 Themes
	.panel
		q-icon(name="mdi-brightness-5" size="xl" color="primary")
		div
			p.mb-0 Темой называется набор цветов.
			p.mb-0 Обычно пользователи хотят использовать в качестве
				code primary
				|свои брендированные цвета (и избавиться от
				b.ml-2 светофора
				|). Это достаточно просто сделать, переназначив переменные.
	.panel
		q-icon(name="mdi-brightness-4" size="xl" color="primary")
		div
			.fw-bold Тёмная тема
			p.mb-0 Тёмная тема - это пользовательский интерфейс с низким уровнем освещенности. Если планируется использование тёмной темы, то необходимо предусмотреть разные значения основных переменных для светлой и тёмной тем.
	.panel.note
		q-icon(name="mdi-reminder" size="xl" color="primary")
		div
			.fw-bold Примечание
			p.mb-0 Чтобы избавиться от
				b.mx-2 светофора
				|необходимо назначить одинаковые значения 3 переменным:
			ul
				li color-dark
				li color-doc
				li color-task
			p.mb-0 При этом цвет текста в основных элементах интерфейса (например, кнопках) должен подстроиться автоматически.
</template>

<style scoped lang="scss"></style>
