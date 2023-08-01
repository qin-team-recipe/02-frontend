"use client"
import { useRouter } from "next/navigation"
import { IoAdd } from "react-icons/io5"

import useFetchWithAuth from "@/app/hooks/useFetchWithAuth"
import { SubHeader } from "@/app/recipes/commonComponents/molecules/SubHeader"

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
  const { data, isLoading, error, isAuthError } = useFetchWithAuth(`/me`)
  const router = useRouter()

  if (isLoading) {
    return <>Loading...</>
  }
  if (isAuthError) {
    router.push("/favorites")
  }
  let me: MeType | undefined
  if (data) {
    me = data
  }

  const handleOnChange = () => {}
  const handleSelectImage = () => {
    alert("画像選択")
  }
  const handleSave = () => {
    alert("保存")
  }
  const handleCancel = () => {
    //router.push(`/users/${screenName}`)
    alert("キャンセル")
  }

  return (
    <>
      <div className="mt-4 p-1">
        <SubHeader title="ニックネーム" />
      </div>
      <input
        type="text"
        maxLength={32}
        className="w-full rounded-none border-0  border-gray-300 p-3  focus:outline-none"
        placeholder="ニックネームを入力してください"
        value={me?.display_name}
        onChange={handleOnChange}
      />

      <div className="mt-4 p-1">
        <SubHeader title="プロフィール画像（任意）" />
        <button onClick={handleSelectImage}>
          <div className="m-2 flex h-28 w-28 flex-col items-center justify-center rounded border-gray-600 bg-white text-gray-300">
            画像を設定
            <IoAdd />
          </div>
        </button>
      </div>

      <div className="mt-4 p-1">
        <SubHeader title="自己紹介（任意）" />
      </div>
      <textarea
        rows={4}
        maxLength={1024}
        className="w-full rounded-none border-0  border-gray-300 p-3  focus:outline-none"
        placeholder="自己紹介を入力してください"
      />

      <div className="mt-4 p-1">
        <SubHeader title="リンク（任意）" />
      </div>
      <input
        type="text"
        maxLength={32}
        className="w-full rounded-none border-0  border-gray-300 p-3  focus:outline-none"
        placeholder="リンクを入力してください"
      />
      <button className="ml-2 text-sm text-red-500">＋リンクを追加する</button>

      <div className="mt-4 flex w-full flex-row items-center justify-center">
        <button
          className="m-2 w-full rounded border border-red-500 bg-red-500 p-1 text-center text-sm text-white "
          onClick={handleSave}
        >
          保存する
        </button>
        <button
          className="m-2 w-full rounded border border-red-500 bg-white p-1 text-center text-sm text-red-500"
          onClick={handleCancel}
        >
          キャンセル
        </button>
      </div>
    </>
  )
}
export default UserProfileForms
