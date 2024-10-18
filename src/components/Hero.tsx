"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import leaf1 from "../assets/leaf1.png";
import leaf2 from "../assets/leaf2.png";
import leaf3 from "../assets/leaf3.png";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import { useState } from "react";
import Navbar from "./Navbar";

const Hero = () => {
    const [imageSrc, setImageSrc] = useState(profile)
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),#002600_20%,#1b4d1b_35%,#4d804d_60%,#8fbf8f_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#002600)]"></div>

        <div className="relative ">
            <div className="text-8xl font-semibold text-center">
                <h1 className="text-[#ffffff8a]">Hey, I&apos;m</h1>
                <h1 className="text-[#ffffff]">Jorge Sebastián</h1>
            </div>
            <motion.div
            className="absolute left-[15%] bottom-[8%] translate-y-[-50%] cursor-grab"
            drag
            >
            <Image
                src={leaf1}
                alt="left leaf"
                height="190"
                width="190"
                draggable="false"
            />
            </motion.div>

            <motion.div
            className="absolute right-[20px] bottom-[-5%] translate-y-[-50%] cursor-grab"
            drag
            >
            <Image
                src={leaf2}
                alt="right leaf"
                height="190"
                width="190"
                draggable="false"
            />
            </motion.div>

            <motion.div
            className="absolute right-[23%] bottom-[-50px] translate-x-[-50%] cursor-grab"
            drag
            >
            <Image
                src={leaf3}
                alt="top leaf"
                height="190"
                width="190"
                draggable="false"
            />
            </motion.div>

            <Navbar />

            <Image 
                src={imageSrc} 
                alt="profile" 
                className="mx-auto h-auto w-auto" 
                onMouseEnter={()=>setImageSrc(profile2)}
                onMouseLeave={()=>setImageSrc(profile)}
                />
        </div>
    </div>
  );
};

export default Hero;
