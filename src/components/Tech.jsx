import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { languages, technologies } from "../constants";

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
				Languages
			</p>
			<div className="flex flex-wrap gap-10 justify-center items-center mb-4">
				{languages.map((skill) => (
					<div
						className="block-container rounded-xl w-16 h-16 sm:w-20 sm:h-20 bg-slate-300 flex flex-col justify-center items-center"
						key={skill.name}
					>
						<div className="btn-front rounded-3xl flex justify-center items-center">
							<img
								src={skill.icon}
								alt={skill.name}
								className="w-3/4 h-3/4 object-contain"
							/>
						</div>
						<div className="text-center text-slate-300 text-sm sm:text-base translate-y-12 sm:translate-y-16">
							{skill.name}
						</div>
					</div>
				))}
			</div>

			<p
				className={`${styles.sectionSubText} ${styles.paddingY} flex justify-center items-center`}
			>
				Technologies
			</p>
			<div className="flex flex-wrap gap-10 justify-center items-center">
				{technologies.map((skill) => (
					<div
						className="block-container rounded-xl w-16 h-16 sm:w-20 sm:h-20 bg-slate-300 flex flex-col justify-center items-center"
						key={skill.name}
					>
						<div className="btn-front rounded-3xl flex justify-center items-center">
							<img
								src={skill.icon}
								alt={skill.name}
								className="w-3/4 h-3/4 object-contain"
							/>
						</div>
						<div className="text-center text-slate-300 text-sm sm:text-base translate-y-12 sm:translate-y-16">
							{skill.name}
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default SectionWrapper(Tech, "");
