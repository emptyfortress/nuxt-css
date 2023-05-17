function getNodeFromTree(node: Item, url: string): Item | null {
	if (node.url == url) {
		return node
	} else if (node.children != null) {
		var result = null
		for (let i = 0; result == null && i < node.children.length; i++) {
			result = getNodeFromTree(node.children[i], url)
		}
		return result
	}
	return null
}

export { getNodeFromTree }
