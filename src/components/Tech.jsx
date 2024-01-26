import React from "react"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"

import { styles } from "../styles"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { frontend, backend, others } from "../constants"

const Tech = () => {
  return (
    <motion.div
      variants={textVariant()}
      className="-mt-16"
    >
      <p className="flex justify-center items-center text-white text-[24px] font-bold">
        My Skills
      </p>

      <p
        className={`${styles.sectionSubText} ${styles.paddingY} flex justify-center items-center`}
      >
        Front-End
      </p>
      <div className="flex flex-wrap gap-12 justify-center items-center">
        {frontend.map((skill) => (
          <div
            className="block-container w-20 h-20"
            key={skill.name}
          >
            <div className="btn-front rounded-3xl flex justify-center items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <p
        className={`${styles.sectionSubText} ${styles.paddingY} flex justify-center items-center`}
      >
        Back-End
      </p>
      <div className="flex flex-wrap gap-12 justify-center items-center">
        {backend.map((skill) => (
          <div
            className="block-container w-20 h-20"
            key={skill.name}
          >
            <div className="btn-front rounded-3xl flex justify-center items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <p
        className={`${styles.sectionSubText} ${styles.paddingY} flex justify-center items-center`}
      >
        Others
      </p>
      <div className="flex flex-wrap gap-12 justify-center items-center">
        {others.map((skill) => (
          <div
            className="block-container w-20 h-20"
            key={skill.name}
          >
            <div className="btn-front rounded-3xl flex justify-center items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Tech, "")
