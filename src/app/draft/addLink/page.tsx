import Link from "next/link"

const addLink = () => {
  return (
    <>
      <div className="w-[390px]">
        <div className="py-[12px] px-[16px] border-b-2">
          <div className="flex justify-between h-[48px]">
            <div className="h-[24px] w-[24px]">
              <Link href="../draft">×</Link>
            </div>
            <div className="flex justify-end">
              <h1 className="h-[24px] w-[64px] font-bold text-[16px] hover:text-red-500">
                <Link href="../draft">追加する</Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="h-[67x] pt-[20px] border-b-2">
          <div className="h-[23px] px-[19px]">
            <div className="font-bold w-[48px] mb-1 text-[16px]">リンク</div>
          </div>
          <div className="h-[44px] border-t-2">
            <input
              className="h-[19px] w-full pl-4 mt-[13px] mb-3 text-[16px]"
              placeholder="https://www.youtube.com/xxx"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default addLink
