import Link from "next/link";
// import Image from "next/image";
import { Avatar as ShadeCnAvatar, AvatarImage } from "@/components/ui/avatar";
// This is the author avatar that appears in the article page and in <CardArticle /> component

const Avatar = ({
  article,
  authorAvatar,
  isAuthorPage,
}: {
  article: any;
  isAuthorPage?: boolean;
  authorAvatar?: string;
}) => {
  return (
    <Link
      href={`/blog/author/${article?.attributes?.author?.data?.id}`}
      title={`Posts by ${article.attributes?.profile_name}`}
      className="inline-flex items-center gap-2 group"
      rel="author"
    >
      <span itemProp="author">
        {!isAuthorPage &&
          article?.attributes?.author?.data?.attributes?.image?.data?.attributes
            ?.url && (
            // <Image
            //   src={
            //     article?.attributes?.author?.data?.attributes?.image?.data?.[0]
            //       ?.attributes?.url
            //   }
            //   alt=""

            //   width={28}
            //   height={28}
            // />
            <ShadeCnAvatar>
              <AvatarImage
                src={
                  article?.attributes?.author?.data?.attributes?.image?.data
                    ?.attributes?.url
                }
                alt="profile-pic"
                // className="w-7 h-7 rounded-full object-cover object-center"
              />
            </ShadeCnAvatar>
          )}

        {isAuthorPage && authorAvatar && (
          // <Image
          //   src={authorAvatar}
          //   alt=""
          //   className="w-7 h-7 rounded-full object-cover object-center"
          //   width={28}
          //   height={28}
          // />
          <ShadeCnAvatar>
            <AvatarImage
              src={authorAvatar}
              alt="profile-pic"
              // className="w-7 h-7 rounded-full object-cover object-center"
            />
          </ShadeCnAvatar>
        )}
      </span>

      <span className="group-hover:underline text-white">
        {article?.attributes?.author?.data?.attributes?.name}
      </span>
    </Link>
  );
};

export default Avatar;
