import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

export const version =
	import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA?.toString()
		?.trim()
		?.substring(0, 8) ||
	import.meta.env.MODE ||
	"other"

console.debug(version)

const app = createApp(App)

app.use(router)

app.mount("#app")
