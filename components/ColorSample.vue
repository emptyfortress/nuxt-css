<script setup lang="ts">
import { useQuasar } from 'quasar'

const props = defineProps<{ item: Color; mode: Boolean }>()

const color = computed(() => {
	return props.item.var
})
const label = computed(() => {
	return props.mode ? props.item.val : props.item.label
})

const $q = useQuasar()
const copy = ref(false)
const sample = ref()

const coping = () => {
	copy.value = true
	navigator.clipboard.writeText(sample.value?.innerText)
	setTimeout(() => {
		$q.notify({
			message: 'Скопировано: ' + label.value,
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
.sample(ref="sample" :class="calcClass" @click="coping") {{label}}
</template>

<style scoped lang="scss">
.one {
	--at-apply: animate-bounce-alt animate-count-1;
}
.sample {
	width: 150px;
	height: 150px;
	border-radius: 50%;
	border: 5px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	background: v-bind(color);
	color: white;
	cursor: pointer;
	font-size: 1.1rem;
	&:hover {
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
	}
}
body.body--dark {
	.sample {
		border: 5px solid grey;
		&:hover {
			border-color: white;
		}
	}
}
</style>
