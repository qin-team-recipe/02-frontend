import type { FC, SVGProps } from "react"

export const SettingIcon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.4em"
    height="1.4em"
    viewBox="0 0 21 21"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(3 3)"
    >
      <path
        strokeWidth=".933"
        d="M7.5.5c.351 0 .697.026 1.034.076l.508 1.539c.445.127.868.308 1.26.536l1.46-.704c.517.397.977.865 1.365 1.389l-.73 1.447c.221.396.395.822.514 1.27l1.53.533a7.066 7.066 0 0 1-.017 1.948l-1.539.508a5.567 5.567 0 0 1-.536 1.26l.704 1.46a7.041 7.041 0 0 1-1.389 1.365l-1.447-.73a5.507 5.507 0 0 1-1.27.514l-.533 1.53a7.066 7.066 0 0 1-1.948-.017l-.508-1.539a5.567 5.567 0 0 1-1.26-.536l-1.46.704a7.041 7.041 0 0 1-1.365-1.389l.73-1.447a5.565 5.565 0 0 1-.514-1.27l-1.53-.534a7.066 7.066 0 0 1 .017-1.947l1.539-.508c.127-.445.308-.868.536-1.26l-.704-1.46a7.041 7.041 0 0 1 1.389-1.365l1.447.73a5.507 5.507 0 0 1 1.27-.514l.534-1.53A7.06 7.06 0 0 1 7.5.5z"
      ></path>
      <circle cx="7.5" cy="7.5" r="3"></circle>
    </g>
  </svg>
)
