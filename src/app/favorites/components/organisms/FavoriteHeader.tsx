"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IoMenuOutline, IoPersonCircleOutline } from "react-icons/io5"

import { getLoginUserFromLocalStorage } from "@/app/utils/localStorage"

type UserType = {
  display_name?: string
  email?: string
  id?: number
  screen_name?: string
}

/**
 * レシピ概要メニュー
 * @returns
 */
const FavoriteHeader = () => {
  const [loginUser, setLoginUser] = useState<UserType>()

  useEffect(() => {
    const getFavorite = async () => {
      const loginUser = await getLoginUserFromLocalStorage()
      setLoginUser(loginUser)
      console.log("loginUser=" + JSON.stringify(loginUser))
    }
    getFavorite()
  }, [])

  return (
    <>
      <div className="flex items-center justify-between border-b-2 px-2 py-3">
        <div className="flex-0.3 ">
          <Link href={`/settings`}>
            <IoMenuOutline className="text-xl" />
          </Link>
        </div>
        <div className="flex-0.3 text-xl font-bold">お気に入り</div>
        <div className="flex-0.3">
          {loginUser && (
            <Link href={`/users/${loginUser.screen_name}?type=user`}>
              <IoPersonCircleOutline className="text-2xl" />
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
export default FavoriteHeader
