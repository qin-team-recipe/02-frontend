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
