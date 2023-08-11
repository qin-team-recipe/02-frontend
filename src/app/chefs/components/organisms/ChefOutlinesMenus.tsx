import { useRouter } from "next/navigation"
import { useState } from "react"
import {
  IoCopyOutline,
  IoEllipsisVerticalCircle,
  IoPencil,
} from "react-icons/io5"

import Toast from "@/app/recipes/commonComponents/molecules/Toast"
import LinkIcons from "@/app/recipes/commonComponents/organisms/LinkIcons"
import Menu, {
  MenuItemType,
} from "@/app/recipes/commonComponents/organisms/Menu"
import {
  getLoginUserFromLocalStorage,
  getTokenFromLocalStorage,
} from "@/app/utils/localStorage"

import { ChefOutlineType } from "../../[screenName]/type"

type ChefOutlinesMenusProps = {
  chef: ChefOutlineType
}

/**
 * シェフ概要メニュー
 * @returns
 */
const ChefOutlinesMenus = (props: ChefOutlinesMenusProps) => {
  const { chef } = props
  const [showToast, setShowToast] = useState(false)
  const [toastProp, setToastProp] = useState<{
    message: string
    type: "success" | "error"
  }>({
    message: "",
    type: "success",
  })
  const router = useRouter()

  const MENU_WIDTH = 260
  const MENU_ITME_PROFILE_EDIT: MenuItemType = {
    icon: <IoPencil />,
    title: "プロフィールを編集する",
    action: (item?: MenuItemType) => {
      // プロフィール編集画面に遷移
      global.navigator.clipboard.writeText(location.href)
      router.push(`/users/${chef.screen_name}/profiles`)
    },
  }
  const MENU_ITME_URL_COPY: MenuItemType = {
    icon: <IoCopyOutline />,
    title: "URLをコピーする",
    action: (item?: MenuItemType) => {
      // URLをクリップボードにコピー
      global.navigator.clipboard.writeText(location.href)
      // トースト表示
      showSuccessToast("URLをコピーしました")
    },
  }
  const menuItems = [MENU_ITME_PROFILE_EDIT, MENU_ITME_URL_COPY]

  const showSuccessToast = (message: string) => {
    setToastProp({
      message: message,
      type: "success",
    })
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 2500)
  }

  if (!chef) return <></>

  // ログインユーザとページのシェフが同じ場合はマイページ
  const loginUser = getLoginUserFromLocalStorage()
  const token = getTokenFromLocalStorage()
  const isMe = token && loginUser?.screen_name == chef?.screen_name

  return (
    <>
      {isMe ? (
        /* リンクメニュー */
        <div className="flex-0.3 mr-2 mt-1">
          <Menu menuWidth={MENU_WIDTH} menuItems={menuItems}>
            <IoEllipsisVerticalCircle className="flex h-6 w-6 rounded-full text-gray-600 hover:bg-gray-200" />
          </Menu>
        </div>
      ) : (
        /* リンクメニュー */
        <LinkIcons links={chef.chef_links ?? []} />
      )}
      {/* トースト */}
      <Toast
        message={toastProp.message}
        type={toastProp.type}
        isShow={showToast}
      />
    </>
  )
}
export default ChefOutlinesMenus
