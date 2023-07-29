"use client"
import { getTokenFromLocalStorage } from "./localStorage"

type FetchOptions = {
  url: string
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  cache?: "no-cache" | "reload" | "force-cache" | "only-if-cached" | "no-store"
  contentType?: string
  next?: object
  body?: any
}

export const fetchData = async ({
  url,
  method,
  cache,
  next,
  contentType = "application/json",
  body,
}: FetchOptions) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const options: any = {
    method: method,
    headers: {
      "Content-Type": contentType,
    },
    cache: cache,
    next: next,
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

export const fetchAuthData = async ({
  url,
  method,
  cache,
  next,
  contentType = "application/json",
  body,
}: FetchOptions) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const token = getTokenFromLocalStorage() // get token here
  const options: any = {
    method: method,
    headers: {
      "Content-Type": contentType,
      // Bearerが必要かは要確認
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    cache: cache,
    next: next,
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
