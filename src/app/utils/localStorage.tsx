"use client"

const _localStorage = {
  setItem: (key: string, value: string) => {
    if (typeof window === "undefined") {
      return
    }
    localStorage.setItem(key, value)
  },
  getItem: (key: string) => {
    if (typeof window === "undefined") {
      return null
    }
    return localStorage.getItem(key)
  },
  removeItem: (key: string) => {
    if (typeof window === "undefined") {
      return
    }
    localStorage.removeItem(key)
  },
}

export { _localStorage as localStorage }

/**
 * 認証トークン
 * @param token
 */
export const setTokenToLocalStorage = (token: string) => {
  _localStorage.setItem("token", token)
}
export const getTokenFromLocalStorage = () => {
  return _localStorage.getItem("token")
}

export const removeTokenFromLocalStorage = () => {
  _localStorage.removeItem("token")
}

/**
 * ログインユーザ
 * @param user
 */
export const setLoginUserToLocalStorage = (user: Object) => {
  // デバッグ用にデシリアライズ
  _localStorage.setItem("user", JSON.stringify(user))
}
export const getLoginUserFromLocalStorage = () => {
  const userJSONChar = _localStorage.getItem("user")
  if (!userJSONChar) return
  return JSON.parse(userJSONChar)
}
export const removeLoginUserToLocalStorage = () => {
  _localStorage.removeItem("user")
}

/**
 * ログイン後の遷移先ページパス
 * @param path
 */
export const setPathGoAfterLoginToLocalStorage = (path: string) => {
  _localStorage.setItem("pathGoAfterLogin", path)
}
export const getPathGoAfterLoginFromLocalStorage = () => {
  return _localStorage.getItem("pathGoAfterLogin")
}
export const removePathGoAfterLoginFromLocalStorage = () => {
  return _localStorage.removeItem("pathGoAfterLogin")
}
