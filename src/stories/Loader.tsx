'use client';
import sushi from '../../public/loader.json';
import Lottie from 'lottie-react';
import React from 'react';

export default function Loader() {
	return (
		<div className='fixed bg-white left-0 right-0 top-0 b-0 z-[99999]'>
			<Lottie animationData={sushi} autoPlay loop className='h-screen w-full' />
		</div>
	);
}
