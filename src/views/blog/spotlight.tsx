import React from "react";
import Image from "next/image";
import Link from "next/link";

const Spotlight = ({ post }: any) => {
  return (
    <div>
      <Link href="/blog" className="flex items-center text-gray-500 gap-2 mb-4">
        <Image
          alt="Back Arrow"
          src="/assets/back-arrow.svg"
          height={10}
          width={15}
        />
        <span>Back to blog</span>
      </Link>
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <div className="flex items-center mb-4">
        <Image
          src={post.profileImage}
          width={50}
          height={50}
          alt="Author's profile picture"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <div className="font-bold">{post.authorName}</div>
          <div className="text-gray-500">{post.date}</div>
        </div>
      </div>
      <Image
        src={post.image}
        alt="A close-up of a smartphone with a weather app open, showing 11°C and fair weather in Varna, next to a Samsung 1TB EVO microSD card on a wooden surface"
        className="rounded-lg"
        width={1200}
        height={400}
      />
    </div>
  );
};

export default Spotlight;
