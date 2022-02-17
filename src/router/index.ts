import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/HomeView.vue"),
		},
		{
			path: "/cards/:amount(\\d+)",
			name: "cards",
			component: () => import("../views/CardsView.vue"),
			props: true,
		},
		{
			path: "/dice/:dn(.+)",
			name: "dice",
			component: () => import("../views/DiceView.vue"),
			props: true,
		},
		{
			path: "/:slug*",
			redirect: { name: "home" },
		},
	],
})

export default router
