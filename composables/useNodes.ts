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

const compare = (a: Item, b: Item) => {
	return a.id - b.id
}

let flat = getMembers([...nodes])
let flatten = flat.sort(compare)

export const useNodes = () => {
	return { nodes, node, flatten }
}
