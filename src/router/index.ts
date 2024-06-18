import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/products',
		name: 'products',
		component: () => import('../views/Products.vue')
	},
	{
		path: '/services',
		name: 'services',
		component: () => import('../views/Services.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/About.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory('/'),
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash
			}
		}
	},
	routes
})

export default router
