"use client"
import { useRouter } from "next/navigation"

import {
  removeLoginUserToLocalStorage,
  removePathGoAfterLoginFromLocalStorage,
  removeTokenFromLocalStorage,
} from "@/app/utils/localStorage"

const Logout = () => {
  const router = useRouter()

  const handleLogout = () => {
    console.log("remove token")
    removeTokenFromLocalStorage()
    removeLoginUserToLocalStorage()
    removePathGoAfterLoginFromLocalStorage()
    router.push("/")
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="h-screen w-[480px] border-x-2 pb-16">
          <div className="border-b-2 px-3 py-[12px]">
            <div className="flex h-[48px]">
              <div className="h-[24px] w-[24px] px-4 py-3">
                <button onClick={handleLogout}>←</button>
              </div>
              <div className="ml-[21px] h-[24px] py-3 text-[16px] font-bold">
                <button onClick={handleLogout}>ログアウト</button>
              </div>
            </div>
          </div>
          <div className="h-[390x]"></div>
        </div>
      </div>
    </>
  )
}
export default Logout
