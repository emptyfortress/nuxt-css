<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

const target = ref<HTMLElement>()
const target1 = ref<HTMLElement>()

const { apply: applyTwo } = useMotion(target, {
	enter: {
		scale: 1,
	},
	custom: {
		scale: 2,
	},
})
const { apply: applyOne } = useMotion(target1, {
	initial: {
		scale: 1,
	},
	enter: {
		scale: 0.5,
		transition: {
			type: 'sping',
			stiffness: 600,
			damping: 15,
		},
	},
	custom: {
		scale: 2,
	},
})

const scale = () => {
	applyTwo('custom')
}

const yourCustomEvent = async () => {
	// scale()
	await applyOne({
		scale: 2.5,
		transition: {
			type: 'sping',
			stiffness: 600,
			damping: 15,
		},
	})
	await applyTwo('custom')
	await applyOne('initial')
	await applyTwo('enter')
}
</script>

<template lang="pug">
div
	Html
		Head
			Title CSS variables
	.page
		h3.main-header Home
		p Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ea a quaerat distinctio eveniet cum ad ut et nemo minus, dolore perferendis iure repellat eaque ipsam laboriosam unde minima earum?
		.square(ref="target" @click="yourCustomEvent")
		.new(ref="target1")
</template>

<style scoped lang="scss">
.nuxt-icon {
	font-size: 3rem;
}
.square {
	width: 100px;
	height: 100px;
	background: red;
	border-radius: 0.5rem;
	cursor: pointer;
}
.new {
	width: 100px;
	height: 100px;
	background: blue;
}
.main-header {
	text-align: left;
	left: 0;
}
.fuck {
	width: 100px;
	height: 100px;
	background: green;
	border-radius: 0.5rem;
}
</style>
