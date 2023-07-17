import AvatorButton from "@/app/recipes/commonComponents/molecules/AvatorButton"
import CounterLabel from "@/app/recipes/commonComponents/molecules/CounterLabel"
import Modal from "@/app/recipes/commonComponents/organisms/Modal"
import PageBackButton from "@/app/recipes/commonComponents/organisms/PageBackButton"

import LinkIcons, {
  LinkType,
} from "../../../recipes/commonComponents/organisms/LinkIcons"
import { dummyChefDataList, dummyLinkDataList } from "../../[screenName]/mock"
import { ChefOutlineType } from "../../[screenName]/type"
import ChefAddRecipeFab from "./ChefAddRecipeFab"
import ChefFollowButton from "./ChefFollowButton"
import ChefOutlineSkeletons from "./ChefOutlineSkeletons"
import ChefProfileEditButton from "./ChefProfileEditButton"

const getChefData = async (
  screenName: string
): Promise<ChefOutlineType | undefined> => {
  console.log(
    new Date().toLocaleString() + " シェフデータ取得 screenName=" + screenName
  )

  // const response = await fetch(
  //   `http://localhost:8080/api/v1/chefs/${screenName}`,
  //   {
  //     cache: "no-store",
  //   }
  // )
  // const data = await response.json()
  // console.log("シェフデータ取得結果 data=" + JSON.stringify(data))
  // return data

  // 疑似遅延
  const _sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await _sleep(1000)

  console.log(new Date().toLocaleString() + " シェフデータ取得完了")

  // ダミーデータ
  const dummy = dummyChefDataList.find((item) => item.screenName === screenName)
  return dummy?.outline
}

const getChefLinkData = async (
  screenName: string
): Promise<LinkType[] | undefined> => {
  // const response = await fetch(
  //   `http://localhost:8080/api/v1/chefs/${screenName}`,
  //   {
  //     cache: "no-store",
  //   }
  // )
  // const data = await response.json()
  // console.log("シェフデータ取得結果 data=" + JSON.stringify(data))
  // return data

  // 疑似遅延
  const _sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await _sleep(1000)

  // ダミーデータ
  const dummy = dummyLinkDataList.find((item) => item.screenName === screenName)
  return dummy?.links
}

type ChefOutlinesProps = {
  screenName: string
  loginUserId?: number
}

/**
 * シェフ概要
 * @returns
 */
const ChefOutlines = async (props: ChefOutlinesProps) => {
  const { screenName, loginUserId } = props
  const chef = await getChefData(screenName)
  const links = await getChefLinkData(screenName)
  const isMe = await (loginUserId == chef?.userId)

  if (!chef) {
    return (
      <>
        <ChefOutlineSkeletons />
        <div className="w-full">
          <Modal isOpen={true}>
            <>
              <div className="m-2 flex flex-col items-center justify-center">
                <div className="m-2 text-xl">レシピがありません</div>
                <div className="mt-2">
                  <PageBackButton>
                    <div className="rounded bg-blue-400 px-2 py-1 text-white hover:bg-blue-500">
                      戻る
                    </div>
                  </PageBackButton>
                </div>
              </div>
            </>
          </Modal>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="right-2 mt-2 flex justify-end">
        {/* リンク */}
        {links && <LinkIcons links={links} />}
      </div>
      <div className="pl-4 pr-4">
        <div className="mb-2 flex flex-row">
          {/* シェフタイトル */}
          <div className="flex items-center text-2xl font-bold">
            {chef.title}
          </div>
          <div className="ml-auto">
            {/* アバター */}
            <AvatorButton src={chef.imageUrl} />
          </div>
        </div>

        {/* シェフ説明 */}
        <div className="mb-4 h-full">{chef.description}</div>

        {/* シェフ */}
        <div className="flex flex-row items-center">
          {/* レシピ件数 */}
          <CounterLabel
            className="ml-1"
            count={chef.recipeCount}
            label="レシピ"
          />
          {/* フォロー件数 */}
          <CounterLabel
            className="ml-4"
            count={chef.followerCount}
            label="フォロー"
          />
        </div>

        {/* お気に入りボタン */}
        <div className="mt-2">
          {isMe ? (
            <ChefProfileEditButton className="w-full" />
          ) : (
            <ChefFollowButton
              className="w-full"
              isMyFavorite={chef.isMyFavorite}
            />
          )}
        </div>
      </div>
      {/* マイレシピ追加 */}
      {isMe && <ChefAddRecipeFab />}
    </>
  )
}
export default ChefOutlines
