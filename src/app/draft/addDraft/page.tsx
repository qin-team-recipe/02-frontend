import Link from "next/link"

const addDraft = () => {
  return (
    <>
      <div className="w-[390px]">
        <div className="py-[12px] px-[16px] border-b-2">
          <div className="flex h-[48px]">
            <div className="h-[24px] w-[24px] px-4 py-3">
              <Link href="../draft">←</Link>
            </div>
            <div className="h-[24px] w-[48px] ml-[21px] py-3 font-bold text-[16px]">
              <Link href="../draft">下書き</Link>
            </div>
          </div>
        </div>
        <div className="h-[390x]">
          <div className="h-[49px] border-b-2">
            <div className="my-2 px-4">
              <h1 className="text-[14px]">グラタン</h1>
              <h1 className="text-[10px] py-1">作成日時:2023年4月22日</h1>
            </div>
          </div>
          <div className="h-[49px] border-b-2">
            <div className="my-2 px-4">
              <h1 className="text-[14px]">レシピ名未記載</h1>
              <h1 className="text-[10px] py-1">作成日時:2023年4月12日</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default addDraft
