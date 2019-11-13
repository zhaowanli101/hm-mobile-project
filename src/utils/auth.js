// 设置token  目的：将来实现刷新token，需要存储的信息。关闭浏览器后再次打开，需要保持登录状态。
// auth 认证  操作的是用户信息(token 令牌 认证信息)
// 之前用户信息存储位置是：sessionStorage   关闭浏览器登录失效
// 永久保存用户信息，根据refresh_token来延长有效期. 使用  localStorage

// 导出三个操作
const USER_KEY = 'hm-mobile'

// 获取用户信息
export const getUser = () => {
  // 返回的数据是json对象
  return JSON.parse(window.localStorage.getItem(USER_KEY) || '{}')
}
// 设置用户信息 user是对象
export const setUser = (user) => {
  //   设置时是json字符串格式
  window.localStorage.setItem(USER_KEY, JSON.stringify(user))
}
// 删除用户信息
export const delUser = () => {
  window.localStorage.removeItem(USER_KEY)
}
