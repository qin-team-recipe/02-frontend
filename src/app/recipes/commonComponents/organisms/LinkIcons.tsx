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
  priority?: number
  icon?: JSX.Element
}

type LinkIconsProps = {
  links: LinkType[]
}

const convertToMenuItems = (links: LinkType[]): MenuItemType[] => {
  return links.map((l) => {
    return {
      icon: l.icon,
      title: l.service_name,
      action: () => {
        window.open(l.url, "_blank")
      },
    }
  })
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
  const FAMOUS_SITES = [
    {
      icon: <IoLogoYoutube />,
      urlPrefix: "www.youtube.com",
      priority: 1,
    },
    {
      icon: <IoLogoInstagram />,
      urlPrefix: "www.instagram.com",
      priority: 2,
    },
    {
      icon: <IoLogoTiktok />,
      urlPrefix: "www.tiktok.com",
      priority: 3,
    },
    {
      icon: <IoLogoTwitter />,
      urlPrefix: "www.twitter.com",
      priority: 4,
    },
    {
      icon: <IoLogoFacebook />,
      urlPrefix: "www.facebook.com",
      priority: 5,
    },
  ]
  const MAX_COUNT_OUT_MENU = 2

  // 表示順に並び替え
  const sortedLinks = links
    .map((link) => {
      const matchingSite = FAMOUS_SITES.find((site) =>
        link.url.includes(site.urlPrefix)
      )
      const priority = matchingSite ? matchingSite.priority : Infinity
      const icon = matchingSite ? matchingSite.icon : <IoLink />
      return { ...link, priority, icon }
    })
    .sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0))

  // 有名サイト
  const famousSiteLinks = sortedLinks.filter(
    (menu) => menu.priority != Infinity
  )
  // 有名サイトで優先度の高い(値の低い)2つをアイコン表示、その他をはメニュー
  const iconLinks: LinkType[] = famousSiteLinks.slice(0, MAX_COUNT_OUT_MENU)
  const famousSiteMenuLinks: LinkType[] =
    famousSiteLinks.slice(MAX_COUNT_OUT_MENU)
  const famousSiteMenuItems: MenuItemType[] =
    convertToMenuItems(famousSiteMenuLinks)

  // オリジナルサイト
  const orginalSiteLinks = sortedLinks.filter(
    (menu) => menu.priority == Infinity
  )
  const orginalSiteMenuItems: MenuItemType[] =
    convertToMenuItems(orginalSiteLinks)

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
        {/* 外メニュー */}
        {iconLinks.map((link) => (
          <div className="flex-0.3 mr-2" key={link.id}>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200"
              onClick={() => handleLinkClick(link)}
            >
              <div className="text-xl">{link.icon}</div>
            </button>
          </div>
        ))}

        {/* 内メニュー */}
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
