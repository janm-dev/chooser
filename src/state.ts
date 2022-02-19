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
	isSmall: window.matchMedia("(max-width: 1200px)").matches,
})

window.matchMedia("(prefers-color-scheme: dark)").onchange = (ev) => {
	state.theme = ev.matches ? "dark" : "light"
}

window.matchMedia("(max-width: 1200px)").onchange = (ev) => {
	state.isSmall = ev.matches
}

export default state
