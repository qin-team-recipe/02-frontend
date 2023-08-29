"use client"
import "swiper/swiper.min.css"

import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { ChefProps } from "../types"

const Card: FC<ChefProps> = ({ imageUrl, display_name, screen_name }) => (
  <Link href={`/chefs/${screen_name}`}>
    <div className="relative block overflow-hidden">
      <div
        className="relative h-full w-full"
        style={{ paddingTop: "148%" }}
      ></div>
      <Image
        src={imageUrl ? imageUrl : "/toppage/topchef1.jpg"}
        alt=""
        width={148}
        height={220}
        className="absolute left-0 top-0 h-full w-full rounded-3xl"
      />
      <h2 className="absolute bottom-2.5 left-0 w-full truncate text-center text-base text-white">
        {display_name}
      </h2>
    </div>
  </Link>
)

type SwiperComponentProps = {
  data: ChefProps[]
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
