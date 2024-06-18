import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
	history: createWebHistory(),
	routes
})

export default router
