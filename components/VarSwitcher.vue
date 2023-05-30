<script setup lang="ts">
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'

const grid = ref()
const vars = ref()

const props = defineProps({
	modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
	emit('update:modelValue', !props.modelValue)

	if (props.modelValue === true) {
		rotation.variant.value = 'enter'
		rotation1.variant.value = 'new'
	} else {
		rotation.variant.value = 'new'
		rotation1.variant.value = 'enter'
	}
}

const rotation = useMotion(grid, {
	enter: {
		rotate: 0,
	},
	new: {
		rotate: 90,
	},
})
const rotation1 = useMotion(vars, {
	enter: {
		rotate: 0,
	},
	new: {
		rotate: -180,
	},
})
</script>

<template>
	<svg
		width="36"
		height="36"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		@click="toggle"
	>
		<circle
			id="hover"
			cx="16"
			cy="16"
			r="16"
		/>
		<g
			ref="grid"
			id="grid"
			v-motion="'rotation'"
			v-show="modelValue"
		>
			<rect
				x="8.25806"
				y="11.3549"
				width="15.4839"
				height="3.09677"
				fill="currentColor"
			/>
			<rect
				x="8.25806"
				y="17.5484"
				width="15.4839"
				height="3.09677"
				fill="currentColor"
			/>
			<rect
				x="11.3549"
				y="23.7419"
				width="15.4839"
				height="3.09677"
				transform="rotate(-90 11.3549 23.7419)"
				fill="currentColor"
			/>
			<rect
				x="17.5484"
				y="23.7419"
				width="15.4839"
				height="3.09677"
				transform="rotate(-90 17.5484 23.7419)"
				fill="currentColor"
			/>
		</g>
		<g
			ref="vars"
			id="vars"
			v-show="!modelValue"
			v-motion="'rotation1'"
		>
			<path
				d="M14.2478 10.8549L15.9106 13.8043H15.9897L17.6723 10.8549H20.7405L17.7119 15.9223L20.8592 20.9898H17.7119L15.9897 17.981H15.9106L14.1884 20.9898H11.0609L14.1686 15.9223L11.1598 10.8549H14.2478Z"
				fill="currentColor"
			/>
			<path
				d="M3.61292 16.0887C3.61292 14.4524 3.83066 12.9458 4.26614 11.5689C4.70602 10.1921 5.37684 8.91643 6.2786 7.74194H8.96409C8.62098 8.17743 8.30206 8.70969 8.00734 9.33872C7.71262 9.96335 7.45529 10.6496 7.23535 11.3974C7.01541 12.1452 6.84385 12.9194 6.72069 13.7199C6.59752 14.5161 6.53594 15.3057 6.53594 16.0887C6.53594 17.1312 6.64151 18.1848 6.85265 19.2493C7.06819 20.3094 7.35852 21.2947 7.72362 22.2053C8.09312 23.1158 8.50661 23.8614 8.96409 24.4421H6.2786C5.37684 23.2676 4.70602 21.9919 4.26614 20.6151C3.83066 19.2383 3.61292 17.7295 3.61292 16.0887Z"
				fill="currentColor"
			/>
			<path
				d="M28.3754 15.5726C28.3754 17.2134 28.1554 19.2383 27.7156 20.6151C27.2801 21.9919 26.6114 23.2676 25.7097 24.4421H23.0242C23.3673 24.0066 23.6862 23.4743 23.981 22.8453C24.2757 22.2163 24.533 21.5301 24.7529 20.7867C24.9729 20.0389 25.1444 19.2647 25.2676 18.4641C25.3908 17.6635 25.4524 16.8717 25.4524 16.0887C25.4524 15.0462 25.3446 13.9949 25.129 12.9348C24.9179 11.8702 24.6276 10.8849 24.2581 9.97875C23.893 9.06819 23.4817 8.32259 23.0242 7.74194H25.7097C26.6114 8.91643 27.2801 10.1921 27.7156 11.5689C28.1554 12.9458 28.3754 13.9362 28.3754 15.5726Z"
				fill="currentColor"
			/>
		</g>
	</svg>
</template>

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
#grid,
#vars {
	transform-origin: 50% 50%;
	transform-box: fill-box;
}
</style>
