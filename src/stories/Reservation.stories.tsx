import type { Meta, StoryObj } from '@storybook/nextjs';

import Reservation from './Reservation';

const meta = {
  component: Reservation,
} satisfies Meta<typeof Reservation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};