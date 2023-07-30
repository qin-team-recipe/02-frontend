type FetchOptions = {
  url: string
  cache?: "no-cache" | "reload" | "force-cache" | "only-if-cached" | "no-store"
  contentType?: string
  next?: object
  body?: any
}

export const fetchPostData = async ({
  url,
  next,
  contentType = "application/json",
  body,
}: FetchOptions) => {
  if (!body) {
    throw new Error("Body must be provided for POST request")
  }
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const options: any = {
    method: "POST",
    headers: {
      "Content-Type": contentType,
    },
    body: JSON.stringify(body),
  }
  if (next) {
    options.next = next
  }

  const response = await fetch(`${API_URL}${url}`, options)

  if (!response.ok) {
    console.error("Fetch failed:", response.statusText)
    throw new Error("Fetch failed")
  }
  return await response.json()
}

export const fetchGetData = async ({ url, cache, next }: FetchOptions) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const options: any = {
    method: "GET",
  }
  if (cache) {
    options.cache = cache
  }

  if (next) {
    options.next = next
  }

  const response = await fetch(`${API_URL}${url}`, options)

  if (!response.ok) {
    console.error("Fetch failed:", response.statusText)
    throw new Error("Fetch failed")
  }
  return await response.json()
}
