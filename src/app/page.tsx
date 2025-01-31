import { Suspense } from "react";
import Header from "@/components/Header"
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <div className="min-h-[100vh] flex flex-col justify-between w-full bg-white dark:bg-[#010814]">
        <Hero />
        <Testimonials />
        {/* <FeaturesGrid /> */}
        <Features />
        <Pricing />

        <Faq />
        <CTA />
      </div>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
