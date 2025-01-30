// import Link from "next/link";
// import AuthorAvatar from "@/app/blog/_assets/components/Author";
// import BlogSpotlight from "@/components/BlogSpotlight";
// import FaqsV2 from "@/components/FAQsV2";
// import BlogMoreArticles from "@/components/BlogMoreArticles";
import { wordpressService } from "@/libs/wp";
import React from "react";
import BlogDetails from "@/components/BlogDetails";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { yoast_head_json, slug } = await wordpressService.getPost(params.slug);

  return {
    title: yoast_head_json.title,
    description: yoast_head_json.og_description,
    openGraph: {
      title: yoast_head_json.og_title,
      description: yoast_head_json.og_description,
      images: yoast_head_json.og_image,
      type: yoast_head_json.og_type as "article",
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${slug}`,
    },
    twitter: {
      card: yoast_head_json.twitter_card as "summary_large_image",
      title: yoast_head_json.og_title,
      description: yoast_head_json.og_description,
    },
  };
}

export default async function Article({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const article = await wordpressService.getPost(params.slug);
  const articles = await wordpressService.getAllPosts();

  return (
    <>
      {/* <div>
        <Link
          href="/blog"
          className="link !no-underline text-white inline-flex items-center gap-1"
          title="Back to Blog"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      <article>
        <section className="my-12 md:my-20 max-w-[800px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8 text-white">
            {article?.title?.rendered}
          </h1>
        </section>

        <section className="max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-72 shrink-0 border-base-content/10 mb-24">
          <div>
            <p className="text-base-content/80 text-sm mb-2 md:mb-3 text-white">
              Posted by
            </p>
            <AuthorAvatar post={article} />
          </div>
          <span>
            {new Date(article?.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </section>

        <section className="my-12 md:my-20 max-w-[800px]">
          <div
            className={"article"}
            dangerouslySetInnerHTML={{ __html: article.content.rendered }}
          />
        </section>
      </article> */}

      <BlogDetails postDetails={article} allPosts={articles} />
    </>
  );
}
