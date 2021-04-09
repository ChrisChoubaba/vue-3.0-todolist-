import { createRouter, createWebHistory } from 'vue-router'
// import common from '../assets/js/common.js'
// import Mgr from '../services/SecurityService.js'
// createApp.use(Router)
const routes = [
	{
		path: '/',
		component: () => import('../components/me.vue')
	},
	{
		path: '/me',
		component: () => import('../components/me.vue')
	}
]
const router = createRouter({
	routes: routes,
	history: createWebHistory()
})

export default router
