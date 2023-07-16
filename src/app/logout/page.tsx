import Link from "next/link"

const logout = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-screen w-[390px] border-x-2 pb-16">
          <div className="border-b-2 px-3 py-[12px]">
            <div className="flex h-[48px]">
              <div className="h-[24px] w-[24px] px-4 py-3">
                <Link href="../settings">←</Link>
              </div>
              <div className="ml-[21px] h-[24px] py-3 text-[16px] font-bold">
                <Link href="../settings">ログアウト</Link>
              </div>
            </div>
          </div>
          <div className="h-[390x]"></div>
        </div>
      </div>
    </>
  )
}
export default logout
