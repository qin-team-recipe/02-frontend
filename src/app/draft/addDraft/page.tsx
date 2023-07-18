import Link from "next/link"

const addDraft = () => {
  return (
    <>
      <div className="min-h-screen w-[480px] border-x-2 pb-16">
        <div className="border-b-2 px-[16px] py-[12px]">
          <div className="flex h-[48px]">
            <div className="h-[24px] w-[24px] px-4 py-3">
              <Link href="../draft">←</Link>
            </div>
            <div className="ml-[21px] h-[24px] w-[48px] py-3 text-[16px] font-bold">
              <Link href="../draft">下書き</Link>
            </div>
          </div>
        </div>
        <div className="min-h-[390x]">
          <div className="h-[49px] border-b-2">
            <div className="my-2 px-4">
              <h1 className="text-[14px]">グラタン</h1>
              <h1 className="py-1 text-[10px]">作成日時:2023年4月22日</h1>
            </div>
          </div>
          <div className="h-[49px] border-b-2">
            <div className="my-2 px-4">
              <h1 className="text-[14px]">レシピ名未記載</h1>
              <h1 className="py-1 text-[10px]">作成日時:2023年4月12日</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default addDraft
