import { motion, useTransform } from "framer-motion";

const Rotating = ({ scrollYProgress, width, height }) => {
  const rotateForward1 = useTransform(scrollYProgress, [1, 0], [-360, 360]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.svg
        style={{ rotate: rotateForward1, width: width, height: height, fill: "rgb(51 65 85)", }}
        
        animate={{ rotate: 360 }}
        transition={{ duration: Infinity, ease: "linear", repeat: Infinity }}
        viewBox="0 0 300 300"
        className="md:w-[700px] md:h-[700px]"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <text fill="#334155">
          <textPath xlinkHref="#circlePath" className="text-xl">
           • My Works - My Works - My Works •
          </textPath>
        </text>
      </motion.svg>
    </div>
  );
};

export default Rotating;
