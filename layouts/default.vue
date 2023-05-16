<script setup lang="ts">
const ratio = ref(300)

const router = useRouter()

const home = () => {
	router.push('/')
}
</script>

<template lang="pug">
div
	Html
		Head
			Title CSS variables
	header
		.title(@click="home")
			q-icon(name="mdi-language-css3" size="lg")
			div CSS variables
		.grow
		Switcher
	.container
		q-splitter(v-model="ratio" unit="px" )
			template(v-slot:before)
				q-scroll-area.home
					Tree

			template(v-slot:after)
				q-scroll-area.home
					slot
</template>

<style scoped lang="scss">
header {
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid var(--border-color);
	position: sticky;
	top: 0;
	z-index: 2;
	background: var(--bg-header);
	padding: 0 2rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	color: var(--icon);
}
.title {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 1.2rem;
	cursor: pointer;
}
.grow {
	flex-grow: 1;
	// background: red;
	// height: 100%;
}
.home {
	height: calc(100vh - 60px);
}
</style>
