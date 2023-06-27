<script setup lang="ts">
import { vars } from '@/data/vars'
import type { QTableProps } from 'quasar'
import WordHighlighter from 'vue-word-highlighter'

const columns: QTableProps['columns'] = [
	{
		name: 'label',
		required: true,
		label: 'Variable',
		align: 'left',
		field: 'label',
		sortable: true,
	},
	{
		name: 'type',
		required: true,
		label: 'Type',
		align: 'left',
		field: 'subfolder',
		sortable: true,
	},
	{
		name: 'info',
		required: false,
		label: 'Info',
		align: 'left',
		field: 'info',
		sortable: false,
	},
]

const props = defineProps({
	filter: {
		type: String,
		required: true,
		default: ''
	}
})
</script>

<template lang="pug">
q-table(flat bordered
	:rows="vars"
	:columns="columns"
	row-key="label"
	:filter="props.filter"
	hide-pagination
	wrap-cells
	:rows-per-page-options="[0]"
	)
	template(v-slot:body='props')
		q-tr(:props='props')
			q-td
				.first
					ColorSample(:item="props.row" size="28px" :mode="false" border="1px solid #ccc")
					div
						WordHighlighter(:query="filter") --{{ props.row.label }}
			q-td
				WordHighlighter(:query="filter") {{ props.row.subfolder }}
			q-td
				WordHighlighter(:htmlToHighlight="props.row.info" :query="filter")
</template>

<style scoped lang="scss">
.first {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.q-dark {
	color: var(--text-color);
}
</style>
