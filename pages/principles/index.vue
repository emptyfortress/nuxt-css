<script setup lang="ts"></script>

<template lang="pug">
div
	h4 Principles
	.panel
		q-icon(name="mdi-owl" size="xl" color="primary")
		div
			div Довольно часто цвета в веб-клиенте слегка отличаются друг от друга. Это происходит от неточности измерений, невнимательности или по другим причинам.<br />С целью унификации и перехода к пользовательским темам вводится ряд css-переменных.<br />Основные принципы:
			ul
				li Переменные охватывают только цвет.
				li Все цвета делятся на 3 группы:
					ol.fw-bold.my-2
						li
							NuxtLink.link(to="/principles/primary") primary colors (светофор)
						li
							NuxtLink.link(to="/principles/secondary") secondary colors
						li
							NuxtLink.link(to="/principles/additional") additional colors
				li Primary colors содержит не один цвет (как обычно), а три.
				li Эти три цвета составляют так называемый "светофор".
				li Задавая значения всего <span class="color-orange fw-bold">20-30 переменным</span> мы полностью управляем внешним видом приложения.

	.panel.note
		q-icon(name="mdi-reminder" size="xl" color="primary")
		div
			.fw-bold Примечание
			p.mb-0 Везде указаны "нормализованные" (правильные) значения цветов. Именно их и нужно использовать.

	.panel.warn
		q-icon(name="mdi-reminder" size="xl" color="primary")
		div
			.fw-bold Примечание
			p.mb-0 Чтобы скопировать переменную или ее значение кликните по ней:
			h6.my-4
				AnimZag(zag="try-me")

</template>

<style scoped lang="scss"></style>
