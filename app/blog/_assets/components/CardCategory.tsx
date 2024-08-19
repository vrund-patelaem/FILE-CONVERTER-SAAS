import type { JSX } from "react";
import Link from "next/link";
import { categoryType } from "../content";
import { Button } from "@/components/ui/button";

// This is the category card that appears in the home page and in the category page
const CardCategory = ({
  category,
  tag = "h2",
}: {
  category: categoryType;
  tag?: keyof JSX.IntrinsicElements;
}) => {
  const TitleTag = tag;

  return (
    <Button
      className="bg-base-200 hover:bg-base-200"
      style={{ paddingTop: "25px", paddingBottom: "25px" }}
    >
      <Link
        className="text-base-content"
        href={`/blog/category/${category.slug}`}
        title={category.title}
        rel="tag"
      >
        <TitleTag className="md:text-lg font-medium">
          {category?.titleShort || category.title}
        </TitleTag>
      </Link>
    </Button>
  );
};

export default CardCategory;
