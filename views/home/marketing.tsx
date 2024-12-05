import { Heading } from "@/components";
import Image from "next/image";

const data = [
  {
    image: "/assets/marketing1.svg",
    title: "Discord community for",
    description: "Motivation, Partnerships, Cross promotions, Networking",
  },
  {
    image: "/assets/marketing2.svg",
    title: "SEO Blog Template",
  },
  {
    image: "/assets/marketing3.svg",
    title: "Best tools for Landing Page conversion Boost",
  },
  {
    image: "/assets/marketing4.svg",
    title: "Product Hunt launch small guide",
  },
];

const MarketingCard = ({ item }: any) => {
  return (
    <div className="min-h-full flex flex-col items-center scale-1 hover:scale-[1.05] transition-all duration-300">
      {item?.image && (
        <Image
          src={item?.image}
          alt="logo"
          loading="lazy"
          width={330}
          height={330}
          objectFit="cover"
          className="h-[350px] w-auto"
        />
      )}
      <p className="text-black1 dark:text-white font-medium text-lg text-center px-3">
        {item?.title}
      </p>
      {item?.description && (
        <p className="text-[#7B7E83] dark:text-[#5A5E66] font-medium text-center text-base px-3">
          {item?.description}
        </p>
      )}
    </div>
  );
};

const Marketing = () => {
  return (
    <div className="flex justify-center items-center bg-white dark:bg-[#010814] my-16 w-full">
      <div className="max-w-[1440px] w-full px-4 sm:px-12">
        <div className="max-w-[440px] mx-auto">
          <Heading
            title="TOP Marketing Tools"
            desc="Use the best and proven methodologies to launch your micro SaaS fast and earn money from happy customers"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-16 items-center justify-center mt-12">
          {data?.map((item: any, index: number) => (
            <MarketingCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketing;
