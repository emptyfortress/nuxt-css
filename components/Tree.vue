<template lang="pug">
.q-mr-md
	.row.items-center.justify-between
		q-btn(flat round dense icon="mdi-unfold-more-horizontal" @click="toggle").ic
		q-input(v-model="filter" autofocus placeholder="Поиск" dense clearable clear-icon="mdi-close-circle" @clear="filter = ''").search
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")
	q-tree(ref="tree" :nodes="nodes"
		icon='mdi-chevron-right'
		node-key="id"
		v-model:selected="selected"
		v-model:expanded="expanded"
		)

		template(v-slot:header-root="prop")
			.row.items-center.q-gutter-sm.full-width
				q-avatar
					img(src="/webclient.svg")
				.label {{ prop.node.label }}

		template(v-slot:default-header="prop")
			.row.items-center.q-gutter-sm.full-width
				template(v-if="prop.node.icon")
					q-icon(:name="prop.node.icon")
				.label {{ prop.node.label }}

</template>

<script setup lang="ts">
import { nodes } from '@/data/data'

const filter = ref('')
const expanded = ref([])
const selected = ref([])
</script>

<style scoped lang="scss">
:deep(.q-tree__node--selected) {
	background: var(--bg-selected);
}
.label {
	color: var(--text-color);
}
.q-icon {
	color: var(--text-color);
}
.search {
	width: 200px;
	// font-size: 1.1rem;
	// background: rgba(0, 0, 0, 0.05);
}
:deep(.q-tree__arrow) {
	font-size: 1.5rem;
	margin-right: 0;
}
</style>
