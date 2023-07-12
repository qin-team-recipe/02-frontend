"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react"

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

type UserType = {
  display_name?: string
  email?: string
  service_name?: string
  service_user_id?: string
}

type UserContextType = {
  user: UserType | undefined
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
}

const UserContext = createContext<UserContextType>({
  user: {
    display_name: "",
    email: "",
    service_name: "",
    service_user_id: "",
  },
  setUser: () => {},
})

const AuthedCheckProvider: FC<PropsType> = (props) => {
  const { children } = props
  const router = useRouter()

  const [user, setUser] = useState<UserType | undefined>({
    display_name: "",
    email: "",
    service_name: "",
    service_user_id: "",
  })
  const pathname = usePathname()

  useEffect(() => {
    const pageInfo = PAGE_INFO[pathname]
    if (pageInfo) {
      localStorage.setItem("redirectPageInfo", JSON.stringify(pageInfo))
    }
  }, [user, pathname])

  // useEffect to handle redirection
  useEffect(() => {
    const checkUser = async () => {
      if (
        user &&
        !user.display_name &&
        !NOT_AUTHED_PAGE_LIST.includes(pathname)
      ) {
        router.push("signinpage")
      }
    }
    checkUser()
  }, [router, user, pathname])

  console.log(user?.display_name)
  const value = { user: { ...user }, setUser }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { AuthedCheckProvider, UserContext }
