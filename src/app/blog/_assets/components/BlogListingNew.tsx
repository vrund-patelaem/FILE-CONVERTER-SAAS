'use client'

import { convertToReadableDate } from '@/utils/functions'
import Link from 'next/link'
import { useState } from 'react'

type blogTitle = {
	rendered: string
}

type blogTypes = {
	title: blogTitle
	slug: string
	image_url: string
	date: string
}

interface props {
	articles: blogTypes[]
}

const BlogListingNew = ({ articles }: props) => {
	const [visiblePosts, setVisiblePosts] = useState(6)

	const loadMore = () => {
		setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 6)
	}

	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
				{articles?.slice(0, visiblePosts).map((post: any, index: any) => (
					<Link
						href={`/blog/${post.slug}`}
						key={index}
						className='bg-white  dark:bg-[#1E232C] rounded-xl overflow-hidden shadow-lg dark:border border-solid border-[#373C53] hover:border-[#5b6285] transition-all duration-500 transform hover:scale-105 ease-in-out  '
					>
						<div className='p-4'>
							<h2 className=' font-normal text-[16px] dark:text-white mb-2'>
								{post.title.rendered}
							</h2>
							<p className='text-gray-400'>
								{convertToReadableDate(post.date)}
							</p>
						</div>
					</Link>
				))}
			</div>
			{visiblePosts < articles.length && (
				<div className='flex justify-center'>
					<button
						className='bg-[#1364FF] w-32 rounded-lg text-white font-semibold py-3 mt-12'
						onClick={loadMore}
					>
						See more
					</button>
				</div>
			)}
		</>
	)
}

export default BlogListingNew
