"use client"
import "swiper/swiper.min.css"

import Image from "next/image"
import { FC } from "react"

import { ChefCardProps } from "../types"

const Card: FC<ChefCardProps> = (props) => {
  const { image, firstName, lastName, recommend, recipeCount } = props

  return (
    <div className="flex space-x-4">
      <div className="relative  min-w-88" style={{ width: "88px" }}>
        <div style={{ paddingTop: "131.8%" }}></div>
        <Image
          src={image}
          alt=""
          width={88}
          height={116}
          className="absolute left-0 top-0 h-full w-full rounded-3xl object-cover"
        />
      </div>
      <div>
        <p className="text-lg font-bold leading-5">
          {firstName}
          {lastName}
        </p>
        <p className="mt-1 line-clamp-3 min-h-59 text-base leading-5">
          {recommend}
        </p>
        <div className="mt-1 flex items-center space-x-1.5">
          <Image
            src="/toppage/tabler-icon-tools-kitchen-2.png"
            alt=""
            width={16}
            height={16}
          />
          <p className="text-base leading-5">{recipeCount} レシピ</p>
        </div>
      </div>
    </div>
  )
}

type ChefComponentProps = {
  data: ChefCardProps[]
}

const TopChefCard: FC<ChefComponentProps> = ({ data }) => {
  return (
    <div className="">
      {data.map((item, index) => (
        <div key={index} className="mt-5">
          <Card {...item} />
        </div>
      ))}
    </div>
  )
}

export default TopChefCard
