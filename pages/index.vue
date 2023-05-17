<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

const logo = ref<HTMLElement>()
const dv = ref<HTMLElement>()

const { node } = useNodes()

const { apply: rotatelogo } = useMotion(logo, {
	initial: {
		rotate: 0,
		x: 400,
		opacity: 0,
	},
	enter: {
		rotate: 0,
		x: 0,
		opacity: 1,
		transition: {
			rotate: {
				delay: 1000,
			},
		},
	},
})
const { apply: move } = useMotion(dv, {
	enter: {
		x: 0,
		y: 0,
	},
	fly1: {
		x: 200,
	},
	fly2: {
		y: 50,
	},
	fly3: {
		x: 0,
	},
	fly4: {
		x: 0,
		y: 0,
	},
})

const mov = async () => {
	await move('fly1')
	await move('fly2')
	await move('fly3')
	await move('fly4')
}
const rotate = async () => {
	await rotatelogo({
		rotate: 180,
	})

	await rotatelogo('enter')
}
</script>

<template lang="pug">
div
	.title
		div Web client
		img(ref="logo" src="/logo.svg" @click="rotate").logo
	.panel
		img(ref="dv" src="/webclient.svg" @click="mov").dv
		div
			p Web-клиент – полнофункциональное рабочее место пользователя Docsvision, которое предоставляет доступ к системе через любую ОС  и любой интернет-браузер, без необходимости установки на устройство пользователя приложения или дополнительного ПО.
			p Здесь собрана информация про использовании css-переменных в веб-клиенте, и их кастомизацию.
</template>

<style scoped lang="scss">
.title {
	margin-top: 3rem;
	font-size: 1.8rem;
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
	img {
		height: 36px;
	}
}
.logo,
.dv {
	transform-origin: left 50%;
	z-index: 3;
	cursor: pointer;
}
</style>
