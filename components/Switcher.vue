<template>
	<svg
		width="34"
		height="34"
		viewBox="0 0 34 34"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		@click="theme"
	>
		<circle
			id="hover"
			cx="17"
			cy="17"
			r="17"
		/>
		<path
			v-motion="'rotation'"
			ref="sun"
			id="sun"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M17.0208 5L20.5416 8.52081H26.0208V14L29.0416 17.0208L26.0208 20.0416V25.5208H20.5416L17.0208 29.0416L13.5 25.5208H9.02081V21.0416L5 17.0208L9.02081 13V8.52081H13.5L17.0208 5ZM17 24C20.866 24 24 20.866 24 17C24 13.134 20.866 10 17 10C13.134 10 10 13.134 10 17C10 20.866 13.134 24 17 24Z"
			fill="currentColor"
		/>
		<mask
			id="mask0_787_74"
			style="mask-type: alpha"
			maskUnits="userSpaceOnUse"
			x="9"
			y="9"
			width="16"
			height="16"
		>
			<circle
				cx="17"
				cy="17"
				r="8"
				fill="currentColor"
			/>
		</mask>
		<g mask="url(#mask0_787_74)">
			<circle
				v-motion="'moving'"
				ref="move"
				id="move"
				cx="17"
				cy="17"
				r="5"
				fill="currentColor"
			/>
		</g>
	</svg>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMotion } from '@vueuse/motion'
import { useQuasar } from 'quasar'
const $q = useQuasar()

const sun = ref()
const move = ref()

const rotation = useMotion(sun, {
	enter: {
		rotate: 0,
	},
	dark: {
		rotate: 90,
	},
})
const moving = useMotion(move, {
	enter: {
		scale: 1,
		x: 0,
	},
	dark: {
		scale: 1.6,
		x: -6,
	},
})

const theme = () => {
	if (rotation.variant.value === 'enter') {
		rotation.variant.value = 'dark'
		moving.variant.value = 'dark'
	} else {
		rotation.variant.value = 'enter'
		moving.variant.value = 'enter'
	}
	$q.dark.toggle()
}
</script>

<style scoped lang="scss">
svg {
	cursor: pointer;
	&:hover {
		#hover {
			fill: hsla(0, 0%, 0%, 0.1);
		}
	}
}

#hover {
	fill: transparent;
}
#sun,
#move {
	transform-origin: 50% 50%;
	transform-box: fill-box;
}

body.body--dark svg:hover #hover {
	fill: hsla(0, 0%, 100%, 0.15);
}
</style>
