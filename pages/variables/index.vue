<script setup lang="ts"></script>

<template lang="pug">
div
	h4 Variables
	.panel
		q-icon(name="mdi-language-css3" size="xl" color="primary")
		div
			p Переменные разбиты на группы и ищутся простым поиском или выбором из дерева. Общее их количество ~120, но в реальной жизни достаточно настроить ~10 переменных, чтобы полностью изменить внешний вид приложения. Именно такие переменные и описаны здесь.
			p.mb0.fw-bold BEM
			p Названия переменных складывались исторически в процессе работы и, возможно, не совсем оптимальны. BEM-правила не использовались, т.к. я считаю их избыточными, перегруженными и трудными для восприятия. Кроме того, цветовые переменные глобальны и не относятся к конкретному элементу интерфейса.
			p Поэтому, например, 30% серый цвет называется просто
				code --grey30
				|, ведь он может использоваться, где угодно: как background или как цвет шрифта. Сейчас я бы назвал этот цвет
				code --black30
				|, но опыт приходит с годами.
			p.mb0 Тем не менее, есть некоторые простые правила:
	.panel
		q-icon(name="mdi-numeric-1-circle-outline" size="xl" color="primary")
		div
			h6.my0 Primary colors
			p
				Chip(label="primary color" url="/variables/primary")
				|содержат в названии слово
				b.mx2 color
				|и название раздела. При этом, color идет первым:
			ul.mb0
				li
					code --color-dark
				li
					code --color-doc
	.panel
		q-icon(name="mdi-numeric-2-circle-outline" size="xl" color="primary")
		div
			h6.my0 Secondary colors
			// p Слово color идет вторым, после определения:
			Chip(label="secondary color" url="/variables/secondary")
			|содержат в названии назначение цвета и слово 
			b.mx2 color
			|При этом, color идет вторым:
			ul.mb0
				li
					code --error-color
				li
					code --info-color
	.panel
		q-icon(name="mdi-numeric-3-circle-outline" size="xl" color="primary")
		div
			h6.my0 Additional colors
			p Переменная либо содержит в себе название цвета, либо прямо указывает на назначение переменной. Если непонятно, что речь идет о цвете, добавляется слово color:
			ul.mb0
				li
					code --grey30
				li
					code --bg-main
				li
					code --bg-selected
				li
					code --shadow-color


</template>

<style scoped lang="scss"></style>
