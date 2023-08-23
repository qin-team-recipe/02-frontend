"use client"
import "swiper/swiper.min.css"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC, useCallback } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { RecipeCardProps } from "../types"

const Card: FC<RecipeCardProps> = (props) => {
  const { title, description, chef, favorites_count, watch_id } = props
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(`/recipes/${watch_id}`)
  }, [router, watch_id])

  return (
    <button onClick={handleClick}>
      <div className="relative">
        <div
          className="relative h-full w-full"
          style={{ paddingTop: "100%" }}
        ></div>
        <Image
          // 画像がない場合はPublicのtopchef1.jpgを表示とする予定でが、ひとまずは仮置き
          src={"/toppage/topRecipe1.jpg"}
          alt=""
          width={160}
          height={160}
          className="absolute left-0 top-0 h-full w-full rounded-3xl"
        />
        <div className="absolute right-2 top-2 flex items-center space-x-1 rounded-2xl bg-[rgba(4,0,19,0.483)] p-1 text-white">
          <Image src="/toppage/good.png" alt="" width={14} height={14} />
          <p className="text-[14px] leading-[17px]">{favorites_count}</p>
        </div>
      </div>
      <h2 className="mt-2 line-clamp-2 text-sm leading-6">{title}</h2>
      <p className="mt-1 line-clamp-1 text-xs leading-4">{description}</p>
    </button>
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
