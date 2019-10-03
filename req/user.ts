// import $fn from '~/utils/http.js';
const $fn: any = {}
import httpApi from '~/api/httpApi'

// 登录
interface LoginData {
	username: string,
	password: string,
}
export const login = async (data: LoginData) => $fn.httpPost({
	url: httpApi.user.login,
	data,
})

// 登出
export const logout = () => $fn.httpPost({
	url: httpApi.user.logout,
})

// 获取用户信息
export const getUserInfo = async () => {
	return $fn.httpPost({
		url: httpApi.user.getInfo,
	})
}

// 获取用户信息
export const getMenu = async () => {
	return $fn.httpPost({
		url: httpApi.user.getMenu,
	})
}
