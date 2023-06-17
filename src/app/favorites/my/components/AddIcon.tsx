import type { FC, SVGProps } from "react"

export const AddIcon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#6b7280" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"></path>
  </svg>
)
