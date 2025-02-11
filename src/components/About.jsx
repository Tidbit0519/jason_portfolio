import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
				<span className="font-bold">B.S. in Computer Science </span>at Brigham Young
				University-Hawaii, graduated December 2024. A quick learner and an efficient
				team-worker, passionate about creating efficient, and user-friendly solutions
				that solve real-world problems. Experience in full-stack development with tools
				like <span className="font-bold">React, Node.js, ASP.NET Core, and more. </span>
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, "about");
