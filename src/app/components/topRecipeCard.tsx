"use client"
import "swiper/swiper.min.css"

import Image from "next/image"
import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { RecipeCardProps } from "../types"

const Card: FC<RecipeCardProps> = (props) => {
  const { image, title, text, chef, good, comment, createdAt, updatedAt } =
    props

  return (
    <div>
      <div className="relative">
        <div
          className="relative h-full w-full"
          style={{ paddingTop: "100%" }}
        ></div>
        <Image
          src={image}
          alt=""
          width={160}
          height={160}
          className="absolute left-0 top-0 h-full w-full rounded-3xl"
        />
        <div className="absolute right-2 top-2 flex items-center space-x-1 rounded-2xl bg-[rgba(4,0,19,0.483)] p-1 text-white">
          <Image src="/toppage/good.png" alt="" width={14} height={14} />
          <p className="text-[14px] leading-[17px]">{good}</p>
        </div>
      </div>
      <h2 className="mt-2 line-clamp-2 text-sm leading-6">{title}</h2>
      <p className="mt-1 line-clamp-1 text-xs leading-4">{text}</p>
    </div>
  )
}

type SwiperComponentProps = {
  data: RecipeCardProps[]
}

const TopRecipeCard: FC<SwiperComponentProps> = ({ data }) => {
  return (
    <div className="topPageSwiperComponent topPageRecipeComponent">
      <Swiper spaceBetween={16} slidesPerView={"auto"} className="px-4 ">
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Card {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TopRecipeCard
