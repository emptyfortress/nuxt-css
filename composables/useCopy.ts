import { Notify } from 'quasar'

const copy = ref(false)
const text = ref()

const coping = () => {
	copy.value = true
	navigator.clipboard.writeText(text.value.innerText)
	setTimeout(() => {
		Notify.create({
			message: 'Скопировано',
			icon: 'mdi-check',
			color: 'primary',
		})
		copy.value = false
	}, 1300)
}

export const useCopy = () => {
	return { copy, coping }
}
