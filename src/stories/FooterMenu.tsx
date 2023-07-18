import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

// navItem.tsからインポート
import { navItems } from "../app/navItems"

const FooterMenu: FC = () => {
  return (
    <div className="fixed bottom-0 -mx-[16px] grid w-full max-w-[480px] grid-cols-3 gap-4 border-t-2 bg-white py-4 ">
      {navItems.map((item) => (
        <Link href={item.href} key={item.name}>
          <div className="flex flex-col items-center">
            <Image src={item.icon} alt={item.name} width={24} height={24} />
            <span className="mt-1 text-sm text-gray-600">{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default FooterMenu
