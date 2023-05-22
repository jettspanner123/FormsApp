"use client";
import Image from "next/image";
import backgroundImage from "C://Users/uddes/Downloads/windows-11-dark-mode-blue-stock-official-3840x2400-5630.jpg";
import { motion } from "framer-motion";
const BackgroundImage = () => {
  let screenHeight = window.innerHeight;
  let screenWidth = window.innerWidth;
  return (
    <motion.div className="absolute z-[-999] rotate_it  w-[100vw] h-[100vh] blur-3xl">
      <Image
        src={backgroundImage}
        alt=""
        height={screenHeight}
        width={screenWidth}
      />
    </motion.div>
  );
};

export default BackgroundImage;
