import { reactive } from "vue"

export default reactive({
	theme: "dark" as "light" | "dark",
	dieFont: "M Plus Rounded" as
		| "M Plus Rounded"
		| "Zen Kaku Gothic Antique"
		| "Noto Sans"
		| "Press Start 2P",
})
