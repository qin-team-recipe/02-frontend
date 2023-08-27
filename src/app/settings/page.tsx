"use client"

import {
  faArrowRightFromBracket,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"

import FooterMenu from "../components/FooterMenu"
import { DeleteModal } from "./components/DeleteModal"

const settings = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }
  const goBack = () => {
    window.history.back()
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="h-screen w-[480px] border-x-2 pb-16">
          <div className="border-b-2 px-3 py-[12px]">
            <div className="flex h-[48px]">
              <div className="h-[24px] w-[24px] px-4 py-3">
                <button onClick={goBack}>←</button>
              </div>
              <div className="ml-[21px] h-[24px] w-[48px] py-3 text-[16px] font-bold">
                <Link href="../favorites">設定</Link>
              </div>
            </div>
          </div>
          <div className="px-4 pt-5">
            <div className="pb-3 font-bold">利用規約や問い合わせ</div>
            <div className="flex justify-between">
              <div className="py-4 pt-3 text-[16px]">
                <Link href="../terms">利用規約</Link>
              </div>
              <div className="mr-3 h-6 w-6 py-4">
                <Link href="">＞</Link>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="py-4 pt-3 text-[16px]">
                <Link href="">プライバシーポリシー</Link>
              </div>
              <div className="mr-3 h-6 w-6 py-4">
                <Link href="">＞</Link>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="py-4 pt-3 text-[16px]">
                <Link href="">運営会社</Link>
              </div>
              <div className="mr-3 h-6 w-6 py-4">
                <Link href="">↗︎</Link>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="py-4 pt-3 text-[16px]">
                <Link href="">お問い合わせ</Link>
              </div>
              <div className="mr-3 h-6 w-6 py-4">
                <Link href="">↗︎</Link>
              </div>
            </div>
          </div>
          <div className="px-4 pb-3 pt-5 font-bold">アカウントの操作</div>
          <div className="flex justify-between">
            <div className="px-4 py-3">
              <Link href="../logout">ログアウト</Link>
            </div>
            <div className="mr-7 h-6 w-6 pt-4">
              <Link href="../logout">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </Link>
            </div>
          </div>
          <div className="px-4 pb-3 pt-5 font-bold">取り消しができない操作</div>
          <div className="flex justify-between">
            <div className="px-4 py-3">
              <button onClick={handleModalOpen}>退会する</button>
              {isModalOpen && <DeleteModal onClose={handleModalClose} />}
            </div>
            <div className="mr-7 h-6 w-6 pt-4">
              <FontAwesomeIcon icon={faCircleExclamation} />
            </div>
          </div>
          <FooterMenu />
        </div>
      </div>
    </>
  )
}
export default settings
