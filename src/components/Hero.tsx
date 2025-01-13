"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import leaf1 from "../assets/leaf1.png";
import leaf2 from "../assets/leaf2.png";
import leaf3 from "../assets/leaf3.png";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";
import StarsCanvas from "./Stars";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9),#002600_20%,#1b4d1b_35%,#4d804d_60%,#8fbf8f_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#002600)]">
        <StarsCanvas />
      </div>

      <div className="relative">
        <div className="text-8xl font-semibold text-center relative">
          <h1 className="text-[#ffffff8a]">Hey, I&apos;m</h1>
          <h1 className="text-[#ffffff]">Sebastián Muñoz</h1>

          <motion.div
            className="absolute left-[80px] top-[30px] translate-y-[-50%] cursor-grab hidden md:block"
            drag
            animate={{
              y: [0, -5, 0], // Movimiento de balanceo hacia arriba y abajo
              rotate: [-5, 5, -5], // Rotación suave de un lado a otro
            }}
            transition={{
              duration: 10, // Duración del ciclo completo de animación
              repeat: Infinity, // Repetición infinita
              ease: "easeInOut", // Suavizado de la animación
            }}
          >
            <Image
              src={leaf1}
              alt="left leaf"
              height="150"
              width="150"
              draggable="false"
            />
          </motion.div>

          <motion.div
            className="absolute right-[50px] top-[30px] translate-y-[-50%] cursor-grab hidden md:block"
            drag
            animate={{
              y: [0, 5, 0], // Movimiento de balanceo
              rotate: [5, -5, 5], // Rotación hacia el otro lado
            }}
            transition={{
              duration: 10, // Duración del ciclo
              repeat: Infinity, // Repetición infinita
              ease: "easeInOut", // Suavizado
            }}
          >
            <Image
              src={leaf2}
              alt="right leaf"
              height="150"
              width="150"
              draggable="false"
            />
          </motion.div>

          <motion.div
            className="absolute left-[50%] top-[-100px] translate-x-[-50%] cursor-grab"
            drag
            animate={{
              y: [0, -2, 0], // Movimiento de balanceo vertical
              rotate: [-2, 2, -2], // Pequeña rotación
            }}
            transition={{
              duration: 10, // Tiempo de un ciclo completo
              repeat: Infinity, // Animación infinita
              ease: "easeInOut",
            }}
          >
            <Image
              src={leaf3}
              alt="top leaf"
              height="140"
              width="140"
              draggable="false"
            />
          </motion.div>
        </div>
        <Navbar />

        <div className="flex flex-col justify-center w-full h-[400px] overflow-hidden md:h-[700px] lg:h-[900px] z-10">
          <Scene />
          <p className="text-center text-5xl pb-10 max-w-[500px] mx-auto mt-8 text-white z-20">
          I&apos;m a full-stack{" "}
          <span className="font-semibold italic">(and nature lover)</span>{" "}
          software developer
        </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
