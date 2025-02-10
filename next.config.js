/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: true,
	images: {
		domains: [
			// NextJS <Image> component needs to whitelist domains for src={}
			'lh3.googleusercontent.com',
			'pbs.twimg.com',
			'images.unsplash.com',
			'logos-world.net',
			'localhost',
			'cdn-icons-png.flaticon.com',
			'res.cloudinary.com',
			'blogger.googleusercontent.com',
			'fast-strapi-cms-651b34b82e95.herokuapp.comhttps',
			'secure.gravatar.com',
			'img.clerk.com',
			'3.73.130.136',
		],
	},
}

module.exports = nextConfig
