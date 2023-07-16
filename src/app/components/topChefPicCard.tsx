"use client"
import "swiper/swiper.min.css"

import Image from "next/image"
import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { ChefCardProps } from "../types"
const Card: FC<ChefCardProps> = ({ image, title }) => (
  <div className=" relative overflow-hidden">
    <div
      className="relative h-full w-full"
      style={{ paddingTop: "148%" }}
    ></div>
    <Image
      src={image}
      alt=""
      width={148}
      height={220}
      className="absolute left-0 top-0 h-full w-full rounded-3xl"
    />
    <h2 className="absolute bottom-2.5 left-0 w-full truncate text-center text-base text-white">
      {title}
    </h2>
  </div>
)

type SwiperComponentProps = {
  data: ChefCardProps[]
}

const TopChefPicCard: FC<SwiperComponentProps> = ({ data }) => {
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

export default TopChefPicCard
