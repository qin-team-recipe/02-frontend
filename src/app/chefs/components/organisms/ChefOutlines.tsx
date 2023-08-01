import AvatorButton from "@/app/recipes/commonComponents/molecules/AvatorButton"
import LinkIcons from "@/app/recipes/commonComponents/organisms/LinkIcons"
import Modal from "@/app/recipes/commonComponents/organisms/Modal"
import PageBackButton from "@/app/recipes/commonComponents/organisms/PageBackButton"

import { ChefOutlineType } from "../../[screenName]/type"
import ChefOutlineSkeletons from "./ChefOutlineSkeletons"
import ChefOutlineSubInformations from "./ChefOutlineSubInformations"

const getChefData = async (
  screenName: string
): Promise<ChefOutlineType | undefined> => {
  console.log(
    new Date().toLocaleString() + " シェフデータ取得 screenName=" + screenName
  )

  try {
    // シェフを検索
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/chefs/${screenName}`,
      {
        next: { revalidate: 10 },
      }
    )
    const result = await response.json()

    if (!result.data) return

    console.log("シェフデータ取得結果 data=" + JSON.stringify(result))
    // TODO 一部ダミーを設定
    const dummyData = {
      ...result.data,
      imageUrl: "/takada-images/chefs/chef1.jpg",
    }
    return dummyData
  } catch (error) {
    console.error(error)
    return
  }
}

const getUserData = async (
  screenName: string
): Promise<ChefOutlineType | undefined> => {
  console.log(
    new Date().toLocaleString() + " ユーザデータ取得 screenName=" + screenName
  )

  // TODO ダミーを設定
  const dummyData: ChefOutlineType = {
    id: 1,
    screen_name: screenName,
    display_name: "岡本太郎",
    description:
      "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
    chef_links: [],
    is_following: false,
    follows_count: 768,
    recipes_count: 123,
    imageUrl: "/takada-images/chefs/chef2.jpg",
  }

  return dummyData
}

type ChefOutlinesProps = {
  screenName: string
  type?: string
}

/**
 * シェフ概要
 * @returns
 */
const ChefOutlines = async (props: ChefOutlinesProps) => {
  const { screenName, type } = props
  // TODO 暫定
  let chef = undefined
  if (type == "user") {
    chef = await getUserData(screenName)
  } else {
    chef = await getChefData(screenName)
  }

  if (!chef) {
    return (
      <>
        <ChefOutlineSkeletons />
        <div className="w-full">
          <Modal isOpen={true}>
            <>
              <div className="m-2 flex flex-col items-center justify-center">
                <div className="m-2 text-xl">シェフが存在しません</div>
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
      <div className="right-2 mt-2 flex h-8 justify-end">
        {/* リンク */}
        <LinkIcons links={chef.chef_links ?? []} />
      </div>
      <div className="pl-4 pr-4">
        <div className="mb-2 flex flex-row">
          {/* シェフタイトル */}
          <div className="flex items-center text-2xl font-bold">
            {chef.display_name}
          </div>
          <div className="ml-auto">
            {/* アバター */}
            <AvatorButton src={chef.imageUrl} />
          </div>
        </div>

        {/* シェフ説明 */}
        <div className="mb-4 h-full">{chef.description}</div>

        {/* シェフサブ情報 */}
        <ChefOutlineSubInformations chef={chef} />
      </div>
    </>
  )
}
export default ChefOutlines
