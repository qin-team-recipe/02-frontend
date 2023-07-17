"use client"
import {
  IoEllipsisVerticalCircle,
  IoLink,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5"

import Menu, { MenuItemType } from "./Menu"

export type LinkType = {
  name: string
  type?: "YouTube" | "Instagram" | "Twitter" | "TikTok" | "Facebook"
  image?: string
  url: string
}

type LinkIconsProps = {
  links: LinkType[]
}

/**
 * リンクアイコン
 * @param props
 * @returns
 */
const LinkIcons = (props: LinkIconsProps) => {
  const { links } = props
  if (links.length == 0) return <></>

  const MENU_WIDTH = 220
  const famousSitesInMenu = [
    {
      icon: <IoLogoFacebook />,
      title: "Facebook",
    },
    {
      icon: <IoLogoTiktok />,
      title: "TikTok",
    },
    {
      icon: <IoLogoTwitter />,
      title: "Twitter",
    },
  ]

  // 表にボタンで表示する有名サイト
  const youtubeLink = links.find((el) => el.type == "YouTube")
  const instagramLink = links.find((el) => el.type == "Instagram")

  // メニュー内で表示する有名サイト
  const famousSiteInMenuLinks = links.filter(
    (l) => l.url && famousSitesInMenu.find((f) => f.title == l.type)
  )
  const famousSiteMenuItems: MenuItemType[] = famousSiteInMenuLinks.map((l) => {
    const flink = famousSitesInMenu.find((el) => el.title == l.type)
    return {
      icon: flink?.icon,
      title: l.type,
      action: () => {
        window.open(l.url, "_blank")
      },
    }
  })

  // メニュー内で表示するオリジナルサイト
  const orginalSiteLinks = links.filter((l) => !l.type)
  const orginalSiteMenuItems: MenuItemType[] = orginalSiteLinks.map((l) => {
    return {
      icon: <IoLink />,
      title: l.name,
      action: () => {
        window.open(l.url, "_blank")
      },
    }
  })

  // メニュー要素
  const menuItems = [
    ...famousSiteMenuItems,
    { hr: true },
    ...orginalSiteMenuItems,
  ]

  const handleLinkClick = (item: LinkType) => {
    window.open(item.url, "_blank")
  }

  return (
    <>
      <div className="m-1 flex flex-row items-center justify-center">
        {/* YouTube */}
        {youtubeLink && (
          <div className="flex-0.3 mr-2">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200"
              onClick={() => handleLinkClick(youtubeLink)}
            >
              <IoLogoYoutube className="text-xl" />
            </button>
          </div>
        )}

        {/* Instagram */}
        {instagramLink && (
          <div className="flex-0.3 mr-2">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200"
              onClick={() => handleLinkClick(instagramLink)}
            >
              <IoLogoInstagram className="text-xl" />
            </button>
          </div>
        )}

        {/* メニュー */}
        {menuItems && (
          <div className="flex-0.3 mr-2 mt-1">
            <Menu menuWidth={MENU_WIDTH} menuItems={menuItems}>
              <IoEllipsisVerticalCircle className="flex h-6 w-6 rounded-full text-gray-600 hover:bg-gray-200" />
            </Menu>
          </div>
        )}
      </div>
    </>
  )
}
export default LinkIcons
