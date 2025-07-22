'use client';
import { menu } from '../../../../public/data';
import PdfViewer from '@/stories/PdfViewer';
import React, { useState } from 'react';
import Button from '@/stories/Button';
import Image from 'next/image';

export default function MenuItems() {
	const [showPdfModal, setShowPdfModal] = useState(false);

	return (
		<section id='menu' className='bg-[var(--light-peach)] py-14 lg:py-30'>
			<PdfViewer
				setShowPdfModal={setShowPdfModal}
				src='/menus/main-menu.pdf'
				buttonColor='blue'
				showPdfModal={showPdfModal}
			/>
			<div className='max-width flex items-start justify-center flex-wrap gap-14'>
				<Image
					src={'/images/menu-image-riverland.png'}
					width={603}
					height={618}
					alt='Menu items'
				/>
				<div className='text-black'>
					<p className="text-3xl leading-[100%] tracking-[3%] font-['Carattere']">
						the best of
					</p>
					<p className='text-3xl leading-[49px] tracking-[3%] mt-[2px]'>
						OUR SPECIALTY
					</p>
					{menu.bree.map((item, index) => {
						return (
							<div key={index} className='mt-[23px]'>
								<div className='flex justify-between items-center w-full'>
									<div className='flex justify-between items-center w-full'>
										<p className='text-xl md:text-3xl leading-[49px] tracking-[3%]'>
											{item.item}
										</p>
										<div className='h-[1px] w-[103px] bg-black mx-4' />
									</div>
									<p className='text-xs leading-[100%] tracking-[3%] text-nowrap'>
										{item.price}
									</p>
								</div>
								<p className='text-xs leading-[100%] tracking-[3%] mt-3 max-w-[390px]'>
									{item.description}
								</p>
							</div>
						);
					})}
					<Button
						className='mt-10'
						label='View Full Menu'
						color='blue'
						onClick={() => setShowPdfModal(true)}
					/>
				</div>
			</div>
		</section>
	);
}
