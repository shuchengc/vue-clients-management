let casual = require('casual')

const roleMap = [
	{
		label: 'super admin',
		value: 1
	},
	{
		label: 'admin',
		value: 2
	},
	{
		label: 'operatorA',
		value: 3
	},
	{
		label: 'operatorB',
		value: 4
	}
]

const menus = [
	{
		id: '1',
		icon: 'table',
		path: '/table',
		name: 'table',
		title: 'Chart'
	},
	{
		id: '2',
		icon: 'dashboard',
		path: '/dashboard',
		name: 'dashboard',
		title: 'Dashboard',
		children: [
			{
				id: '21',
				icon: '',
				path: '/dashboard/analysis',
				name: 'analysis',
				title: 'Analyst'
			},
			{
				id: '22',
				icon: '',
				path: '/dashboard/monitor',
				name: 'monitor',
				title: 'Monitor'
			}
		]
	},
	{
		id: '3',
		icon: 'stock',
		path: '/d3',
		name: 'd3',
		title: 'D3',
		children: [
			{
				id: '31',
				icon: '',
				path: '/d3/bar',
				name: 'bar',
				title: 'bar'
			},
			{
				id: '32',
				icon: '',
				path: '/d3/line',
				name: 'line',
				title: 'line'
			}
		]
	},
	{
		id: '4',
		icon: 'stock',
		path: '/g2',
		name: 'g2',
		title: 'g2',
		children: [
			{
				id: '41',
				icon: '',
				path: '/g2/bar',
				name: 'bar',
				title: 'bar'
			},
			{
				id: '42',
				icon: '',
				path: '/g2/line',
				name: 'line',
				title: 'line'
			}
		]
	}
]

casual.define('user', function(role) {
	return {
		id: casual.card_number(),
		username: casual.username,
		contacts: casual.full_name,
		contactsEmail: casual.email,
		address: casual.address,
		roleId: role.value,
		status: casual.integer(0, 1),
		createTime: casual.unix_time,
		updateTime: casual.unix_time
	}
})

module.exports = () => {
	const data = {
		users: [],
		roles: roleMap,
		login: {
			status: 200,
			data: {
				token:
					'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMTU2MjA5MyIsImNyZWF0ZWQiOjE1NjE1MTY3NjU5MzMsImNvbXBhbnlOYW1lIjoiQee9kSIsInRlbmFudElkIjoxLCJ1c2VyVHlwZSI6InN0YWZmIiwiaWQiOjEsImV4cCI6MTU2MTUyMDM2NX0.j8sWbwXzHnSgvz7em2DjAhNDU5xaxysEFES8SlyJZnj0lVgXKax4tEDNGawZivW6Ip1734Rnvb6z2te8jGmIWQ"',
				menus: menus,
				user: casual.user(casual.random_element(roleMap))
			},
			message: 'success'
		},
		logout: {
			status: 200,
			message: 'success'
		}
	}

	for (let i = 0; i < 54; i++) {
		data.users.push(casual.user(casual.random_element(roleMap)))
	}

	return data
}
