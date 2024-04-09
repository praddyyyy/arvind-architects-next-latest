'use client';
import MultiLayerParallax from "@/components/landing/MultiLayerParallax";
import OurServices from "@/components/ourservices";
import Projects from "@/components/projects_new";
import ProjectSlider from "@/components/projects";
import Contact from "@/components/contact";
import Description from "@/components/description";
import Preloader from '@/components/preloader'
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <main className="bg-black">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <MultiLayerParallax />
      <Description />
      {/* <Projects /> */}
      <ProjectSlider />
      <OurServices />
      <Contact />
    </main>
  );
}
