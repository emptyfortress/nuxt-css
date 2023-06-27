<script setup lang="ts"></script>

<template lang="pug">
div
	h4 Buttons
	.panel
		q-icon(name="mdi-gesture-tap-button" size="xl" color="primary")
		div
			p Задача кнопок - инициировать действие пользователя.<br />Поэтому, все кнопки имеют некоторую семантику и отличаются своей ролью.
			p.mb0 В веб-клиенте мы различаем следующие кнопки:
			ol.my0
				li Icon
				li Text
				li Outlined
				li Rounded
				li Flat
				li Elevated
				li FAB (first action button)
			br
			.row.q-gutter-sm
				q-btn(flat round icon="mdi-alert") 
				q-btn(flat label="Text") 
				q-btn(outline label="Outline") 
				q-btn(rounded outline label="Rounded") 
				q-btn.gr(unelevated label="Flat") 
				q-btn.gr(unelevated icon="mdi-alert" label="Flat + icon") 
				q-btn.pr(label="Primary") 
				q-btn.pri(round icon="mdi-crosshairs-gps")
			br
			.note1
				q-icon(name="mdi-reminder" size="md" color="primary")
				p Внешний вид кнопок web-клиента слегка отличается (на текущем сайте используются сторонние компоненты), но для наших целей это непринципиально.

	.panel
		div(style="width: 48px")
		div
			p У всех кнопок есть общие свойства:
			ul.my0
				li Курсор - pointer
				li Обязательный hover state
				li Опциональный active state
				li Текст метки uppercase (допускается использование lowercase)
				li Допускается двухстрочный label при длинных текстовых метках

	.panel
		q-icon(name="mdi-anchor" size="lg" color="primary")
		div
			p.text-bold Использование
			.grid
				q-btn(flat round icon="mdi-alert")
				.q-ml-md - при недостатке места
				q-btn(flat label="Text") 
				.q-ml-md - при недостатке места
</template>

<style scoped lang="scss">
.q-btn {
	height: 36px;
}

.gr {
	background: var(--grey80);
}

.pr {
	background: var(--color-doc);
	color: white;
}

.pri {
	background: var(--color-doc);
	color: white;

	i {
		text-align: center;
	}
}

.grid {
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	column-gap: 1rem;
}
</style>
