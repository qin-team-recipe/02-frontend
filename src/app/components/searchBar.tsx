"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [data, setData] = useState(["item1", "item2", "item3", "item4"]) // dummy data
  const [filteredData, setFilteredData] = useState<string[]>([])

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm, data])

  return (
    <div className=" py-3">
      <div className="flex items-center border rounded-3xl  text-grey-darker py-2 px-4 bg-custom-gray">
        <Image
          src="/searchIcon.png"
          alt="検索アイコン"
          width={20}
          height={20}
          className=""
        />
        <input
          className="ml-2 bg-transparent outline-none placeholder-gray-500"
          placeholder="シェフやレシピを検索"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchBar
