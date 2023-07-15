"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useContext, useEffect, useState } from "react"

import { UserContext } from "@/app/components/AuthedCheckProvider"

const GoogleAuth = () => {
  const router = useRouter()
  const pathname = useSearchParams()
  const { user, setUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)

  const code = pathname.get("code")
  console.log(code)

  useEffect(() => {
    if (code) {
      fetch(
        `http://localhost:8083/api/v1/authenticates/google/userinfo?code=${encodeURIComponent(
          code
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          setUser(data.data)
          router.push("/")
          setIsLoading(false)
        })
    } else {
      setIsLoading(false)
    }
  }, [code, router, setUser])

  console.log(user)
  return <div>Loading...</div>
}

export default GoogleAuth
