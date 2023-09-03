"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { createContext, FC, ReactNode, useEffect, useState } from "react"

import { PAGE_INFO } from "../pageInfo"
import {
  getTokenFromLocalStorage,
  localStorage,
  setPathGoAfterLoginToLocalStorage,
} from "../utils/localStorage"

// 認証不要なページリスト(リダイレクトしないページ) GoogleAuthのページものぞく
const NOT_AUTHED_PAGE_LIST = [
  "/",
  "/signinpage",
  "/draft",
  "/auth/callback/google",
  "/register",
  "/logout",
  "/recipes",
  "/chefs",
]
const checkAuthPage = (pathname: string) => {
  if (pathname == "/") return pathname
  const hit = NOT_AUTHED_PAGE_LIST.find((page) => {
    if (page != "/") {
      return pathname.indexOf(page) >= 0
    }
  })
  return hit
}

type PropsType = {
  children: ReactNode
}

type GoogleUserType = {
  display_name?: string
  email?: string
  service_name?: string
  service_user_id?: string
}

type GoogleUserContextType = {
  googleUser: GoogleUserType | undefined
  setGoogleUser: React.Dispatch<
    React.SetStateAction<GoogleUserType | undefined>
  >
}

const GoogleUserContext = createContext<GoogleUserContextType>({
  googleUser: {
    display_name: "",
    email: "",
    service_name: "",
    service_user_id: "",
  },
  setGoogleUser: () => {},
})

type UserType = {
  display_name?: string
  email?: string
  id?: number
  screen_name?: string
}

type UserContextType = {
  user: UserType | undefined
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
}

const UserContext = createContext<UserContextType>({
  user: {
    display_name: "",
    email: "",
    id: 0,
    screen_name: "",
  },
  setUser: () => {},
})

const AuthedCheckProvider: FC<PropsType> = (props) => {
  const { children } = props
  const router = useRouter()

  // Googleユーザ情報
  const [googleUser, setGoogleUser] = useState<GoogleUserType | undefined>()
  const googleValue = { googleUser: { ...googleUser }, setGoogleUser }

  // アプリユーザ情報
  const [user, setUser] = useState<UserType | undefined>()
  const userValue = { user: { ...user }, setUser }

  const pathname = usePathname()
  const token = getTokenFromLocalStorage()

  useEffect(() => {
    const pageInfo = PAGE_INFO[pathname]
    if (pageInfo) {
      localStorage.setItem("redirectPageInfo", JSON.stringify(pageInfo))
    }
  }, [googleUser, user, pathname])

  // useEffect to handle redirection
  useEffect(() => {
    const checkUser = () => {
      // サインイン不要は対象外
      if (checkAuthPage(pathname)) {
        return
      }

      // トークンを確認
      if (!token) {
        console.log("Auth Check no token...")

        // 開こうとしたページパスを保持しながらログインページへ遷移
        setPathGoAfterLoginToLocalStorage(pathname)
        router.push("/signinpage")
        return
      }
      console.log("Auth Check has token!")
    }
    checkUser()
  }, [router, googleUser, user, pathname, token])

  if (checkAuthPage(pathname)) {
    return (
      <UserContext.Provider value={userValue}>
        <GoogleUserContext.Provider value={googleValue}>
          {children}
        </GoogleUserContext.Provider>
      </UserContext.Provider>
    )
  }

  return (
    <UserContext.Provider value={userValue}>
      <GoogleUserContext.Provider value={googleValue}>
        {token && children}
      </GoogleUserContext.Provider>
    </UserContext.Provider>
  )
}

export { AuthedCheckProvider, GoogleUserContext, UserContext }
