"use client"

import { useDebouncedValue } from "@mantine/hooks"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { FC, useEffect, useState } from "react"
import { HiX } from "react-icons/hi"

import { fetchGetData } from "../utils/fetchMethod"
import PageBackButton from "./organisms/PageBackButton"

type SearchResult = {
  any: any // 検索結果はレシピ型かシェフ型のいずれか
}
type SearchBarProps = {
  tabIndex?: number
  query?: string
  setQuery?: (query: string) => void
}

const SearchBar: FC<SearchBarProps> = ({
  tabIndex,
  query: propQuery,
  setQuery: propSetQuery,
}) => {
  // トップページ用の状態管理
  const [localQuery, setLocalQuery] = useState<string>("")
  // 以下の２文、でトップページと検索ページの状態管理を切り替える
  const query = propQuery ?? localQuery
  const setQuery = propSetQuery ?? setLocalQuery

  const [loading, setLoading] = useState<boolean>(false)
  const [results, setResults] = useState<SearchResult[]>([])
  const [debounced] = useDebouncedValue(query, 1500, { leading: true })
  const router = useRouter()
  const pathname = usePathname()
  console.log("query=" + query)

  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true)
      try {
        const data = await fetchGetData({
          url: "/chefs",
        })
        setResults(data.data.lists)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    if (debounced) {
      handleSearch()
    }
  }, [debounced])
  const handleClearQuery = () => {
    setQuery("")
  }

  const handleBack = () => {
    router.push("/") // トップページに戻る
  }

  return (
    <div className="relative py-2">
      <div className=" flex">
        {query && pathname !== "/" && (
          <button onClick={handleBack} className="mr-2">
            <PageBackButton />
          </button>
        )}
        <div className="text-grey-darker flex w-full items-center rounded-3xl  border bg-custom-gray px-4 py-2">
          <Image
            src="/searchIcon.png"
            alt="検索アイコン"
            width={20}
            height={20}
            className=""
          />
          {pathname == "/search" && (
            <input
              className="ml-2 bg-transparent placeholder-gray-500 outline-none"
              placeholder={tabIndex === 0 ? "レシピを検索" : "シェフを検索"}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          )}
          {pathname !== "/search" && (
            <input
              className="ml-2 bg-transparent placeholder-gray-500 outline-none"
              placeholder="シェフやレシピを検索"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          )}
          {query && loading === false && (
            <button
              onClick={handleClearQuery}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <HiX />
            </button>
          )}
          {loading && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <div className="loader h-5 w-5 rounded-full border-4 border-t-4 border-gray-200 ease-linear"></div>
            </div>
          )}
        </div>
        <style jsx>{`
          .loader {
            border-left-color: #3498db;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default SearchBar
