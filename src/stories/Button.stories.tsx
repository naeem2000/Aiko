import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import Button from './Button';

const meta = {
	component: Button,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'label',
		color: 'blue',
		onClick: fn(),
	},
};
