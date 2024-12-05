import { Suspense } from 'react'
import Header from "@/components/Header";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
// import Hero from '../views/home/hero';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        {/* <Hero /> */}
        <Problem />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}