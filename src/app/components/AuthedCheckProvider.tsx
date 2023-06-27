"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { FC, ReactNode, useEffect } from "react"
import React from "react"

// 認証不要なページリスト(リダイレクトしないページ)
const NOT_AUTHED_PAGE_LIST = ["/", "/auth/signin", "/draft", "/favorites"]

type PropsType = {
  children: ReactNode
}

type UserType = {
  id: number
  name: string
  image: string
}

type UserContextType = {
  user: UserType
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
}

const UserContext = React.createContext<UserContextType | undefined>(undefined)

const AuthedCheckProvider: FC<PropsType> = (props) => {
  const { children } = props
  const router = useRouter()

  const [user, setUser] = React.useState<UserType | undefined>({
    id: 0,
    name: "",
    image: "",
  })
  const pathname = usePathname()

  useEffect(() => {
    // useridが０の場合（初期値）はログインしていないと判断しリダイレクト
    if (!user?.id && !NOT_AUTHED_PAGE_LIST.includes(pathname)) {
      router.push("/auth/signin")
    }
  }, [router, user, pathname])

  return (
    <>
      {user && (
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      )}
    </>
  )
}

// signinページでログインしたらuser情報をセットする関数
export function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
export default AuthedCheckProvider
