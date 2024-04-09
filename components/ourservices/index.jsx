'use client';
import { projects } from '@/utils/data';
import Card from '../servicescard';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Text3d from '../text3d'
import Lenis from '@studio-freight/lenis'

export default function Home() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })
    return (
        <main ref={container} className="relative">
            {
                projects.map((project, index) => {
                    const targetScale = (1 - (projects.length - index) * 0.05)
                    return <Card key={index} i={index} {...project} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
                })
            }
        </main>
    )
}