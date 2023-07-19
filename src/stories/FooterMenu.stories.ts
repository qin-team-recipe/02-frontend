import { Meta, StoryObj } from "@storybook/react"

import FooterMenu from "./FooterMenu"

const meta: Meta<typeof FooterMenu> = {
  title: "Example/FooterMenu",
  component: FooterMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof FooterMenu>

export const FooterMenuDefault: Story = {}