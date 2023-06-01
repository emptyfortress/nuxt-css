<template lang="pug">
.q-mr-md
	.row.items-center.justify-between
		q-input(v-model="filter" autofocus placeholder="Поиск" dense clearable clear-icon="mdi-close-circle" @clear="filter = ''").search
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")
	q-tree(ref="tree" :nodes="props.nodes"
		icon='mdi-chevron-right'
		node-key="url"
		v-model:selected="selected"
		no-selection-unset
		v-model:expanded="expanded"
		default-expand-all
		no-results-label="Ничего нет"
		:filter="filter")

		template(v-slot:header-root="prop")
			NuxtLink.row.items-center.q-gutter-sm.full-width(:to="prop.node.url")
				q-avatar
					img(src="/webclient.svg")
				.label
					WordHighlighter(:query="filter") {{ prop.node.label }}

			q-btn.ic(flat round dense icon="mdi-unfold-more-horizontal" @click.stop="toggle")

		template(v-slot:default-header="prop")
			NuxtLink.row.items-center.q-gutter-sm.full-width(:to="prop.node.url")
				template(v-if="prop.node.icon")
					q-icon(:name="prop.node.icon")
				.label
					WordHighlighter(:query="filter") {{ prop.node.label }}

</template>

<script setup lang="ts">
import WordHighlighter from 'vue-word-highlighter'

interface TreeProps {
	nodes: Item[]
}
const props = defineProps<TreeProps>()

const tree = ref()
const filter = ref('')
// const expanded = ref(['/', '/variables', '/variables/additional'])
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
	selected.value = route.fullPath
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
	width: 100%;
}
:deep(.q-tree__arrow) {
	font-size: 1.5rem;
	margin-right: 0;
}
.ic {
	z-index: 10;
	color: var(--prim);
}
.body--dark .q-tree--standard {
	color: #5c4f41;
}
</style>
