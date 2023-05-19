interface Item {
	id: number
	label: string
	header?: string
	avatar?: string
	desc?: string
	traffic?: boolean
	icon?: string
	url?: RouteLocationRaw
	next?: RouteLocationRaw
	prev?: RouteLocationRaw
	variable?: boolean
	children?: Item[]
}
