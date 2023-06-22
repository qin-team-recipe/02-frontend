"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [chefData, setChefData] = useState(["item1", "item2", "item3", "item4"]) // 取得したシェフデータのdummy data
  const [recipesData, setRecipesData] = useState([
    "item1",
    "item2",
    "item3",
    "item4",
  ]) // 取得したレシピデータのdummy data
  const [filteredData, setFilteredData] = useState<string[]>([]) //検索後のデータ。親階層はサーバーサイドでstate管理不可なのでグローバルステート管理が必要？

  // useEffectの代替案を検討中
  useEffect(() => {
    const filteredChefs = chefData.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const filteredRecipes = recipesData.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredData([...filteredChefs, ...filteredRecipes])
  }, [searchTerm, chefData, recipesData])

  return (
    <div className=" py-2 ">
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
