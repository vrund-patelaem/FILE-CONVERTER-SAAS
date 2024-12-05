import React from "react";
import { posts } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

const MoreArticles = ({ currentBlog }: any) => {
  const filteredPosts = posts.filter((post) => post.title !== currentBlog);
  return (
    <div className="max-w-6xl mx-auto p-6 mb-12">
      <h2 className="text-4xl font-bold mb-6 text-center">Other News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {filteredPosts.slice(0, 3).map((post, index) => (
          <Link
            href={`/blog/${post.slug}`}
            key={index}
            className="bg-white  dark:bg-[#1E232C] rounded-xl overflow-hidden shadow-lg dark:border border-solid border-[#373C53] hover:border-[#5b6285] transition-all duration-500 transform hover:scale-105 ease-in-out  "
          >
            <Image
              src={post.image}
              alt={post.alt}
              className="object-cover"
              width={500}
              height={156}
            />
            <div className="p-4">
              <h2 className=" font-normal text-[16px] dark:text-white mb-2">
                {post.title}
              </h2>
              <p className="text-gray-400">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreArticles;
