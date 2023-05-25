<script setup lang="ts">
const items = [
	{
		id: 1,
		className: 'dark',
		label: 'Дашборд и вспомогательные страницы',
		val: 'var(--color-dark)',
	},
	{ id: 2, className: 'doc', label: 'Документы', val: 'var(--color-doc)' },
	{ id: 3, className: 'task', label: 'Задания', val: 'var(--color-task)' },
	{ id: 4, className: 'linc', label: 'Цвет линков', val: 'var(--color-link)' },
]
</script>

<template lang="pug">
div
	h4 Primary colors
	.panel
		q-icon(name="mdi-palette" size="xl" color="primary")
		div
			p В веб-клиенте в состав
				code primary colors
				span помимо
				NuxtLink.link(to="/principles/traffic") &nbsp;светофора&nbsp;
				span входит также цвет html-линков.
			p Эти цвета являются
				b.mx-2 ключевыми
				|и определяют внешний вид приложения:
			TrafficSample(v-for="item in items" :key="item.id" :label="item.label" :className="item.className" :val="item.val")

	.panel
		q-icon(name="mdi-format-paint" size="xl" color="primary")
		div
			.fw-bold Где используются:
			ul.mb-0
				li Топ-бар
				li Левая панель
				li Кнопки действий по дефолту
				li Текстовые линки

	.panel.note
		q-icon(name="mdi-reminder" size="xl" color="primary")
		div
			.fw-bold Примечание
			p.mb-0 Сюда же относятся дополнительные <code>hovers</code> цвета, но они вычисляются автоматически и мы их явно не указываем.

</template>

<style scoped lang="scss"></style>
