import { useCallback, useState } from "react"

import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from "../utils/localStorage"

const usePost = (
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  urlPath: string,
  params?: any,
  headers?: any
) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const [isAuthError, setIAuthError] = useState<boolean>(false)
  const doPost = useCallback(async () => {
    const token = getTokenFromLocalStorage()

    const postHeaders = {
      ...headers,
      "Content-Type": "application/json",
      Authorization: token,
    }
    try {
      setLoading(true)
      const url = `${process.env.NEXT_PUBLIC_API_URL}${urlPath}`
      const response = await fetch(url, {
        method: method,
        headers: postHeaders,
        body: params,
      })
      if (response.status == 401) {
        removeTokenFromLocalStorage()
        setIAuthError(true)
        throw new Error("authorization error")
      }
      if (!response.ok) {
        throw new Error(`fetch failed status=${response.status}`)
      }
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [headers, method, params, urlPath])

  return {
    doPost,
    isLoading,
    error,
    isAuthError,
  }
}
export default usePost
