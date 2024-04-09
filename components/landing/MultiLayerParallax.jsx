"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useLayoutEffect } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "900%"]);

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  };
  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10 -top-44"
      >
        {/* Arvind Architects */}
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0 bg-black flex items-center justify-center"
        // style={{
        //   backgroundImage: "url('/image-full-2.png')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center center",
        //   y: backgroundY,
        // }}
      >
        <img src="/aa-logo-cropped.png" className="w-[800px] h-[200px] -mt-[500px]" />
      </motion.div>

      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url('/image-bottom-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Crafting Dreams Into Reality -</p>
          <p ref={secondText}>Crafting Dreams Into Reality -</p>
        </div>
      </div>
    </div>
  );
}

export default MultiLayerParallax;
