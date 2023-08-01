import { useEffect, useState } from "react"

const useFetch = (urlPath: string, config?: any) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}${urlPath}`
        const response = await fetch(url, config)
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

  return { data, isLoading, error }
}

export default useFetch
