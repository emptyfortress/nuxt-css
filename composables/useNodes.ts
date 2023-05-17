import { nodes } from '@/data/data'
import { getNodeFromTree } from '@/utils/utils'

const node = computed(() => {
	const route = useRoute()
	return getNodeFromTree(nodes[0], route.fullPath)
})

export const useNodes = () => {
	return { nodes, node }
}
