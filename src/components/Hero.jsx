import React from "react";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm &nbsp;<span className="text-[#915eff]">Mohamed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm an AWS Cloud/DevOps Engineer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
