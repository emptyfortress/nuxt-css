<script setup lang="ts">
import { useQuasar } from 'quasar'

const $q = useQuasar()
const copy = ref(false)

const coping = () => {
	copy.value = true
	navigator.clipboard.writeText('#2c4159')
	setTimeout(() => {
		$q.notify({
			message: 'Скопировано',
			icon: 'mdi-check',
			color: 'primary',
		})
		copy.value = false
	}, 1000)
}
</script>

<template lang="pug">
div
	h2(@click="coping" :class="{'animate-bounce-one' : copy}") Primary colors
</template>

<style scoped lang="scss"></style>
