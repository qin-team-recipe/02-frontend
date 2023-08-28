"use client"


import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import FooterMenu from "../components/FooterMenu"
import { getTokenFromLocalStorage } from "../utils/localStorage"

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
  const token = getTokenFromLocalStorage()

  return (
    <>
      <div className="flex justify-center">
        <div className="h-screen w-[480px]  pb-16">
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
            <div className="relative">
              <Link href="../terms">
                <div className="py-4 pt-3 text-[16px]">利用規約</div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Image
                    src="/settings/innerLink.png"
                    alt="内部リンク"
                    width={24}
                    height={24}
                    className=""
                  />
                </div>
              </Link>
            </div>
            <div className="relative">
              <Link href="/">
                <div className="py-4 pt-3 text-[16px]">
                  プライバシーポリシー
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Image
                    src="/settings/innerLink.png"
                    alt="内部リンク"
                    width={24}
                    height={24}
                    className=""
                  />
                </div>
              </Link>
            </div>
            <div className="relative">
              <Link href="https://github.com/qin-team-recipe/02-frontend">
                <div className="py-4 pt-3 text-[16px]">運営会社</div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Image
                    src="/settings/outerLink.png"
                    alt="外部リンク"
                    width={24}
                    height={24}
                    className=""
                  />
                </div>
              </Link>
            </div>
            <div className="relative">
              <Link href="https://github.com/qin-team-recipe/02-frontend">
                <div className="py-4 pt-3 text-[16px]">お問い合わせ</div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Image
                    src="/settings/outerLink.png"
                    alt="外部リンク"
                    width={24}
                    height={24}
                    className=""
                  />
                </div>
              </Link>
            </div>
            {/* ！！！！以下２つのコンポーネントはログイン時のみ表示させる。 */}
            {token && (
              <>
                <div className=" pb-3 pt-5   font-bold">アカウントの操作</div>
                <div className="relative">
                  <Link href="/">
                    <div className="py-4 pt-3 text-[16px]">ログアウト</div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <Image
                        src="/settings/logout.png"
                        alt="ログアウト"
                        width={24}
                        height={24}
                        className=""
                      />
                    </div>
                  </Link>
                </div>
                <div className=" pb-3 pt-5 font-bold">
                  取り消しができない操作
                </div>
                <div className="relative">
                  <Link href="/">
                    <div className="py-4 pt-3 text-[16px]">退会する</div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <Image
                        src="/settings/alert-circle.png"
                        alt="退会する"
                        width={24}
                        height={24}
                        className=""
                      />
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>
          <FooterMenu />
        </div>
      </div>
    </>
  )
}
export default settings
