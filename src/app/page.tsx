import { Suspense } from 'react'
import Header from "@/components/Header";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Hero from '@/views/home/hero';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
        <div className="min-h-[100vh] flex flex-col justify-between w-full bg-white dark:bg-[#010814]">
        <Hero />
        <Problem />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </div>
    </>
  );
}