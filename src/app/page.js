"use client"

import Hero from "../app/pages/index";
import About from "./about/page";
import Portfolio from "./portfolio/page";
import Footer from "../app/components/Footer";
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";
import Rotating from "./components/RotatingSvg/Rotating";
import { useScroll } from "framer-motion";
import Experience from "../app/components/Experience/index";
import ParallaxSchool from "./components/ParallaxSchool";
import Stack from "./components/Stacks/stack";


export default function Home() {

  const {scrollYProgress} = useScroll();

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}, [])


  return (
    <main className="">
      {/* <Hero /> */}
      <Hero className="overflow-hidden" />
      {/* <AboutButton /> */}
      <About className="overflow-hidden" />
      <ParallaxSchool />
      <Stack />
      {/* <Extras /> */}
      {/* <IntroText /> */}
      <Experience className="overflow-hidden" />
      <Rotating scrollYProgress={scrollYProgress} />
      <Portfolio className="overflow-hidden" />
      <Footer className="overflow-hidden" />
    </main>
  );
}
