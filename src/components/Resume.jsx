import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Resume = () => {
  return (
    <div className="flex" id="resume">
        <div  className="sm:px-16 px-6 sm:py-4 py-10 max-w-7xl mx-auto relative z-0">
        <h1  className={`${styles.sectionSubText} mb-5 sm:block hidden`}>Click here to downlaod my resume</h1>
        <button
            type="submit"
            className="bg-tertiary py-3 px-8 mx-20 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
        <a href="https://drive.google.com/file/d/1DAg3uOYmypIKwJIwwhs2-7gnzx8pJD9P/view?usp=sharing" title="Download CV">Download CV</a>
        </button>
        </div>
    </div>
  );
};

export default SectionWrapper(Resume,"");
