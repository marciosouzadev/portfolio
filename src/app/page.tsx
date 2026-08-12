import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Workflow } from "@/components/sections/Workflow";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  alternates: {
    canonical: site.url,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Stack />
      <Workflow />
      <Contact />
    </>
  );
}
