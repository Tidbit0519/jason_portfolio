import React from "react"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"

import { styles } from "../styles"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <motion.div
      variants={textVariant()}
      className="-mt-8"
    >
      <p
        className="flex justify-center items-center text-white text-[24px] font-bold"
      >
        My Skills
      </p>
      <div className={`${styles.paddingY} flex flex-row flex-wrap justify-center gap-10`}>
        {technologies.map((technology) => (
          <div
            className="sm:w-28 sm:h-28 w-20 h-24"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Tech, "")
