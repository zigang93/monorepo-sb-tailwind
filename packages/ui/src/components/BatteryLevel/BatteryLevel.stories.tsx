import { Meta, StoryObj } from '@storybook/react'

import { BatteryLevel } from './BatteryLevel'

const meta: Meta<typeof BatteryLevel> = {
  component: BatteryLevel,
  decorators: [
    (Story) => (
      <div className="w-[200px] p-2">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    level: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
}

export default meta

export const Default: StoryObj<typeof BatteryLevel> = {
  args: { level: 85 },
}
