import type { Meta, StoryObj } from '@storybook/nextjs';
import ReviewsSlider from './ReviewsSlider';

const meta = {
	component: ReviewsSlider,
} satisfies Meta<typeof ReviewsSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
