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

interface LinkedVar {
	label: string
	val: string
}

interface Color {
	id: number
	label: string
	var: string
	val: string
	folder?: string
	textColor?: string
	param?: string
	info?: string
	chips?: string[]
	definition?: string
	linked?: LinkedVar[]
}
