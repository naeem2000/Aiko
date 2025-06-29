'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { reviews } from '../../public/data';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import 'swiper/css/scrollbar';
import React from 'react';
import 'swiper/css';

export default function ReviewsSlider() {
	return (
		<div className='pt-14 pb-5 bg-[var(--off-white)]'>
			<div className='max-width'>
				<h2 className='font-["Carattere"] text-center text-3xl leading-[100%] tracking-[3%] bg-[var(--off-white)]'>
					Here’s what people are saying
				</h2>
				<Swiper
					modules={[Pagination]}
					spaceBetween={50}
					slidesPerView={1}
					autoplay
					pagination={{ clickable: true }}
					className='mt-14'
				>
					{reviews.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<div className='flex items-center justify-start w-full flex-col h-[280px] md:h-[250px]'>
									<Image
										src={item.image}
										alt={item.name}
										width={92}
										height={92}
									/>
									<p className='text-lg leading-[100%] tracking-[3%] mt-5'>
										{item.name}
									</p>
									<p className='text-lg leading-[100%] tracking-[3%] text-center mt-7 max-w-[630px]'>
										{item.review}
									</p>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}
