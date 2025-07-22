'use client';
import React, { useEffect, useState } from 'react';
import PdfViewer from '@/stories/PdfViewer';
import TextCard from '@/stories/TextCard';
import Loader from '@/stories/Loader';
import Image from 'next/image';

export default function Experience() {
	const [isLoading, setIsLoading] = useState(true);
	const [showLoader, setShowLoader] = useState(true);
	const [showPdfModal, setShowPdfModal] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);

			setTimeout(() => setShowLoader(false), 500);
		}, 2500);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			{showLoader && (
				<div
					className={`fixed inset-0 z-50 transition-opacity duration-500 ${
						isLoading ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<Loader />
				</div>
			)}
			<PdfViewer
				setShowPdfModal={setShowPdfModal}
				src='/menus/plus-menu.pdf'
				buttonColor='gold'
				showPdfModal={showPdfModal}
			/>
			<section id='about' className='py-14 max-width'>
				<h2 className='text-center font-[275] text-3xl leading-[100%] tracking-[3%]'>
					Experience Premium Sushi
				</h2>
				<div className='flex justify-center items-center gap-5 lg:gap-12 flex-wrap mt-14'>
					<Image
						src={'/images/experience-1.png'}
						alt='Sushi platter'
						width={381}
						height={478}
						className='object-contain'
					/>
					<TextCard
						variant='black'
						buttonColor='gold'
						heading='Taste Preparation'
						subHeading='TRADITIONAL & MODERN'
						onClick={() => setShowPdfModal(true)}
						text='Freshly made sushi delivers a perfect balance of tender fish, seasoned rice, and crisp vegetables. Each bite is a fresh, flavorful celebration of Japanese tradition.'
					/>
					<div>
						<Image
							src={'/images/experience-2.png'}
							alt='Sushi platter'
							width={381}
							height={478}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
