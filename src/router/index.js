import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/new',
		name: 'new',
		component: () => import('../views/New.vue')
	},
	{
		path: '/task/:id',
		name: 'task',
		component: () => import('../views/Task.vue'),
		props: true
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
})

export default router