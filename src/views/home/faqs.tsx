"use client";
import { Heading } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = ({ data, isHomePage }: any) => {
  console.log("isHomePage,", isHomePage);
  return (
    <div className="flex justify-center items-center bg-white dark:bg-[#010814] my-16 w-full">
      <div className="max-w-[1440px] w-full px-4 sm:px-12">
        {isHomePage && (
          <div className="max-w-[624px] mx-auto mb-16">
            <Heading
              title="A Frequently Asked Questions"
              desc="Have another question? Contact me on X or by email"
            />
          </div>
        )}
        <div>
          <Accordion defaultValue={["item-0"]} type="multiple">
            {data?.map((item: any, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="shadow-2xl dark:shadow-none border dark:border-[#373C53] py-2 px-6 rounded-[12px] bg-white dark:bg-gradient-to-r from-[#1E242D] to-[#0B111B] h-full transition-all duration-300 mb-4"
              >
                <AccordionTrigger className="text-start font-semibold text-xl hover:no-underline">
                  {item?.question}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                  {item?.answer?.map((answer: string, index: number) => (
                    <p
                      key={index}
                      className="text-[#010610A6] dark:text-[#808389] font-medium text-base sm:mr-12 mb-4"
                    >
                      {answer}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
