<script setup lang="ts">
import { useQuasar } from 'quasar'

const props = defineProps({
	zag: {
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
			message: 'Скопировано',
			icon: 'mdi-check',
			color: 'primary',
		})
		copy.value = false
	}, 1300)
}
</script>

<template lang="pug">
h4.cursor-pointer(ref="text" :class="{one : copy}" @click="coping")
		|var(--{{props.zag}})
		q-btn.ml-10(round flat)
			q-icon(:name="copy ? 'mdi-check' : 'mdi-content-copy'")
</template>

<style scoped lang="scss">
.one {
	--at-apply: animate-bounce-alt animate-count-1;
}
</style>
