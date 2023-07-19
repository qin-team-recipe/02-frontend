"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { createContext, FC, ReactNode, useEffect, useState } from "react"

import { PAGE_INFO } from "../pageInfo"

// 認証不要なページリスト(リダイレクトしないページ) GoogleAuthのページものぞく
const NOT_AUTHED_PAGE_LIST = [
  "/",
  "signinpage",
  "/draft",
  "/auth/callback/google",
]

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

  const [googleUser, setGoogleUser] = useState<GoogleUserType | undefined>({
    display_name: "",
    email: "",
    service_name: "",
    service_user_id: "",
  })
  const [user, setUser] = useState<UserType | undefined>({
    display_name: "",
    email: "",
    id: 0,
    screen_name: "",
  })

  const pathname = usePathname()

  useEffect(() => {
    const pageInfo = PAGE_INFO[pathname]
    if (pageInfo) {
      localStorage.setItem("redirectPageInfo", JSON.stringify(pageInfo))
    }
  }, [googleUser, user, pathname])

  // useEffect to handle redirection
  useEffect(() => {
    const checkUser = async () => {
      if (
        googleUser &&
        !googleUser.service_user_id &&
        !NOT_AUTHED_PAGE_LIST.includes(pathname)
      ) {
        router.push("signinpage")
      }
    }
    checkUser()
  }, [router, googleUser, user, pathname])

  const googleValue = { googleUser: { ...googleUser }, setGoogleUser }
  const userValue = { user: { ...user }, setUser }

  return (
    <UserContext.Provider value={userValue}>
      <GoogleUserContext.Provider value={googleValue}>
        {children}
      </GoogleUserContext.Provider>
    </UserContext.Provider>
  )
}

export { AuthedCheckProvider, GoogleUserContext, UserContext }
