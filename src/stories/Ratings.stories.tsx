import type { Meta, StoryObj } from '@storybook/nextjs';
import Ratings from './Ratings';

const meta = {
	component: Ratings,
} satisfies Meta<typeof Ratings>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		rating: 2,
	},
};
