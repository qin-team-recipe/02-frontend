"use client"
import { useRouter } from "next/navigation"
import { ReactElement } from "react"
import { IoArrowBack } from "react-icons/io5"

type PageBackButtonProps = {
  children?: ReactElement
  defaultBackPage?: string
}

const PageBackButton = (props: PageBackButtonProps) => {
  const { children, defaultBackPage } = props
  const router = useRouter()

  let buttonElement: ReactElement = (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 bg-opacity-20 text-2xl hover:bg-gray-200">
      <IoArrowBack />
    </div>
  )
  if (children) {
    buttonElement = children
  }

  const handleRouterBack = () => {
    if (window.history.length > 0) {
      router.back()
    } else {
      router.push(defaultBackPage ?? "/")
    }
  }

  return (
    <>
      <button onClick={handleRouterBack}>{buttonElement}</button>
    </>
  )
}
export default PageBackButton
