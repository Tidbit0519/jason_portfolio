import React from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m an Undergraduate in Computer Science at Brigham Young University-Hawaii, expecting to graduate in Dec 2024. I&apos;m a quick learner and an efficient team-worker, and I aim to create efficient, and user-friendly solutions that solve real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")
