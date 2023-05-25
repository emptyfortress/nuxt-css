<script setup lang="ts">
import { useQuasar } from 'quasar'

const props = defineProps({
	className: {
		type: String,
		default: '',
	},
	label: {
		type: String,
		default: '',
	},
	val: {
		type: String,
		default: '',
	},
})

const $q = useQuasar()
const copy = ref(false)
const text = ref()

const coping = () => {
	copy.value = true
	navigator.clipboard.writeText(text.value.innerText)
	setTimeout(() => {
		$q.notify({
			message: 'Скопировано: ' + props.val,
			icon: 'mdi-check',
			color: 'primary',
		})
		copy.value = false
	}, 1300)
}

const calcClass = (e: string) => {
	if (copy.value === true) {
		return 'common ' + e + ' ' + 'one'
	} else return 'common ' + e
}
</script>

<template lang="pug">
.bl
	div(:class="calcClass(props.className)" @click="coping")
	div {{ props.label }}
	.hidden(ref="text") {{ props.val }}
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
	cursor: pointer;
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
.linc {
	background: var(--color-link);
}
.one {
	--at-apply: animate-bounce-alt animate-count-1;
}
</style>
