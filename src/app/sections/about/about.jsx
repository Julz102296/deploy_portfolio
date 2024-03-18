"use client"
import React, { useRef } from 'react'
import Rounded from "../../common/RoundedButton/index";
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function About() {

  const containerRef = useRef();
  const description = useRef(null);
  const isInView = useInView(description)


  const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
  }

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);


  return (
  <section> 
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <motion.div className="relative h-64 sm:h-80 lg:h-full" style={{scale: imageScale}}>
            <img
              alt=""
              src="/Images/IMG_2231.JPG"
              className="absolute inset-0 h-full w-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        <div className="relative flex items-center bg-slate-200">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-slate-200"
          ></span>

          <div ref={description} className="p-8 sm:p-16 lg:p-24">
            <motion.p className="text-3xl font-extrabold sm:text-5xl text-slate-700" variants={slideUp} animate={isInView ? "open" : "closed"}>
              About Me
            </motion.p>
              <motion.p variants={slideUp} animate={isInView ? "open" : "closed"} className="mt-4 text-slate-700">
              I'm Julios Sagadal, a passionate Full Stack Web Developer hailing from Rizal. Graduated from the Polytechnic University of the Philippines in 2020 laid the groundwork for my journey. In 2024, I took a leap into the dynamic world of Full Stack Web Development at KodeGo Bootcamp. Beyond coding, I thrive on creative problem-solving, crafting efficient and innovative web solutions. Let's collaborate and explore the endless possibilities of web development together.
              </motion.p>

            <div className="hero-buttons m-10 items-start flex flex-col justify-start">
              <Rounded>
              <p>Get in Touch</p>
              </Rounded>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
