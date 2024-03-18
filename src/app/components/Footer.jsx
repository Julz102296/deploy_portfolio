import React, { useEffect, useRef, useState } from "react";
import { useScroll, transform, useTransform, motion } from 'framer-motion';
import Contact from "../contact";
import Rounded from "../common/RoundedButton/index";
import Magnetic from "../common/Magnetic/index";
import Link from "next/link";

export default function Footer() {


    const container = useRef();
    const paths = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect( () => {
        scrollYProgress.on("change", e => {
            paths.current.forEach( (path, i) => {
                const value = transform(e, [0, 1], [-40 + (i * 40), (i * 40)])
                path.setAttribute("startOffset", value + "%");
            })
        })
    }, [])


    return (
        <div ref={container}>
            <svg className="w-full mb-40" viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                <text className="text-[8px] uppercase" style={{fill: "#334155"}}>
                    {
                        [...Array(5)].map((_, i) => {
                            return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">Let's work together!</textPath>
                        })
                    }
                </text>
            </svg>
            <Logos scrollProgress={scrollYProgress}/>
        </div>
    )
}




const Logos = ({scrollProgress}) => {

    const y = useTransform(scrollProgress, [0, 1], [-700, 0])
    return (
        <div className="h-full overflow-hidden bg-slate-200">
        <div className="hero-buttons m-10 items-center flex flex-col justify-center gap-5">

            {/* <p className="text-3xl font-extrabold sm:text-5xl text-slate-700 z-50">Contact Me</p> */}

            <motion.div style={{y}} className="h-full bg-slate-200 flex justify-center gap-5 p-10">
                {/* contact here */}

                <Contact />

            </motion.div>
            
            </div>
        </div>
    )
}