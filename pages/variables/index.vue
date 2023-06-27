<script setup lang="ts">
const tab = ref('info')

const filter = ref('')
</script>

<template lang="pug">
div
	.row.items-center.justify-between.q-my-lg
		h4 Variables
		q-input(v-model="filter" autofocus placeholder="Найти" dense clearable clear-icon="mdi-close-circle" @clear="filter = ''").search
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")
	List(:filter="filter")

</template>

<style scoped lang="scss">
h4 {
	margin-bottom: 0;
}

.tab {
	margin-top: -2rem;
}

.q-tab-panels {
	background: transparent;
	color: var(--text-color);
}

h4 {
	margin-top: 0;
}

.q-input {
	width: 220px;
}
</style>
