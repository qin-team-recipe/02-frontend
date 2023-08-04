"use client"

import "swiper/swiper.min.css"

import { usePathname } from "next/navigation"
import { ReactElement, useEffect, useState } from "react"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import SearchBar from "@/app/components/SearchBar"

SwiperCore.use([Navigation])

export type TabComponent = {
  title: string
  contents: ReactElement
}

export type TabsProps = {
  tabComponents: TabComponent[]
  activeIndex?: number
}

/**
 * タブ
 * @returns
 */
const Tabs = (props: TabsProps) => {
  const { tabComponents, activeIndex } = props
  const [tabIndex, setTabIndex] = useState(activeIndex ? activeIndex : 0)
  const [swiper, setSwiper] = useState<SwiperCore | null>()
  const pathname = usePathname()
  // タイトルの選択
  const title = tabIndex === 0 ? "レシピ一覧" : "シェフ一覧"

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(tabIndex)
    }
  }, [swiper, tabIndex])

  const handleTabClick = (i: number) => {
    setTabIndex(i)
  }

  const handleSlideChange = (swiper: any) => {
    setTabIndex(swiper.activeIndex)
  }

  return (
    <>
      {/* 検索ボックスはsearchページだけで使用 */}
      {pathname == "/search" && <SearchBar tabIndex={tabIndex} />}
      {/* タイトルはsearchページだけで使用 */}
      {pathname == "/search" && <h2 className="text-xl font-bold">{title}</h2>}
      {/* ヘッダー */}
      <ul className="mt-2 flex border-b border-gray-200 text-center text-sm font-medium">
        {tabComponents.map((item, i) => {
          return (
            <li key={i} className="w-full">
              <TabButton
                title={item.title}
                isActive={i === tabIndex}
                onClick={() => handleTabClick(i)}
              />
            </li>
          )
        })}
      </ul>
      {/* コンテンツ */}
      <Swiper
        onSwiper={(swiper) => {
          setSwiper(swiper)
        }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        initialSlide={tabIndex}
      >
        {tabComponents.map((item, i) => (
          <SwiperSlide key={i}>{item.contents}</SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Tabs

/**
 *
 * @param param0 タブボタン
 * @returns
 */
const TabButton = ({
  title,
  isActive,
  onClick,
}: {
  title: string
  isActive: boolean
  onClick: () => void
}) => {
  const titleClass =
    "w-full inline-block text-black-300 text-base bg-white-500 p-2 border-b-2 hover:text-black-600 "
  const TitleSelectedClass = " font-bold border-gray-600 active"

  return (
    <button
      onClick={() => onClick()}
      className={titleClass + (isActive ? TitleSelectedClass : "")}
    >
      {title}
    </button>
  )
}
