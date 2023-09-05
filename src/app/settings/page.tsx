"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

import Modal from "@/app/recipes/commonComponents/organisms/Modal"

import FooterMenu from "../components/FooterMenu"
import ModalButton from "../recipes/commonComponents/molecules/ModalButton"
import {
  getTokenFromLocalStorage,
  removeLoginUserToLocalStorage,
  removePathGoAfterLoginFromLocalStorage,
  removeTokenFromLocalStorage,
} from "../utils/localStorage"

const Settings = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const [isLogoutComplete, setIsLogoutComplete] = useState(false)
  const [isWidhdrawalModalOpen, setIsWidhdrawalModalOpen] = useState(false)
  const [isWidhdrawalComplete, setIsWidhdrawalComplete] = useState(false)
  const router = useRouter()

  const handleModalOpen = (type: string) => {
    switch (type) {
      case "logout":
        setIsLogoutModalOpen(true)
        break
      case "withdrawal":
        setIsWidhdrawalModalOpen(true)
        break
      default:
        throw new Error("Invalid type")
    }
  }

  const handleModalClose = () => {
    setIsLogoutModalOpen(false)
    setIsWidhdrawalModalOpen(false)
  }

  const goBack = () => {
    window.history.back()
  }
  const handleLogout = () => {
    removeTokenFromLocalStorage()
    removeLoginUserToLocalStorage()
    removePathGoAfterLoginFromLocalStorage()
    setIsLogoutModalOpen(false)
    setIsLogoutComplete(true)
  }

  // 共通化はまだできていないので、一旦こちらでフェッチメソッドを作成
  const fetchDeleteData = async ({ url }: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const options: any = {
      method: "DELETE",
      headers: { Authorization: token },
    }

    const response = await fetch(`${API_URL}${url}`, options)

    if (!response.ok) {
      console.error("Fetch failed:", response.statusText)
      throw new Error("Fetch failed")
    }
    return await response.json()
  }

  const handleWidhdrawal = () => {
    // ここでローカルストレージの後始末後に退会処理を行う
    removeTokenFromLocalStorage()
    removeLoginUserToLocalStorage()
    removePathGoAfterLoginFromLocalStorage()
    fetchDeleteData({
      url: "/me",
    })
    setIsWidhdrawalModalOpen(false)
    setIsWidhdrawalComplete(true)
  }

  const handleConfirmComplete = () => {
    router.push("/")
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
                  <button
                    onClick={() => {
                      handleModalOpen("logout")
                    }}
                    className="w-full text-left"
                  >
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
                  </button>
                </div>
                <div className=" pb-3 pt-5 font-bold">
                  取り消しができない操作
                </div>
                <div className="relative">
                  <button
                    onClick={() => {
                      handleModalOpen("withdrawal")
                    }}
                    className="w-full text-left"
                  >
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
                  </button>
                </div>
              </>
            )}
          </div>
          <FooterMenu />
        </div>
      </div>
      {/*  ログアウト用の処理 */}
      <Modal
        isOpen={isLogoutModalOpen || isLogoutComplete}
        onClose={handleModalClose}
      >
        <div className="m-2 flex flex-col items-center justify-center">
          {isLogoutModalOpen && (
            <>
              <div className="m-2 text-xl">ログアウトしますか？</div>
              <div className="mt-2 flex flex-row">
                <ModalButton title="はい" onClick={handleLogout} />
                <div className="m-1"></div>
                <ModalButton title="いいえ" onClick={handleModalClose} />
              </div>
            </>
          )}
          {isLogoutComplete && (
            <>
              <div className="m-2 text-xl">ログアウトが完了しました</div>
              <div className="mt-2 flex flex-row">
                <ModalButton title="OK" onClick={handleConfirmComplete} />
              </div>
            </>
          )}
        </div>
      </Modal>
      {/*  退会用の処理 */}
      <Modal
        isOpen={isWidhdrawalModalOpen || isWidhdrawalComplete}
        onClose={handleModalClose}
      >
        <div className="m-2 flex flex-col items-center justify-center">
          {isWidhdrawalModalOpen && (
            <>
              <div className="m-2 text-xl">本当に退会しますか？</div>
              <div className="mt-2 flex flex-row">
                <ModalButton title="はい" onClick={handleWidhdrawal} />
                <div className="m-1"></div>
                <ModalButton title="いいえ" onClick={handleModalClose} />
              </div>
            </>
          )}
          {isWidhdrawalComplete && (
            <>
              <div className="m-2 text-xl">退会が完了しました</div>
              <div className="mt-2 flex flex-row">
                <ModalButton title="OK" onClick={handleConfirmComplete} />
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  )
}
export default Settings
