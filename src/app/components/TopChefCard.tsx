"use client"
import "swiper/swiper.min.css"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"
import { useRecoilValue } from "recoil"

import { searchChefState } from "@/app/store/searchListState"

import { ChefsData } from "../types"

const Card: FC<ChefsData> = (props) => {
  const { imageUrl, display_name, screen_name, description, recipes_count } =
    props

  return (
    <Link href={`/chefs/${screen_name}`}>
      <div className="flex space-x-4">
        <div className="relative  min-w-88" style={{ width: "88px" }}>
          <div style={{ paddingTop: "131.8%" }}></div>
          <Image
            src={imageUrl ? imageUrl : "/toppage/topchef1.jpg"}
            alt=""
            width={88}
            height={116}
            className="absolute left-0 top-0 h-full w-full rounded-3xl object-cover"
          />
        </div>
        <div>
          <p className="text-lg font-bold leading-5">{display_name}</p>
          <p className="mt-1 line-clamp-3 min-h-59 text-base leading-5">
            {description}
          </p>
          <div className="mt-1 flex items-center space-x-1.5">
            <Image
              src="/toppage/tabler-icon-tools-kitchen-2.png"
              alt=""
              width={16}
              height={16}
            />
            <p className="text-base leading-5"> レシピ</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

type ChefComponentProps = {
  data: ChefsData[]
}

const TopChefCard: FC<ChefComponentProps> = ({ data }) => {
  const pathname = usePathname()
  const searchChefLists = useRecoilValue(searchChefState)
  console.log(searchChefLists)

  return (
    // 検索ページで検索結果を保持している場合は、そのリストを表示する。
    <div className="">
      {pathname === "/search" && searchChefLists.length > 0
        ? searchChefLists.map((item, index) => (
            <div key={index} className="mt-5">
              <Card {...item} />
            </div>
          ))
        : data.map((item, index) => (
            <div key={index} className="mt-5">
              <Card {...item} />
            </div>
          ))}
    </div>
  )
}

export default TopChefCard
