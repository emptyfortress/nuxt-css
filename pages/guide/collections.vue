<script setup lang="ts">

const list = reactive([
	{ id: 0, selected: false, label: 'Background', val: '--bg-card' },
	{ id: 1, selected: false, label: 'Border', val: '--border-color' },
	{ id: 2, selected: false, label: 'Hover', val: '--hovers__white-bg' },
	{ id: 3, selected: true, label: 'Selected', val: '--bg-selected' },
	{ id: 4, selected: false, label: 'Selected hover', val: '--bg-selected-hover' },
])

const select = ((e: any) => {
	list.map(item => item.selected = false)
	e.selected = true
})
</script>

<template lang="pug">
div
	h4 Collections
	.panel
		q-icon(name="mdi-format-list-bulleted-square" size="xl" color="primary")
		div
			p Коллекции - это наборы однотипных данных для выбора пользователем, например:
			ul.my0
				li Выпадающие списки
				li Меню (в том числе, контекстные)
				li Строки в гриде
				li Ветки в дереве
				li и т.п.
			p Здесь у нас наблюдается самый большой разнобой в офромлении.

	.panel
		q-icon(name="mdi-palette-swatch-variant" size="xl" color="primary")
		div
			.text-bold Общие правила
			ul.my0
				li Коллекции должны быть отделены от остального интерфейса при помощи карточки или border.
				li Каждый элемент коллекции расположен друг под другом и имеет достаточные размеры.
				li Курсор - pointer.
				li Имеется явно выраженный hover state на весь элемент.
				li Selected state (если он есть) - отличается от hover. 
	.panel
		q-icon(name="mdi-palette-outline" size="xl" color="primary")
		div
			.text-bold Переменные:
			q-list(style="width: 400px" bordered)
				.item(v-for="item in list" :key="item.id" :class="{ sel: item.selected }" @click="select(item)")
					q-item-label {{ item.label }}
					q-item-label.text-bold {{ item.val }}

</template>

<style scoped lang="scss">
.hover {
	background: hsla(0, 0%, 0%, 0.05);
}


.item {
	cursor: pointer;
	padding: 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;

	&:hover {
		background: var(--hovers__white-bg);
	}

	&.sel {
		background: var(--bg-selected);

		&:hover {
			background: var(--bg-selected-hover);
		}
	}

	&.sel1 {
		background: var(--bg-selected-hover);
	}

}
</style>
