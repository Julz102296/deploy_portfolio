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

    // <div ref={container} className={styles.cardContainer}>
    //   <motion.div 
    //     style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
    //     className={styles.card}
    //   >
    //     <h2>{title}</h2>
    //     <div className={styles.body}>
    //       <div className={styles.description}>
    //         <p>{description}</p>
    //         <span>
    //           <a href={url} target="_blank">See more</a>
    //           <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
    //           </svg>
    //         </span>
    //       </div>

    //       <div className={styles.imageContainer}>
    //         <motion.div
    //           className={styles.inner}
    //           style={{scale: imageScale}}
    //         >
    //           <Image
    //             fill
    //             src={`/School/${src}`}
    //             alt="image" 
    //           />
    //         </motion.div>
    //       </div>

    //     </div>
    //   </motion.div>
    // </div>

    // <div class="cardContainer h-screen flex items-center justify-center sticky top-0">
    //   <div class="card flex flex-col relative top-1/4 h-500 w-1000 rounded-25 p-50 transform origin-top">
    //     <h2 class="text-center text-28px mb-0">Title</h2>
    //     <div class="body flex gap-50 mt-50">
    //       <div class="description w-40 relative top-10%">
    //         <p class="text-16px">
    //           <span class="text-28px font-Title mr-10px">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
    //         </p>
    //         <span class="flex items-center gap-10">
    //           <a href="#" class="text-12px underline cursor-pointer">Link</a>
    //           <a href="#" class="text-12px underline cursor-pointer">Another Link</a>
    //         </span>
    //       </div>
    //       <div class="imageContainer w-60 relative">
    //         <div class="inner w-full h-full overflow-hidden">
    //           <img src="your-image-url.jpg" alt="Image" class="object-cover w-full h-full" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
