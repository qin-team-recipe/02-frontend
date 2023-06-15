"use client"
import "swiper/swiper.min.css"

import Image from "next/image"
import { FC } from "react"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { ChefCardProps } from "./../types"
const Card: FC<ChefCardProps> = ({ image, title }) => (
  <div className=" relative overflow-hidden">
    <div
      className="relative w-full h-full"
      style={{ paddingTop: "148%" }}
    ></div>
    <Image
      src={image}
      alt=""
      width={148}
      height={220}
      className="absolute top-0 left-0 w-full h-full rounded-3xl"
    />
    <h2 className="absolute bottom-2.5 left-0 w-full text-white text-base truncate text-center">
      {title}
    </h2>
  </div>
)

type SwiperComponentProps = {
  data: ChefCardProps[]
}

const TopChefCard: FC<SwiperComponentProps> = ({ data }) => {
  return (
    <div className="topPageSwiperComponent topPageChefComponent">
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

export default TopChefCard
