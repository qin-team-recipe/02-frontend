import { FC, ReactNode } from "react"

export type InputWrapperProps = {
  children: ReactNode
  label?: ReactNode
  error?: string
}

export const InputWrapper: FC<InputWrapperProps> = ({
  label,
  children,
  error,
}) => {
  return (
    <div>
      {label ? (
        typeof label === "string" ? (
          <Label>{label}</Label>
        ) : (
          label
        )
      ) : null}
      {children}
      {error ? <Error>{error}</Error> : null}
    </div>
  )
}

export type LabelProps = {
  name?: string
  children: ReactNode
}

export const Label: FC<LabelProps> = ({ name, children }) => {
  return (
    <label htmlFor={name} className="px-4 font-bold">
      {children}
    </label>
  )
}

export type ErrorProps = {
  children: ReactNode
}

export const Error: FC<ErrorProps> = ({ children }) => {
  return <div className="mt-1 px-4 text-sm text-red-600">{children}</div>
}
