"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import useFetchWithAuth from "@/app/hooks/useFetchWithAuth"
import ModalButton from "@/app/recipes/commonComponents/molecules/ModalButton"
import PrimaryButton from "@/app/recipes/commonComponents/molecules/PrimaryButton"
import SecondaryButton from "@/app/recipes/commonComponents/molecules/SecondaryButton"
import { SubHeader } from "@/app/recipes/commonComponents/molecules/SubHeader"
import Modal from "@/app/recipes/commonComponents/organisms/Modal"

import UserImageUploader from "./UserProfileImageUploader"
import UserProfileLinkList, { LinkInputType } from "./UserProfileLinkList"

type MeType = {
  display_name: string
  email: string
  id: number
  screen_name: string
}

type UserProfileFormsProps = {
  screenName: string
}

const UserProfileForms = (props: UserProfileFormsProps) => {
  const { screenName } = props

  const [displayName, setDisplayName] = useState("")
  const [hasUrlFormatError, setHasUrlFormatError] = useState(true)
  const [isOpenSaveConfirm, setIsOpenSaveConfirm] = useState(false)
  const [isOpenSaveCompleteInformation, setIsOpenSaveCompleteInformation] =
    useState(false)
  const [isOpenCancelConfirm, setIsOpenCancelConfirm] = useState(false)

  let me: MeType | undefined
  const { data, isLoading, error, isAuthError } = useFetchWithAuth(`/me`)

  const router = useRouter()
  if (data) {
    me = data
  }

  useEffect(() => {
    if (me?.display_name) {
      setDisplayName(me.display_name)
    }
  }, [me])

  console.log("redraw")

  if (isLoading) {
    return <>Loading...</>
  }
  if (isAuthError) {
    router.push("/favorites")
  }

  const handleOnChangeName = (name: string) => {
    console.log()
    setDisplayName(name)
  }
  const handleSelectImage = (imageFile: File) => {
    //alert("画像選択")
  }

  const handleLinkChange = (links: LinkInputType[]) => {
    //alert("リンク変更")
    const hasError = links.some((l) => l.error)
    setHasUrlFormatError(hasError)
  }

  const handleSave = () => {
    setIsOpenSaveConfirm(true)
  }
  const handleSaveOK = () => {
    setIsOpenSaveConfirm(false)
    setIsOpenSaveCompleteInformation(true)
  }
  const handleSaveCancel = () => {
    setIsOpenSaveConfirm(false)
  }
  const handleCloseInfomation = () => {
    setIsOpenSaveCompleteInformation(false)
    router.push(`/users/${screenName}`)
  }

  const handleCancel = () => {
    setIsOpenCancelConfirm(true)
  }
  const handleCancelOK = () => {
    setIsOpenCancelConfirm(false)
    router.push(`/users/${screenName}`)
  }
  const handleCancelCancel = () => {
    setIsOpenCancelConfirm(false)
  }
  return (
    <>
      <div className="mt-4 p-1">
        <SubHeader title="ニックネーム" />
      </div>
      <input
        type="text"
        maxLength={128}
        className={
          displayName == ""
            ? "w-full rounded-none border-b border-l-0 border-r-0 border-t border-gray-300 bg-red-100 p-3 focus:outline-none"
            : "w-full rounded-none border-b border-l-0 border-r-0 border-t border-gray-300 bg-white p-3 focus:outline-none"
        }
        placeholder="ニックネームを入力してください"
        value={displayName}
        onChange={(e) => handleOnChangeName(e.target.value)}
      />

      <div className="mt-4 p-1">
        <SubHeader title="プロフィール画像（任意）" />
        <UserImageUploader onImageChange={handleSelectImage} imageSize={80} />
      </div>

      <div className="mt-4 p-1">
        <SubHeader title="自己紹介（任意）" />
      </div>
      <textarea
        rows={4}
        maxLength={1024}
        className="w-full rounded-none border-b border-l-0 border-r-0 border-t border-gray-300 p-3  focus:outline-none"
        placeholder="自己紹介を入力してください"
      />

      <div className="mt-4 p-1">
        <SubHeader title="リンク（任意）" />
      </div>
      <UserProfileLinkList onLinkChange={handleLinkChange} />

      <div className="mt-4 flex w-full flex-row items-center justify-center">
        <div className="m-1 w-full">
          <PrimaryButton
            title="保存する"
            onClick={handleSave}
            disabled={displayName == "" || hasUrlFormatError}
          />
        </div>
        <div className="m-1 w-full">
          <SecondaryButton title="キャンセル" onClick={handleCancel} />
        </div>
      </div>

      <Modal
        isOpen={
          isOpenSaveConfirm ||
          isOpenSaveCompleteInformation ||
          isOpenCancelConfirm
        }
      >
        <div className="m-2 flex flex-col items-center justify-center">
          {isOpenSaveConfirm && (
            <>
              <div className="m-2 text-xl">
                編集内容を保存します。よろしいですか？
              </div>
              <div className="mt-2 flex flex-row">
                <ModalButton title="はい" onClick={handleSaveOK} />
                <div className="m-1"></div>
                <ModalButton title="いいえ" onClick={handleSaveCancel} />
              </div>
            </>
          )}
          {isOpenSaveCompleteInformation && (
            <>
              <div className="m-2 text-xl">編集内容を保存を保存しました</div>
              <div className="mt-2 flex flex-row">
                <ModalButton title="OK" onClick={handleCloseInfomation} />
              </div>
            </>
          )}
          {isOpenCancelConfirm && (
            <>
              <div className="m-2 text-xl">
                編集内容が破棄されます。よろしいですか？
              </div>
              <div className="mt-2 flex flex-row">
                <ModalButton title="はい" onClick={handleCancelOK} />
                <div className="m-1"></div>
                <ModalButton title="いいえ" onClick={handleCancelCancel} />
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  )
}
export default UserProfileForms
