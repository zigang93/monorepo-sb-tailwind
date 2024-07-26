import { Meta, StoryObj } from '@storybook/react'

import Page from './index.page'

const pagePath = '/'

const meta: Meta<typeof Page> = {
  component: Page,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      router: {
        path: pagePath,
        pathname: pagePath,
        asPath: pagePath,
      },
    },
  },
}

export default meta

export const Default: StoryObj<typeof Page> = {}
