import Link from "next/link";
import Script from "next/script";
import BadgeCategory from "../_assets/components/BadgeCategory";
import Avatar from "../_assets/components/Avatar";
import config from "@/config";
import { getData } from "@/utils/fetch";
import Image from "next/image";

export default async function Article({
  params,
}: {
  params: {
    articleId: string;
  };
}) {
  const requiredArticle = await getData(
    "blogs/" +
      params.articleId +
      "/?populate[author][populate]=*&populate=blog_image"
  );

  return (
    <>
      {/* SCHEMA JSON-LD MARKUP FOR GOOGLE */}

      <Script
        type="application/ld+json"
        id={`json-ld-article-${requiredArticle.data.id}`}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: {
              "@type": "WebPage",
            },
            name: requiredArticle.data.attributes.title,
            description: requiredArticle.data.attributes.detail,
            image: `https://${config.domainName}${requiredArticle.data.attributes.blog_image.data.attributes.url}`,
            datePublished: requiredArticle.data.attributes.publishedAt,
            dateModified: requiredArticle.data.attributes.publishedAt,
            author: {
              "@type": "Person",
              name: requiredArticle.data.attributes.profile_name,
            },
          }),
        }}
      />

      {/* GO BACK LINK */}

      <div>
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
        {/* HEADER WITH CATEGORIES AND DATE AND TITLE */}

        <section className="my-12 md:my-20 max-w-[800px]">
          <div className="flex items-center gap-4 mb-6">
            <BadgeCategory
              category={requiredArticle?.data?.attributes?.category}
              key={requiredArticle.id}
              extraStyle="!badge-lg"
            />
            <span className="text-white" itemProp="datePublished">
              {new Date(
                requiredArticle?.data?.attributes?.publishedAt
              ).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8 text-white">
            {requiredArticle?.data?.attributes?.title}
          </h1>

          <Image
            alt=""
            src={requiredArticle.data.attributes.blog_image.data.attributes.url}
            width={400}
            height={400}
          />
        </section>

        <section className="w-full max-md:pt-4 md:pr-20 space-y-12 md:space-y-20 text-white">
          {requiredArticle?.data?.attributes?.detail}
        </section>

        <div className="flex flex-col md:flex-row justify-end -mt-56">
          {/* SIDEBAR WITH AUTHORS AND 3 RELATED ARTICLES */}
          <section className="max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-72 shrink-0 border-base-content/10 mb-24">
            <p className="text-base-content/80 text-sm mb-2 md:mb-3 text-white">
              Posted by
            </p>
            <Avatar article={requiredArticle?.data} />
          </section>
        </div>
      </article>
    </>
  );
}
