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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/chefs/${screenName}`,
      {
        next: { revalidate: 10 },
      }
    )

    const result = await response.json()
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
      <div className="right-2 mt-2 flex justify-end">
        {/* リンク */}
        {chef?.chef_links && <LinkIcons links={chef?.chef_links ?? []} />}
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
        <ChefOutlineSubInformations screenName={screenName} chef={chef} />
      </div>
    </>
  )
}
export default ChefOutlines
