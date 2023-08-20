import { Args, PartialStoryFn } from "@storybook/csf"
import { ReactRenderer } from "@storybook/react"

import { MainContentLayout } from "@/app/components/MainContentLayout"

export const MainContentLayoutDecorator = (
  Story: PartialStoryFn<ReactRenderer, Args>
) => (
  <MainContentLayout>
    <Story />
  </MainContentLayout>
)
