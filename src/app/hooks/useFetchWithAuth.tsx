"use client"
import { useEffect, useState } from "react"

import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from "@/app/utils/localStorage"

const useFetchWithAuth = (urlPath: string, config?: any) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error>()
  const [isAuthError, setIsAuthError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      let authConfig = { ...config }
      const token = getTokenFromLocalStorage()
      if (token) {
        authConfig = {
          ...authConfig,
          headers: {
            Authorization: token,
          },
        }
      }
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}${urlPath}`
        const response = await fetch(url, authConfig)
        if (response.status == 401) {
          removeTokenFromLocalStorage()
          setIsAuthError(true)
          throw new Error("authorization error")
        }
        if (!response.ok) {
          throw new Error(`fetch failed status=${response.status}`)
        }
        const data = await response.json()
        if (data.message != "success") {
          throw new Error(data.message)
        }
        setData(data.data)
      } catch (error: any) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [config, urlPath])

  return { data, isLoading, error, isAuthError }
}

export default useFetchWithAuth
