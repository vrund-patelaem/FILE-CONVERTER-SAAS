'use client'
import heroBg from '@/assets/images/hero-bg1.svg'
import heroBgDark from '@/assets/images/hero-bg2.svg'
import toolImg from '@/assets/images/tools1.png'
import toolImgDark from '@/assets/images/tools2.png'
import { IconButton } from '@/components'
import { RightArrow } from '@/icons'
import Image from 'next/image'

const avatars: {
	alt: string
	src: string
}[] = [
	{
		alt: 'User',
		src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80',
	},
	{
		alt: 'User',
		src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
	},
	{
		alt: 'User',
		src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
	},
	{
		alt: 'User',
		src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
	},
	{
		alt: 'User',
		src: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3376&q=80',
	},
]

// Group of customer avatars
const TestimonialsAvatars = ({ priority }: { priority?: boolean }) => {
	return (
		<div className='flex flex-col sm:flex-row items-start gap-3'>
			<div className='flex -space-x-2'>
				{avatars.map((image, i) => (
					<Image
						key={i}
						src={image.src}
						alt={image.alt}
						priority={priority}
						width={48}
						height={48}
						className='inline-block size-12 rounded-full ring-2 ring-white'
					/>
				))}
			</div>

			{/* RATING */}
			<div className='flex flex-col justify-center items-center md:items-start gap-1'>
				<div className='rating flex'>
					{[...Array(5)].map((_, i) => (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='w-5 h-5 text-yellow-500'
							key={i}
						>
							<path
								fillRule='evenodd'
								d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
								clipRule='evenodd'
							/>
						</svg>
					))}
				</div>

				<div className='text-base font-medium text-[#7B7E83] dark:text-[#808389]'>
					<span className='text-black1 dark:text-white'>25</span> makers ship
					faster
				</div>
			</div>
		</div>
	)
}

const HeroV2 = () => {
	return (
		<div className='relative flex justify-center items-center w-full'>
			<Image
				src={heroBg}
				alt='background'
				fill
				objectFit='cover'
				priority={true}
				className='z-0 block dark:hidden'
			/>
			<Image
				src={heroBgDark}
				alt='background'
				fill
				objectFit='cover'
				priority={true}
				className='z-0 hidden dark:block'
			/>
			<div className='relative z-10 max-w-[1440px] w-full px-4 sm:px-12 pb-12 mt-40'>
				<div className='flex justify-between lg:items-center flex-col lg:flex-row gap-8'>
					<div className='lg:w-[45%] max-w-[529px]'>
						<div className='text-[#7B7E83] dark:text-white mb-4 px-[5px] py-2 gap-2 text-sm font-medium border border-[#1AAB12] rounded-[10px] w-fit'>
							<span
								className='text-white bg-[#1AAB12] py-1 px-2 rounded-[5px] font-semibold'
								style={{ lineHeight: 'none' }}
							>
								New
							</span>{' '}
							MicroSaaS Fast v2 is now available 🚀
						</div>
						<h1 className='text-[42px] leading-[50px] font-bold text-black1 dark:text-white'>
							Launch Your SaaS <span className=''>Startup </span>
							<span className='line-through text-[#7B7E83] dark:text-[#4D525A]'>
								in 3 Month,
							</span>{' '}
							1 Day
						</h1>
						<p className='text-[#7B7E83] dark:text-[#808389] font-inter text-base font-medium my-6'>
							This NEXT.js boilerplate and SaaS starter kit with pre build
							modules is all what you need to ship your SaaS, AI tool or a
							startup in 38 min and start making money FAST
						</p>
						<div className='w-fit'>
							<IconButton text='Get MicroSaaSFast' icon={<RightArrow />} />
						</div>
						<p className='mt-4 mb-8 text-xs font-semibold text-[#7B7E83] dark:text-[#5A5E66]'>
							For Developers{'   '}|{'   '}Entrepreneurs{'   '}|{'   '}No-code
							lovers
						</p>
						<TestimonialsAvatars />
					</div>
					<div className=''>
						<Image
							src={toolImg}
							alt='tools'
							width={550}
							height={550}
							priority={true}
							sizes='(max-width: 600px) 450px, 550px'
							className='object-contain lg:w-[550px] mx-auto block dark:hidden'
						/>
						<Image
							src={toolImgDark}
							alt='tools'
							width={550}
							height={550}
							priority={true}
							sizes='(max-width: 600px) 450px, 550px'
							className='object-contain lg:w-[550px] mx-auto hidden dark:block'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroV2
