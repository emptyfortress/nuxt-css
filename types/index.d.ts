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
	label: string
	var: string
	val: string
	folder?: string
	subfolder?: string
	textColor?: string
	param?: string
	info?: string
	chips?: string[]
	definition?: string
	linked?: LinkedVar[]
	border?: boolean
}
