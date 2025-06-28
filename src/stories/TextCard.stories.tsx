import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import TextCard from './TextCard';

const meta = {
	component: TextCard,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof TextCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		heading: 'heading',
		subHeading: 'subHeading',
		text: 'text',
		variant: 'light',
		onClick: fn(),
	},
};
