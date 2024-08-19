import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// This is the category badge that appears in the article page and in <CardArticle /> component

const Category = ({
  category,
  extraStyle,
}: {
  category: string;
  extraStyle?: string;
}) => {
  return (
    <Badge
      variant="outline"
      className={`badge badge-sm md:badge-md bg-white ${
        extraStyle ? extraStyle : ""
      }`}
    >
      <Link
        href={`/blog/category/${category?.toLocaleLowerCase()}`}
        title={`Posts in ${category}`}
        rel="tag"
      >
        {category}
      </Link>
    </Badge>
  );
};

export default Category;
