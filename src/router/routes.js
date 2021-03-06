import { AppLayout, ViewLayout } from '@/components/Layout'

const otherRoutes = [
	{
		path: '/login',
		name: 'login',
		component: () =>
			import(/* webpackChunkName: "login" */ '@/views/auth/login')
	},
	{
		path: '/error',
		name: 'error',
		redirect: '404',
		component: ViewLayout,
		children: [
			{
				path: '404',
				name: '404',
				component: () =>
					import(/* webpackChunkName: "404" */ '@/views/error/404')
			}
		]
	}
]

export const appRoutes = [
	{
		path: '/',
		name: 'index',
		redirect: '/dashboard/analysis',
		component: AppLayout,
		children: [
			{
				path: 'table',
				name: 'table',
				meta: {
					title: 'Chart',
					icon: 'table'
				},
				component: () =>
					import(/* webpackChunkName: "table" */ '@/views/table/table')
			},
			{
				path: 'dashboard',
				name: 'dashboard',
				meta: {
					title: 'Dashboard',
					icon: 'dashboard'
				},
				component: ViewLayout,
				children: [
					{
						path: 'analysis',
						name: 'dashboard_analysis',
						meta: {
							title: 'Analyst'
						},
						component: () =>
							import(
								/* webpackChunkName: "analysis" */ '@/views/dashboard/analysis'
							)
					},
					{
						path: 'monitor',
						name: 'dashboard_monitor',
						meta: {
							title: 'Monitor'
						},
						component: () =>
							import(
								/* webpackChunkName: "monitor" */ '@/views/dashboard/monitor'
							)
					}
				]
			},
			{
				path: 'd3',
				name: 'd3',
				meta: {
					title: 'D3',
					icon: 'stock'
				},
				component: ViewLayout,
				children: [
					{
						path: 'bar',
						name: 'd3_bar',
						meta: {
							title: 'bar'
						},
						component: () =>
							import(/* webpackChunkName: "tutorials" */ '@/views/d3/bar')
					},
					{
						path: 'line',
						name: 'd3_line',
						meta: {
							title: 'line'
						},
						component: () =>
							import(/* webpackChunkName: "tutorials" */ '@/views/d3/line')
					}
				]
			},
			{
				path: 'g2',
				name: 'g2',
				meta: {
					title: 'g2',
					icon: 'stock'
				},
				component: ViewLayout,
				children: [
					{
						path: 'bar',
						name: 'g2_bar',
						meta: {
							title: 'bar'
						},
						component: () =>
							import(/* webpackChunkName: "tutorials" */ '@/views/g2/bar')
					},
					{
						path: 'line',
						name: 'g2_line',
						meta: {
							title: 'line'
						},
						component: () =>
							import(/* webpackChunkName: "tutorials" */ '@/views/g2/line')
					}
				]
			}
		]
	}
]

const routes = [...otherRoutes, ...appRoutes]

export default routes
