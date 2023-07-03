"use client"
import { useRouter } from "next/navigation"

const PageBackButton = () => {
  const router = useRouter()

  return (
    <>
      <button
        className="rounded bg-blue-400 px-2 py-1 text-white hover:bg-blue-500"
        onClick={() => router.back()}
      >
        戻る
      </button>
    </>
  )
}
export default PageBackButton
