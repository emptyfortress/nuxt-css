<script setup lang="ts"></script>

<template lang="pug">
div
	h4 Светофор
	.panel
		q-icon(name="mdi-traffic-light" size="xl" color="primary")
		div
			p Светофором мы называем основную триаду первичных цветов ДВ.<br />Обычно в приложениях есть один основной цвет, который считается <span class="code">primary</span>. В веб-клиенте их три. Отсюда - светофор.
			p Цвета отличаются в следующих разделах веб-клиента:
			div
				.bl
					.common.dark
					div Дашборд и вспомогательные страницы
				.bl
					.common.doc
					div Документы
				.bl
					.common.task
					div Задания

</template>

<style scoped lang="scss">
.bl {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
}
.common {
	width: 48px;
	height: 48px;
	border-radius: 50%;
	margin-bottom: 0.5rem;
	border: 4px solid var(--bg-header);
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.12);
}
.dark {
	background: var(--color-dark);
}
.doc {
	background: var(--color-doc);
}
.task {
	background: var(--color-task);
}
</style>
