<script setup lang="ts"></script>

<template lang="pug">
Html
	Head
		Title CSS variables
.page
	// h2 Home
	q-btn(label="test" color="primary")
	p test
	p(v-for="n in 50") Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repudiandae blanditiis, numquam cum, reprehenderit veniam corporis ullam molestias nostrum reiciendis itaque laborum, error quia maiores iste sequi est voluptates enim.
</template>

<style scoped lang="scss">
h2 {
	font-size: 4rem;
}
.page {
	padding: 2rem;
}
</style>
