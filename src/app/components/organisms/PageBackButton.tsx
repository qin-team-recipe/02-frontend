"use client"
import { useRouter } from "next/navigation"
import { ReactElement } from "react"
import { IoArrowBack } from "react-icons/io5"

type PageBackButtonProps = {
  children?: ReactElement
}

const PageBackButton = (props: PageBackButtonProps) => {
  const { children } = props
  const router = useRouter()

  let buttonElement: ReactElement = (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 bg-opacity-20 text-2xl hover:bg-gray-200">
      <IoArrowBack />
    </div>
  )
  if (children) {
    buttonElement = children
  }

  return (
    <>
      <button onClick={() => router.back()}>{buttonElement}</button>
    </>
  )
}
export default PageBackButton
