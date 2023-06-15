"use client"
import "swiper/swiper.min.css"

import Image from "next/image"
import { FC } from "react"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { RecipeCardProps } from "./../types"

const Card: FC<RecipeCardProps> = (props) => {
  const { image, title, text, chef, good, comment, createdAt, updatedAt } =
    props
  console.log(image)
  return (
    <div>
      <div className="relative">
        <div
          className="relative w-full h-full"
          style={{ paddingTop: "100%" }}
        ></div>
        <Image
          src={image}
          alt=""
          width={160}
          height={160}
          className="absolute top-0 left-0 w-full h-full rounded-3xl"
        />
        <div className="absolute top-2 right-2 flex items-center space-x-1 bg-[rgba(4,0,19,0.483)] text-white p-1 rounded-2xl">
          <Image src="/toppage/good.png" alt="" width={14} height={14} />
          <p className="text-[14px] leading-[17px]">{good}</p>
        </div>
      </div>
      <h2 className="mt-2 text-sm leading-6 line-clamp-2">{title}</h2>
      <p className="mt-1 text-xs leading-4 line-clamp-1">{text}</p>
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
