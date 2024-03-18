import React from 'react'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';


const School = ({i, title, description, src, url, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1])
  const scale = useTransform(progress, range, [1, targetScale]);


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

  const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}

  return (
    <div className="text-white flex items-center justify-center sticky top-0 h-screen mx-5">
    <motion.div 
    style={{backgroundColor: color, scale, top:`calc( -20vh + ${i * 30}px)`}} 
    className="text-center flex flex-col relative h-500 p-10 top-1/4 text-slate-700 transform origin-top rounded-lg my-10">
      <h1
        className="bg-slate-700 bg-clip-text text-2xl font-bold text-transparent sm:text-5xl my-10"
      > 
        {title}
      </h1>
      <p className="mt-4 sm:text-xl/relaxed p-5">
        {description}
      </p>

    </motion.div>
</div>



  )
}

export default School
