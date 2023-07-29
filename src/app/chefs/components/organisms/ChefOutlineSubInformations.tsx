"use client"
import CounterLabel from "@/app/recipes/commonComponents/molecules/CounterLabel"
import {
  getLoginUserFromLocalStorage,
  getTokenFromLocalStorage,
} from "@/app/utils/localStorage"

import { ChefOutlineType } from "../../[screenName]/type"
import ChefAddRecipeFab from "./ChefAddRecipeFab"
import ChefFollowButton from "./ChefFollowButton"
import ChefProfileEditButton from "./ChefProfileEditButton"

type ChefOutlineSubInformationsProps = {
  screenName: string
  chef?: ChefOutlineType
}

/**
 * シェフ概要サブ情報
 * @returns
 */
const ChefOutlineSubInformations = async (
  props: ChefOutlineSubInformationsProps
) => {
  const { screenName, chef } = props

  if (!chef) return <></>

  // ログインユーザとページのシェフが同じ場合はマイページ
  const loginUser = getLoginUserFromLocalStorage()
  const token = getTokenFromLocalStorage()
  const isMe = token && loginUser?.screenName == chef?.screen_name

  return (
    <>
      {/* シェフ */}
      <div className="flex flex-row items-center">
        {/* レシピ件数 */}
        <CounterLabel
          className="ml-1"
          count={chef.recipes_count}
          label="レシピ"
        />
        {/* フォロー件数 */}
        <CounterLabel
          className="ml-4"
          count={chef.follows_count}
          label="フォロー"
        />
      </div>

      {/* お気に入りボタン */}
      <div className="mt-2">
        {isMe ? (
          <ChefProfileEditButton className="w-full" />
        ) : (
          <ChefFollowButton className="w-full" chefId={chef.id} />
        )}
      </div>

      {/* マイレシピ追加 */}
      {isMe && <ChefAddRecipeFab />}
    </>
  )
}
export default ChefOutlineSubInformations
