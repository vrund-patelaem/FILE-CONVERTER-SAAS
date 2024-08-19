import Image from "next/image";
import CardArticle from "../../_assets/components/CardArticle";
import { getData } from "@/utils/fetch";

export default async function Author({
  params,
}: {
  params: {
    authorId: string;
  };
}) {
  const author = await getData(
    "authors/" +
      params.authorId +
      "/?populate[blogs][populate]=*&populate[social_links][populate]=*&populate=image"
  );

  return (
    <>
      <section className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 mt-24 mb-24 md:mb-32">
        <div>
          <p className="text-xs uppercase tracking-wide text-base-content/80 mb-2 text-white">
            Authors
          </p>
          <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-2 text-white">
            {author?.data?.attributes?.name}
          </h1>
          <p className="md:text-lg mb-6 md:mb-10 font-medium text-white">
            {author?.data?.attributes?.job}
          </p>
          <p className="md:text-lg text-white">
            {author?.data?.attributes?.description}
          </p>
        </div>
        <div className="max-md:order-first flex md:flex-col gap-4 shrink-0">
          <Image
            src={author?.data?.attributes?.image?.data?.[0]?.attributes?.url}
            width={256}
            height={256}
            alt={author.name}
            priority={true}
            className="rounded-box w-[12rem] md:w-[16rem] "
          />
          {author?.data?.attributes?.social_links?.length > 0 && (
            <div className="flex flex-col md:flex-row gap-4">
              {author?.data?.attributes?.social_links?.map((social: any) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="btn btn-square text-white"
                  // Using a dark theme? -> className="btn btn-square btn-neutral"
                  title={`Go to ${author.name} profile on ${social.name}`}
                  target="_blank"
                >
                  {social.name?.toLowerCase() === "instagram" && (
                    <Image
                      alt="insta"
                      src="/social/insta.png"
                      height={40}
                      width={40}
                      priority
                    />
                  )}
                  {social.name?.toLowerCase() === "facebook" && (
                    <Image
                      alt="insta"
                      src="/social/fb.png"
                      height={40}
                      width={40}
                      priority
                    />
                  )}
                  {social.name?.toLowerCase() === "twitter" && (
                    <Image
                      alt="insta"
                      src="/social/x.png"
                      height={40}
                      width={40}
                      priority
                    />
                  )}
                  {social.name?.toLowerCase() === "linkedin" && (
                    <Image
                      alt="insta"
                      src="/social/linkedin.png"
                      height={40}
                      width={40}
                      priority
                    />
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
      <section>
        <h2 className="font-bold text-2xl lg:text-4xl text-white tracking-tight text-center mb-8 md:mb-12">
          Most recent articles by {author.name}
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {author?.data?.attributes?.blogs?.data?.map((article: any) => (
            <CardArticle
              isAuthorPage
              authorAvatar={
                author?.data?.attributes?.image?.data?.[0]?.attributes?.url
              }
              key={article.id}
              article={article}
            />
          ))}
        </div>
      </section>
    </>
  );
}
