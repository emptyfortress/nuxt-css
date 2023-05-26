<script setup lang="ts">
const slide = ref(1)

const items = [
	{
		id: 1,
		className: 'dark',
		label: 'Дашборд и вспомогательные страницы',
		val: 'var(--color-dark)',
	},
	{ id: 2, className: 'doc', label: 'Документы', val: 'var(--color-doc)' },
	{ id: 3, className: 'task', label: 'Задания', val: 'var(--color-task)' },
]
</script>

<template lang="pug">
div
	h4 Светофор
	.panel
		q-icon(name="mdi-traffic-light" size="xl" color="primary")
		div
			p Светофором мы называем основную триаду ключевых цветов ДВ.
			p Обычно в приложениях есть один основной цвет, который считается <code>primary color</code>. Это цвет, который чаще всего отображается в компонентах вашего приложения. В веб-клиенте этот цвет является динамическим. То есть, его значение зависит от раздела веб-клиента (которых три). Отсюда название - светофор.
			p Соответствие <code>primary color</code> и разделов веб-клиента:
			TrafficSample(v-for="item in items" :key="item.id" :label="item.label" :className="item.className" :val="item.val")

	.panel
		q-icon(name="mdi-image-multiple-outline" size="xl" color="primary")
		div
			p Разделы веб-клиента в цветах светофора:
			q-carousel(v-model="slide" transition-prev="slide-right" transition-next="slide-left" animated thumbnails infinite)
				q-carousel-slide(:name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg")
				q-carousel-slide(:name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg")
				q-carousel-slide(:name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg")
	br
	br
	br
	br
</template>

<style scoped lang="scss"></style>
