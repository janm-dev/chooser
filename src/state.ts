import { reactive } from "vue"

export type Theme = "light" | "dark"
export type ResFont =
	| "M Plus Rounded"
	| "Zen Kaku Gothic Antique"
	| "Noto Sans"
	| "Press Start 2P"

const state = reactive({
	theme: (window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light") as Theme,
	resFont: "M Plus Rounded" as ResFont,
})

window.matchMedia("(prefers-color-scheme: dark)").onchange = (ev) => {
	console.debug("Theme changed")
	state.theme = ev.matches ? "dark" : "light"
}

export default state
