import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

// navItem.tsからインポート
import { navItems } from "../navItems"

const FooterMenu: FC = () => {
  return (
    <div className="fixed bottom-0 grid w-full max-w-[476px]  grid-cols-3 gap-4 border-t-2 bg-white py-4  md:hidden">
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
