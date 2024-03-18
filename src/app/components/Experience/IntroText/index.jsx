import React from 'react'
import { motion } from 'framer-motion';
import Magnetic from "../../../common/Magnetic/index";

export default function index() {

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    },
  };

  return (

      <section className="text-slate-700">
        <div className="mx-auto max-w-screen-xl lg:flex lg:h-screen lg:items-center mb-5">
        <Magnetic>
          <div className="mx-auto max-w-3xl text-center">

              <h1
                className="text-3xl font-extrabold sm:text-5xl text-slate-700"
              >
              My Work Experience

                <span className="sm:block"></span>
              </h1>

          </div>
          </Magnetic>
        </div>
      </section>

  )
}
