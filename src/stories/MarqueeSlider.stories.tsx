import type { Meta, StoryObj } from '@storybook/nextjs';
import MarqueeSlider from './MarqueeSlider';

const meta = {
	component: MarqueeSlider,
} satisfies Meta<typeof MarqueeSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
