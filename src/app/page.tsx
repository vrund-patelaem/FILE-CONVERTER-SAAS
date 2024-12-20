import { Suspense } from "react";
import Header from "@/components/Header";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <div className="min-h-[100vh] flex flex-col justify-between w-full bg-white dark:bg-[#010814]">
        <Hero />
        <Problem />
        {/* <FeaturesGrid /> */}
        <Features />
        <Pricing />

        <FAQ />
        <CTA />
      </div>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
