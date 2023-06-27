<script setup lang="ts">
import { useQuasar } from 'quasar'

interface PropType {
	item: Color
	mode: Boolean
	size: String
	big: Boolean
	border?: String
}

const props = withDefaults(defineProps<PropType>(), {
	size: () => '150px',
	border: () => '5px solid white',
	big: () => false,
	medium: () => false,
	mode: () => false,
})

const color = computed(() => {
	return props.item.var
})
const textColor = computed(() => {
	return props.item.textColor
})
const bord = computed(() => {
	if (props.item.border) {
		return props.item.border
	}
})

const label = computed(() => {
	return props.mode ? props.item.val : props.item.label
})
const copiedValue = computed(() => {
	return props.mode ? label.value : 'var(--' + label.value + ')'
})

const $q = useQuasar()
const copy = ref(false)
const sample = ref()

const coping = () => {
	copy.value = true
	navigator.clipboard.writeText(copiedValue.value)
	setTimeout(() => {
		$q.notify({
			message: 'Скопировано',
			icon: 'mdi-check',
			color: 'primary',
		})
		copy.value = false
	}, 1300)
}

const calcClass = computed(() => {
	if (copy.value === true) {
		return 'one'
	} else return ''
})
</script>

<template lang="pug">
.sample(ref="sample" :class="calcClass" @click="coping")
	span(v-show="big") --{{ label }}
</template>

<style scoped lang="scss">
.one {
	--at-apply: animate-bounce-alt animate-count-1;
}

.sample {
	width: v-bind(size);
	height: v-bind(size);
	border-radius: 50%;
	border: v-bind(bord);
	display: flex;
	align-items: center;
	justify-content: center;
	background: v-bind(color);
	color: v-bind(textColor);
	cursor: pointer;
	font-size: 1.1rem;
	text-align: center;
	border: v-bind(border);

	&:hover {
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
	}
}
</style>
