import { ButtonColors } from '@/modules/types';
import Button from './Button';
import React from 'react';

type Props = {
	src: string;
	setShowPdfModal: (bool: boolean) => void;
	buttonColor: string;
	showPdfModal: boolean;
};

export default function PdfViewer({
	src,
	setShowPdfModal,
	buttonColor,
	showPdfModal,
}: Props) {
	return (
		<div
			className={`fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
				showPdfModal ? 'opacity-100 z-50' : 'opacity-0 -z-50'
			}`}
		>
			<Button
				onClick={() => setShowPdfModal(false)}
				className='absolute top-2 right-2 text-white !text-2xl z-50 !min-w-0 !px-4 !py-2'
				label='&times;'
				color={buttonColor as ButtonColors}
			/>

			<div className='relative w-[90%] max-w-4xl h-[85%] bg-white rounded-lg overflow-hidden shadow-xl'>
				<iframe width={'100%'} height={'100%'} src={src} />;
			</div>
		</div>
	);
}
