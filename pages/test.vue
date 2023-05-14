<script setup lang="ts"></script>

<template lang="pug">
.page
	.flex
		.square
		h3.main-header Fuck
	p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore harum tempora enim aliquid deleniti quia rem, provident nostrum. Molestiae cumque consequuntur praesentium rem voluptates minima impedit nesciunt deserunt soluta? Ipsum.
</template>

<style scoped lang="scss">
.flex {
	display: flex;
	gap: 1rem;
	align-items: flex-end;
}
.main-header {
	margin-bottom: 0;
}
.square {
	width: 200px;
	height: 200px;
	background: green;
	border-radius: 0.5rem;
}
</style>
