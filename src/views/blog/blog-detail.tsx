"use client";
import React, { useMemo } from "react";
import { Faqs } from "../home";
import Spotlight from "./spotlight";
import MoreArticles from "./more-articles";

const BlogDetail = ({ post }: any) => {
  const htmlContent = post?.html as string;
  const faqArray = useMemo(() => {
    if (typeof window === "undefined") return [];

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const faqs: Array<{ question: string; answer: string[] }> = [];

    doc.querySelectorAll(".schema-faq-section").forEach((section) => {
      const question =
        (section.querySelector(".schema-faq-question") as HTMLElement)
          ?.innerText || "";
      const answer =
        (section.querySelector(".schema-faq-answer") as HTMLElement)
          ?.innerText || "";

      if (question && answer) {
        faqs.push({
          question,
          answer: [answer], // Wrap the answer in an array
        });
      }
    });

    return faqs;
  }, [htmlContent]);

  return (
    <div>
      <div className="w-full max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <Spotlight post={post} />
        <div
          className="sm:mt-20 lg:mt-6 dark:text-white text-black "
          dangerouslySetInnerHTML={{ __html: post?.html || "" }}
        />
        <div id="blog-detail-faq">
          <Faqs data={faqArray} isHomePage={false} />
        </div>
      </div>
      <MoreArticles currentBlog={post.title} />
    </div>
  );
};

export default BlogDetail;
