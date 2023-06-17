import type { FC, SVGProps } from "react"

export const BackIcon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#374151"
      d="m12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825l5.6 5.6L12 20Z"
    ></path>
  </svg>
)
