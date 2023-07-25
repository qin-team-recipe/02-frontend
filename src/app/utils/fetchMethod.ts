import { getTokenFromLocalStorage } from "./localStorage"

type FetchOptions = {
  url: string
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  body?: any
}

export const fetchData = async ({ url, method, body }: FetchOptions) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const options: any = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  const response = await fetch(`${API_URL}${url}`, options)

  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error("Error: " + response.status)
  }
}

export const fetchAuthData = async ({ url, method, body }: FetchOptions) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const token = getTokenFromLocalStorage() // get token here
  const options: any = {
    method,
    headers: {
      "Content-Type": "application/json",
      // Bearerが必要かは要確認
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  const response = await fetch(`${API_URL}${url}`, options)

  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error("Error: " + response.status)
  }
}
