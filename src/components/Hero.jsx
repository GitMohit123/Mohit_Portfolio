import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import meta from "../assets/profile.png";

const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Coding Wizard", "Web developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backdelay: 1000,
      loop: true,
      cursorChar: "<",
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="`relative w-full mx-auto`">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Mohit </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A FreeLancer, I develop
            <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>

        <div className="flex flex-col justify-end sm:mx-24 sm:mt-5 hidden sm:block">
          <img className="sm:h-96 sm:rounded-full border-4 border-[#915EFF]" src={meta} alt="" />
        </div>
      </div>
      <div className="flex sm:justify-start justify-around items-center max-w-7xl mx-auto sm:mx-40 mt-72 sm:mt-96">
        <div className="hidden sm:block">
          <lottie-player
            src="https://lottie.host/d95552b1-396a-4e6b-b803-eb34018e0717/i6VBMAFOeC.json"
            background="##fff"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
        <h1 className={`${styles.heroSubText} mt-2 text-white-100`}>
          I'm a <span className="text-[#915EFF]" ref={el} />
        </h1>
      </div>
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
