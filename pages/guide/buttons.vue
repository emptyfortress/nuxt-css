<script setup lang="ts"></script>

<template lang="pug">
div
	h4 Buttons
	.panel
		q-icon(name="mdi-gesture-tap-button" size="xl" color="primary")
		div
			p Задача кнопок - инициировать действие пользователя.<br />Поэтому, все кнопки имеют некоторую семантику и отличаются своей ролью / важностью.
			p.mb0 В веб-клиенте мы различаем следующие кнопки:
			ol.my0
				li Icon
				li Text
				li Outlined
				li Rounded
				li Flat
				li Flat + icon
				li Flat + loading state
				li Primary
				li FAB (first action button)
			br
			.row.q-gutter-sm
				q-btn(flat round icon="mdi-alert") 
				q-btn(flat label="Text") 
				q-btn(outline label="Outline") 
				q-btn(rounded outline label="Rounded") 
				q-btn.gr(unelevated label="Flat") 
				q-btn.gr(unelevated icon="mdi-alert" label="Flat + icon") 
				q-btn.gr(unelevated :loading="true" icon="mdi-alert" label="Loading") 
				q-btn.pr(label="Primary") 
				q-btn.pri(round icon="mdi-plus")
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
				.text-center
					q-btn(flat round icon="mdi-alert")
				div - при недостатке места
				.text-center
					q-btn(flat label="Text") 
				div - для обозначения <b>secondary actions</b> (кнопка "Отмена")
				.text-center
					q-btn(outline label="Outline") 
				div - для обозначения других действий
				.text-center
					q-btn(rounded outline label="Rounded") 
				div - если нужно дополнительно выделить кнопку
				.text-center
					q-btn.gr(unelevated label="Flat") 
				div - обычная (не главная) кнопка действий
				.text-center
					q-btn.gr(unelevated icon="mdi-alert" label="Flat + icon") 
				div - если есть иконка
				.text-center
					q-btn.gr(unelevated :loading="true" icon="mdi-alert" label="Loading") 
				div - loading state
				.text-center
					q-btn.pr(label="Primary") 
				div - кнопка для <b>primary actions</b>
				.text-center
					q-btn.pri(round icon="mdi-plus")
				div - плавающая кнопка <b>primary actions</b>
			br
			.note1
				q-icon(name="mdi-reminder" size="md" color="primary")
				p Цвет primary buttons зависит от раздела web-клиента.
</template>

<style scoped lang="scss">
:deep(.q-btn) {
	height: 36px;

	&:focus {
		outline: 2px solid var(--focus-color);
	}
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
	column-gap: 2rem;
	row-gap: .5rem;
}
</style>
