"use client"

import { NextPage } from "next"
import Image from "next/image"
import React, { useEffect, useState } from "react"

import Container from "../components/Container"
import FooterMenu from "../components/FooterMenu"
import { SubHeader } from "../components/SubHeader"
type PageInfoType = {
  title: string
  image: string
}
const LOCALHOST_URL = process.env.NEXT_PUBLIC_LOCALHOST_URL

const handleClick = async () => {
  const response = await fetch(`${LOCALHOST_URL}/api/v1/authenticates/google`)

  if (!response.ok) {
    console.error("フェッチに失敗しました:", response.statusText)
    return
  }

  const data = await response.json()
  window.location.href = data.data.login_url
  console.log(data)
}

const Signin: NextPage = () => {
  const [pageInfo, setPageInfo] = useState<PageInfoType | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const storedPageInfo = localStorage.getItem("redirectPageInfo")
    if (storedPageInfo) {
      setPageInfo(JSON.parse(storedPageInfo))
    }
  }, [])

  return (
    <>
      <Container>
        {pageInfo && (
          <div>
            <div className="mb-3 flex items-center justify-between md:justify-center">
              <div className="md:hidden">
                {/* ハンバーガーメニュー */}
                <button
                  className="mr-2 inline-flex items-center justify-center p-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    // バツアイコン
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    // ハンバーガーメニュー
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex items-center justify-center">
                <SubHeader title={pageInfo.title} />
              </div>
              <div className="md:hidden">
                {/* 空のdivを配置して左右バランスを取る */}
              </div>
            </div>
            <div className="-mx-[16px] border-b-2"></div>
            <div className="mb-5 flex items-center justify-center">
              <Image
                src={pageInfo.image}
                width={200}
                height={200}
                alt={pageInfo.title}
              />
            </div>
          </div>
        )}
        <div className="text-center font-semibold">ログインをお願いします</div>
        <div className="mt-3 text-center text-[14px]">
          こちらの機能を利用するにはログインが必要です
        </div>
        <div className="mt-5 flex items-center justify-center gap-6">
          <button
            className="inline-flex items-center rounded-md bg-blue-500 px-3 py-2"
            onClick={handleClick}
          >
            <Image
              src="/signin/tabler-icon-brand-google.png"
              alt="Googleボタン"
              width={16}
              height={16}
            />
            <span className="ml-1 text-[14px] text-white">Googleログイン</span>
          </button>
          <button className="inline-flex items-center rounded-md bg-custom-purple px-3 py-2">
            <Image
              src="/signin/tabler-icon-brand-apple.png"
              alt="Appleボタン"
              width={16}
              height={16}
            />
            <span className="ml-1 text-[14px] text-white">Appleログイン</span>
          </button>
        </div>
        <div className="w-[476px]: -mx-[16px] overflow-auto border-l-2 border-r-2">
          <FooterMenu />
        </div>
      </Container>
    </>
  )
}

export default Signin
