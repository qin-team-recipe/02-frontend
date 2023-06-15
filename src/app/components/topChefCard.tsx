"use client"
import "swiper/swiper.min.css"

import { FC } from "react"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

type CardProps = {
  image: string
  title: string
}

const Card: FC<CardProps> = ({ image, title }) => (
  <div className=" relative overflow-hidden">
    <div style={{ paddingTop: "148%" }}></div>
    <img
      src={image}
      alt=""
      className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
    />
    <h2 className="absolute bottom-2.5 left-0 w-full text-white text-base truncate text-center">
      {title}
    </h2>
  </div>
)

type SwiperComponentProps = {
  data: CardProps[]
}

const TopChefCard: FC<SwiperComponentProps> = ({ data }) => {
  return (
    <div className="topChefSwiperComponent">
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
