import Link from "next/link"
import type { FC } from "react"

type SubHeaderProps = {
  title: string
  link?: {
    href: string
    text: string
  }
}

export const SubHeader: FC<SubHeaderProps> = ({ title, link }) => (
  <div className="flex justify-between">
    <p className="text-xl font-bold">{title}</p>
    {link && (
      <Link
        href={link.href}
        className="font-bold text-gray-500 hover:underline"
      >
        {link.text}
      </Link>
    )}
  </div>
)
