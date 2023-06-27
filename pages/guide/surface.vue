<script setup lang="ts">
const bg = {
	label: 'bg-main',
	var: 'var(--bg-light)',
	val: '',
	folder: 'additional',
	subfolder: 'bg',
	textColor: 'black',
	param: '',
}
const bar = {
	label: 'bg-header',
	var: 'var(--color-dark)',
	val: '',
	folder: 'additional',
	subfolder: 'bg',
	textColor: 'white',
	param: '',
}
const sidebar = {
	label: 'primary-color',
	var: 'var(--color-dark)',
	val: '',
	folder: 'additional',
	subfolder: 'bg',
	textColor: 'white',
	param: '',
}
const panel = {
	label: 'bg-panel',
	var: 'var(--bg-panel)',
	val: '',
	folder: 'additional',
	subfolder: 'bg',
	textColor: 'var(--text-color)',
	param: '',
	border: true,
}
const primary = {
	label: 'primary-color',
	var: 'var(--primary-color)',
	val: '',
	folder: 'additional',
	subfolder: 'bg',
	textColor: 'var(--text-color)',
	param: '',
	border: true,
}
const card = {
	label: 'bg-card',
	var: 'var(--my-bg-card)',
	val: '',
	folder: 'additional',
	subfolder: 'bg',
	textColor: 'var(--text-color)',
	param: '',
	border: true,
}
</script>

<template lang="pug">
div
	h4 Surface
	.panel
		q-icon(name="mdi-layers-outline" size="xl" color="primary")
		div
			p Поверхность - это любая закрашенная область интерфейса. То есть, это элемент, имеющий свойство <b>background-color</b>. Интерфейс имеет "глубину", поэтому цвет поверхности зависит от высоты ее расположения. Чем ближе поверхность к пользователю, тем она ярче.
			p.mb0 В веб-клиенте мы различаем следующие поверхности:
			ol.my0
				li background
				li bar
				li sidebar
				li panel
				li card
				li modal dialog

	.panel.var
		q-icon(name="mdi-numeric-1-circle-outline" size="lg" color="primary")
		div
			.fw-bold Background
			p Это цвет области основного контента позади скролла. По дефолту это светло-серый цвет (hsl(0, 0%, 93%)) - для выделения других панелей и окон.
			p Переменная: <b>--bg-main</b>.

		ColorSample(:item="bg" :big="true" size="120px" border="1px solid #ccc")
		.note1
			q-icon(name="mdi-reminder" size="md" color="primary")
			p --bg-main может принимать два значения: --bg-light и --bg-dark <br />(для переключения светлой и темной тем).

	.panel.var
		q-icon(name="mdi-numeric-2-circle-outline" size="lg" color="primary")
		div
			.fw-bold Bar
			p Это область (обычно вверху приложения, окна или панели), содержащая  верхнеуровневую навигацию, титул и др. Часто выделяется <b>ключевым</b> цветом.
			p Переменная: <b>--bg-header, --primary-color</b>.
		ColorSample(:item="bar" :big="true" size="120px")
		.note1
			q-icon(name="mdi-reminder" size="md" color="primary")
			p Поскольку у нас 3 ключевых цвета, то --bg-header может принимать три значения:<br />--color-dark, --color-doc и --color-task.

	.panel.var
		q-icon(name="mdi-numeric-3-circle-outline" size="lg" color="primary")
		div
			.fw-bold Sidebar
			p Это выезжающая слева навигационная панель. Может выделяться ключевым цветом.
			p Переменные: <b>--bg-panel</b>, <b>--primary-color</b>.
		.row.q-gutter-xs
			ColorSample(:item="panel" :big="true" size="120px" border="1px solid #ccc")
			ColorSample(:item="sidebar" :big="true" size="120px")

	.panel.var
		q-icon(name="mdi-numeric-4-circle-outline" size="lg" color="primary")
		div
			.fw-bold Panel
			p Панель это любая область, содержащая сгруппированную информацию.
			p Переменная: <b>--bg-panel</b>.
		ColorSample(:item="panel" :big="true" size="120px" border="1px solid #ccc")

	.panel.var
		q-icon(name="mdi-numeric-5-circle-outline" size="lg" color="primary")
		div
			.fw-bold Card
			p Карточка это панель с белым фоном и тенью. 
			p Переменная: <b>--bg-card</b>.
		ColorSample(:item="card" :big="true" size="120px" border="1px solid #ccc")

	.panel.var
		q-icon(name="mdi-numeric-6-circle-outline" size="lg" color="primary")
		div
			.fw-bold Modal dialog
			p Диалог требует реакции пользователя, поэтому, обычно, остальной интерфейс блокируется.
			p Переменная: <b>--bg-card</b>.
		ColorSample(:item="card" :big="true" size="120px" border="1px solid #ccc")
</template>

<style scoped lang="scss"></style>
