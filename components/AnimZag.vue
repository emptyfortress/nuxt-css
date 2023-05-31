<script setup lang="ts">
import { useQuasar } from 'quasar'

interface PropType {
	item: Color
	size: String
}

const color = computed(() => {
	return props.item.val
})

const props = withDefaults(defineProps<PropType>(), {
	item: () => ({
		id: 0,
		label: 'try-me',
		var: '',
		val: 'red',
	}),
	size: () => '32px',
})

const $q = useQuasar()

const copy = ref(false)
const text = ref()

const coping = () => {
	copy.value = true
	navigator.clipboard.writeText(text.value.innerText)
	setTimeout(() => {
		$q.notify({
			message: 'Скопировано',
			icon: 'mdi-check',
			color: 'primary',
		})
		copy.value = false
	}, 1300)
}
</script>

<template lang="pug">
.animzag(ref="text" :class="{one : copy}" @click="coping")
	.circle
	|var(--{{ props.item.label}})
	q-btn.ml-1em(round flat)
		q-icon(:name="copy ? 'mdi-check' : 'mdi-content-copy'" style="font-size: 18px;")
</template>

<style scoped lang="scss">
.animzag {
	padding-left: 0.2rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
.one {
	--at-apply: animate-bounce-alt animate-count-1;
}
.circle {
	width: v-bind(size);
	height: v-bind(size);
	border-radius: 50%;
	border: 5px solid #fff;
	background: v-bind(color);
	body.body--dark & {
		border-color: var(--border-color);
	}
}
</style>
