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

import { LinkType } from "../../../chefs/[screenName]/type"
import { MenuItemType } from "../../[id]/type"
import Menu from "./Menu"

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

  const youtubeLink = links.find((el) => el.type == "YouTube")
  const instagramLink = links.find((el) => el.type == "Instagram")

  const MENU_WIDTH = 220
  const MENU_ITMES: MenuItemType[] = [
    {
      icon: <IoLogoTiktok />,
      title: "TikTok",
      comment: undefined,
      hr: false,
      action: (item?: MenuItemType) => {
        // TODO
        alert("TikTok")
      },
    },
    {
      // eslint-disable-next-line react/jsx-no-undef
      icon: <IoLogoTwitter />,
      title: "Twitter",
      comment: undefined,
      hr: false,
      action: (item?: MenuItemType) => {
        // TODO
        alert("Twitter")
      },
    },
    {
      icon: <IoLogoFacebook />,
      title: "Facebook",
      comment: undefined,
      hr: false,
      action: (item?: MenuItemType) => {
        // TODO
        alert("Facebook")
      },
    },
    {
      icon: undefined,
      title: undefined,
      comment: undefined,
      hr: true,
    },
    {
      icon: <IoLink />,
      title: "HogeHoge.com",
      comment: undefined,
      hr: false,
      action: (item?: MenuItemType) => {
        alert("HogeHoge")
      },
    },
  ]

  const handleLinkClick = (item: LinkType) => {
    alert(item.url)
  }

  return (
    <>
      <div className="m-1 flex flex-row items-center justify-center">
        {/* YouTube */}
        {youtubeLink && (
          <div className="flex-0.3 mr-1">
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
          <div className="flex-0.3 mr-1">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200"
              onClick={() => handleLinkClick(instagramLink)}
            >
              <IoLogoInstagram className="text-xl" />
            </button>
          </div>
        )}
        {/* メニュー */}
        <div className="flex-0.3 mr-1 mt-1">
          <Menu menuWidth={MENU_WIDTH} menuItems={MENU_ITMES}>
            <IoEllipsisVerticalCircle className="flex h-6 w-6 rounded-full text-gray-600 hover:bg-gray-200" />
          </Menu>
        </div>
      </div>
    </>
  )
}
export default LinkIcons
