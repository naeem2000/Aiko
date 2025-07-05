import type { Meta, StoryObj } from '@storybook/nextjs';
import { imageSlider } from '../../public/data';
import Slider from './Slider';

const meta = {
	component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'images',
		images: imageSlider,
	},
};
