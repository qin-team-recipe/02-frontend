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
  id: number
  service_name: string
  url: string
  chef_id: number
  recipe_id: number
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
      urlPrefix: "www.facebook.com",
    },
    {
      icon: <IoLogoTiktok />,
      urlPrefix: "www.tiktok.com",
    },
    {
      icon: <IoLogoTwitter />,
      urlPrefix: "www.twitter.com",
    },
  ]

  // 表にボタンで表示する有名サイト
  const youtubeLink = links.find((el) => el.url.indexOf("www.youtube.com") > 0)
  const instagramLink = links.find(
    (el) => el.url.indexOf("www.instagram.com") > 0
  )

  // メニュー内で表示する有名サイト
  const famousSiteInMenuLinks = links.filter(
    (l) =>
      l.url && famousSitesInMenu.find((f) => l.url.indexOf(f.urlPrefix) > 0)
  )
  const famousSiteMenuItems: MenuItemType[] = famousSiteInMenuLinks.map((l) => {
    return {
      icon: famousSitesInMenu.find((f) => l.url.indexOf(f.urlPrefix) > 0)?.icon,
      title: l.service_name,
      action: () => {
        window.open(l.url, "_blank")
      },
    }
  })

  // メニュー内で表示するオリジナルサイト
  const orginalSiteLinks = links.filter(
    (l) =>
      l.url &&
      !famousSitesInMenu.find((f) => l.url.indexOf(f.urlPrefix) > 0) &&
      !(l.url.indexOf("www.youtube.com") > 0) &&
      !(l.url.indexOf("www.instagram.com") > 0)
  )
  const orginalSiteMenuItems: MenuItemType[] = orginalSiteLinks.map((l) => {
    return {
      icon: <IoLink />,
      title: l.service_name,
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
