import { ComponentPropsWithoutRef, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
  base: "rounded px-3 py-1 text-center border w-full",
  variants: {
    theme: {
      filled: "text-white border-transparent",
      outline: "bg-transparent",
    },
    color: {
      gray: "border-gray-600",
      tomato: "border-tomato-light-7",
    },
    size: {
      sm: "h-7 text-sm",
      lg: "h-9 text-md",
    },
  },
  compoundVariants: [
    {
      theme: "filled",
      color: "gray",
      class: "bg-gray-600",
    },
    {
      theme: "filled",
      color: "tomato",
      class: "bg-tomato-light-9",
    },
    {
      theme: "outline",
      color: "tomato",
      class: "text-tomato-light-9",
    },
  ],
})

export type ActionButtonTheme = VariantProps<typeof button>["theme"]
export type ActionButtonColor = VariantProps<typeof button>["color"]
export type ActionButtonSize = VariantProps<typeof button>["size"]

export type ActionButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode
  theme?: ActionButtonTheme
  color?: ActionButtonColor
  size?: ActionButtonSize
}

export const ActionButton = ({
  children,
  theme = "filled",
  color = "tomato",
  size = "sm",
  className,
  ...props
}: ActionButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={button({ theme, size, color, className })}
    >
      {children}
    </button>
  )
}
