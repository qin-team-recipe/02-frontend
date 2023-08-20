import { forwardRef } from "react"
import { tv } from "tailwind-variants"

const input = tv({
  base: "w-full border-y border-gray-300 px-4 py-3 leading-none",
  variants: {
    error: {
      true: "bg-red-100 text-red-500",
      false: "",
    },
  },
})

export type InputProps = React.ComponentPropsWithRef<"input"> & {
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        type="text"
        {...props}
        ref={ref}
        className={input({ error, className })}
      />
    )
  }
)

Input.displayName = "Input"
