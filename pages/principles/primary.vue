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
				Chip(label="primary colors" url="/variables/primary")
				span помимо
				Chip(label="светофора" url="/principles/traffic")
				|входит также цвет
				b.ml2 html-линков.
			p Это сделано потому, что довольно часто (при брендировании) цвет линков совпадает с ключевым цветом. В нашем случае это не так. Отдельная переменная для линков позволяет настраивать его независимо от ключевого цвета.
			p
				Chip(label="primary colors" url="/variables/primary")
				|являются
				b.mx2 ключевыми
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
			p Сюда же относятся дополнительные <code>hovers</code> цвета, но они вычисляются автоматически и мы их явно не указываем.

</template>

<style scoped lang="scss"></style>
