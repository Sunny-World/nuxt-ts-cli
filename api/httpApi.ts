const baseUrl = `/api`
export default {
	user: {
		// 登录
		login: `${baseUrl}/txaccelerator/web/login`,
		// 登出
		logout: `${baseUrl}/user/logout`,
		// 获取用户信息
		getInfo: `${baseUrl}/txaccelerator/web/indexInfo`,
		// 获取菜单
		getMenu: `${baseUrl}/user/getMenu`,
	},
}
