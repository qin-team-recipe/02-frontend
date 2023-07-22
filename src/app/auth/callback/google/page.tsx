"use client"

import { NextPage } from "next"
import { useRouter, useSearchParams } from "next/navigation"
import { useContext, useEffect, useState } from "react"

import {
  GoogleUserContext,
  UserContext,
} from "@/app/components/AuthedCheckProvider"

const GoogleAuth: NextPage = () => {
  const router = useRouter()
  const pathname = useSearchParams()
  const { googleUser, setGoogleUser } = useContext(GoogleUserContext)
  const { user, setUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)

  const code = pathname.get("code")
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    if (code) {
      fetch(
        `${API_URL}/authenticates/google/userinfo?code=${encodeURIComponent(
          code
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          setGoogleUser(data.data)
          // この時点で何らかフラグを判定し、新規登録ページに遷移するか/self/loginにフェッチしてログインするかを判定する
          //  初回は以下の通りページ遷移する
          router.push("/register")
          // 初回ではない場合、ここで/self/loginにフェッチして情報を取得する。その後、setUserにセットする
          //  fetch(
          // `http://localhost:8083/api/v1//self/login `)
          // .then((response) => response.json())
          // .then((data) => {
          //   setUser(data.data)
          //   router.push("/")
          // })
          // .catch((error) => {
          //   console.error(error)
          // })

          setIsLoading(false)
        })
    } else {
      setIsLoading(false)
    }
  }, [code, router, setGoogleUser])

  console.log(googleUser)
  return <div>Loading...</div>
}

export default GoogleAuth
