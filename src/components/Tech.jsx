import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
const Skills = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}>
        <motion.div variants={textVariant(0)}>
          {/* <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p> */}
          <h2 className={`${styles.sectionHeadText} text-center`}
          style={{marginBottom: "40px"}}
          >
            Tools technologies
          </h2>
        </motion.div>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-20 h-20" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
