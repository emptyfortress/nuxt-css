<script setup lang="ts">
const ratio = ref(300)
</script>

<template lang="pug">
div
	Html
		Head
			Title CSS variables
	.container
		q-splitter(v-model="ratio" unit="px" )
			template(v-slot:before)
				q-scroll-area.home
					Tree
					// p Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, dolorum. Dolorum iure sequi consectetur numquam explicabo nam labore reiciendis error perspiciatis, dolores facilis amet sapiente, porro architecto. Ea, officiis corporis.
					// component.q-mt-md(:is="Tree")

			template(v-slot:after)
				q-scroll-area.home
					p Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, dolorum. Dolorum iure sequi consectetur numquam explicabo nam labore reiciendis error perspiciatis, dolores facilis amet sapiente, porro architecto. Ea, officiis corporis.
							// component.q-mt-md(:is="Component")
		// h3.main-header Home
		// p Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ea a quaerat distinctio eveniet cum ad ut et nemo minus, dolore perferendis iure repellat eaque ipsam laboriosam unde minima earum?
		// .square(ref="target" @click="yourCustomEvent")
		// .new(ref="target1")
</template>

<style scoped lang="scss">
.home {
	height: calc(100vh - 60px);
	// background: transparent;
}
</style>
