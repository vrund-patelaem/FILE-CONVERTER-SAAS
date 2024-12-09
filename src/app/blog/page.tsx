import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import {wordpressService} from "@/libs/wp";
import CardArticle from "@/app/blog/_assets/components/CardArticle";

export const metadata = getSEOTags({
  title: `${config.appName} Blog | Stripe Chargeback Protection`,
  description:
    "Learn how to prevent chargebacks, how to accept payments online, and keep your Stripe account in good standing",
  canonicalUrlRelative:
    "/blog/?populate[author][populate]=*&populate=blog_image",
});

export default async function Blog() {
    const articles = await wordpressService.getAllPosts()

  return (
    <>
      <section className="text-center max-w-xl mx-auto mt-24 mb-24 md:mb-32">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6 text-white">
          The {config.appName} Blog
        </h1>

        <p className="text-lg opacity-80 leading-relaxed text-white">
          Learn how to ship your startup in days, not weeks. And get the latest
          updates about the boilerplate
        </p>
      </section>

      <section className="grid lg:grid-cols-2 mb-24 md:mb-32 gap-8">
        {articles && !!articles.length &&
            articles?.map((article, i: number) => (
            <CardArticle
              article={article}
              key={article.id}
              isImagePriority={i <= 2}
            />
          ))}
      </section>

      {/*<section>*/}
      {/*  <p className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12 text-white">*/}
      {/*    Browse articles by category*/}
      {/*  </p>*/}

      {/*  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">*/}
      {/*    {categories.map((category) => (*/}
      {/*      <CardCategory key={category.slug} category={category} tag="div" />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
}
