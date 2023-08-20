import { Meta, StoryObj } from "@storybook/react"

import { MainContentLayout } from "./MainContentLayout"

const meta: Meta<typeof MainContentLayout> = {
  title: "Component/MainContentLayout",
  component: MainContentLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof MainContentLayout>

export const Default: Story = {
  args: {
    children: "Content",
  },
}
