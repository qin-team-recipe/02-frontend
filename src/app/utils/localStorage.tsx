"use client"

/**
 * 認証トークン
 * @param token
 */
export const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", token)
}
export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token")
}

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token")
}

/**
 * ログインユーザ
 * @param user
 */
export const setLoginUserToLocalStorage = (user: Object) => {
  // デバッグ用にデシリアライズ
  localStorage.setItem("user", JSON.stringify(user))
}
export const getLoginUserFromLocalStorage = () => {
  const userJSONChar = localStorage.getItem("user")
  if (!userJSONChar) return
  return JSON.parse(userJSONChar)
}
export const removeLoginUserToLocalStorage = () => {
  localStorage.removeItem("user")
}

/**
 * ログイン後の遷移先ページパス
 * @param path
 */
export const setPathGoAfterLoginToLocalStorage = (path: string) => {
  localStorage.setItem("pathGoAfterLogin", path)
}
export const getPathGoAfterLoginFromLocalStorage = () => {
  return localStorage.getItem("pathGoAfterLogin")
}
export const removePathGoAfterLoginFromLocalStorage = () => {
  return localStorage.removeItem("pathGoAfterLogin")
}
