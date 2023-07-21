"use client"

import { NextPage } from "next"
import { useRouter, useSearchParams } from "next/navigation"
import { useContext, useEffect } from "react"

import {
  GoogleUserContext,
  UserContext,
} from "@/app/components/AuthedCheckProvider"
import {
  getPathGoAfterLoginFromLocalStorage,
  setLoginUserToLocalStorage,
  setTokenToLocalStorage,
} from "@/app/utils/localStorage"

const getGoogleUserInfo = async (code: string) => {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/authenticates/google/userinfo?code=${encodeURIComponent(code)}`
  )
  const result = await response.json()
  if (result.message != "success") {
    return
  }
  return result.data
}

export const tryLogin = async (service_user_id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/login?service_user_id=${service_user_id}`
  )
  const result = await response.json()
  if (result.message != "success") {
    return
  }
  return result.data
}

const GoogleAuth: NextPage = () => {
  const router = useRouter()
  const pathname = useSearchParams()
  const { googleUser, setGoogleUser } = useContext(GoogleUserContext)
  const { user, setUser } = useContext(UserContext)

  const code = pathname.get("code")

  useEffect(() => {
    const checkUser = async () => {
      if (!code) {
        return
      }

      // Googleユーザ情報取得
      const googleUserInfo = await getGoogleUserInfo(code)
      if (!googleUserInfo?.service_user_id) {
        throw new Error("認証失敗")
      }
      setGoogleUser(googleUserInfo)

      // アプリログインを試す
      const loginResult = await tryLogin(googleUserInfo?.service_user_id)
      if (loginResult) {
        // ログイン成功
        console.log("try login already exists user")
        setTokenToLocalStorage(loginResult.token)
        setLoginUserToLocalStorage(loginResult.user)
        await setUser(loginResult.user)

        // 遷移しようとしたページへ遷移
        const goAfterLogin = await getPathGoAfterLoginFromLocalStorage()
        await router.push(goAfterLogin ?? "/")
      } else {
        // ログイン失敗（新規登録画面へ遷移）
        console.log("try login new comer")
        await router.push("/register")
      }
    }
    checkUser()
  }, [code, router, setGoogleUser, setUser])

  console.log(googleUser)
  return <div>Loading...</div>
}

export default GoogleAuth
