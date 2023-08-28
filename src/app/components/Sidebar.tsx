import Image from "next/image"
import Link from "next/link"
import type { FC } from "react"

import { navItems } from "../navItems"

const Sidebar: FC = () => {
  return (
    <div className="hidden px-4 py-8 md:block md:w-[180px]">
      <ul>
        <Link href="/">
          <div
            className="flex items-center justify-center space-x-2"
            style={{ width: "fit-content" }}
          >
            <Image
              src="/toppage/tabler-icon-chef-hat.png"
              alt=""
              width={24}
              height={24}
              className="align-top" // imageをtopに揃える
            />
            <span className="align-top text-sm font-bold text-gray-600">
              Top Chefs
            </span>
          </div>
        </Link>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <div
                className="mt-6 flex items-center justify-center space-x-2"
                style={{ width: "fit-content" }}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="align-top"
                />
                <span className="align-top text-sm text-gray-600">
                  {item.name}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
