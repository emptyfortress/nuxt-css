import { nodes } from '@/data/data'
import { getNodeFromTree } from '@/utils/utils'

const node = computed(() => {
	const route = useRoute()
	return getNodeFromTree(nodes[0], route.fullPath)
})

const getMembers = (members: any[]): any[] => {
	let children = [] as any[]
	return members
		.map((mem) => {
			const m = { ...mem } // use spread operator
			if (m.children && m.children.length) {
				children = [...children, ...m.children]
			}
			delete m.children // this will not affect the original array object
			return m
		})
		.concat(children.length ? getMembers(children) : children)
}

const flat = getMembers([...nodes])

export const useNodes = () => {
	return { nodes, node, flat }
}
