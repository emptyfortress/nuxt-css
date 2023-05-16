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
		no-selection-unset
		v-model:expanded="expanded"
		default-expand-all
		:filter="filter")

		template(v-slot:header-root="prop")
			NuxtLink.row.items-center.q-gutter-sm.full-width(:to="prop.node.url")
				q-avatar
					img(src="/webclient.svg")
				.label
					WordHighlighter(:query="filter") {{ prop.node.label }}

		template(v-slot:default-header="prop")
			NuxtLink.row.items-center.q-gutter-sm.full-width(:to="prop.node.url")
				template(v-if="prop.node.icon")
					q-icon(:name="prop.node.icon")
				.label
					WordHighlighter(:query="filter") {{ prop.node.label }}

</template>

<script setup lang="ts">
import WordHighlighter from 'vue-word-highlighter'
import { nodes } from '@/data/data'

const tree = ref()
const filter = ref('')
const expanded = ref([])
const selected = ref()

const toggle = () => {
	tree.value.getExpandedNodes().length !== 0 ? tree.value.collapseAll() : tree.value.expandAll()
}

const route = useRoute()

watchEffect(() => {
	if (filter.value.length > 1) {
		tree.value.expandAll()
	}
	if (route.fullPath === '/') {
		selected.value = 0
	}
})
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
