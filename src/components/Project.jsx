import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";

const ProjectCard = ({
  name,
  duration,
  description,
  videoUrl,
  videoGif,
  techStack
}) => {
  return (
    <div className="bg-tertiary sm:w-[360px] w-full h-full p-5">
        <div className='relative w-full h-[230px]'>
          <ScratchToReveal
            width={325}
            height={240}
            minScratchPercentage={70}
            className="rounded-2xl"
            gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
          >
            <a target="_blank" href={videoUrl}>
              <img src={videoGif} autoPlay loop muted playsInline alt='project_image' className='w-full h-full object-cover rounded-2xl'/>
            </a>
            </ScratchToReveal>
        </div>
        <div>
      </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[17px] capitalize'>{name}</h3>
          <h5 className='text-white font-bold text-[13px] capitalize'>{duration}</h5>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {techStack.map((tech) => (
            <p
              key={`${tech}`}
              className={`text-secondary text-[14px]`}
            >
              #{tech}
            </p>
          ))}
        </div>
    </div>
  );
};


const Project = () => {

    return (
        <>
          <motion.div>
            <p className={`${styles.sectionSubText} `}>My projects</p>
            <h2 className={`${styles.sectionHeadText}`}>Check out my latest works</h2>
          </motion.div>
    
          <div className='w-full flex'>
            <motion.p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
            </motion.p>
          </div>
            <div className='mt-20 flex flex-wrap gap-7'>
            {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} {...project} />
            ))}
          </div>
        </>
      );
}

export default SectionWrapper(Project, "project");