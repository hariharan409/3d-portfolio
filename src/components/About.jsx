import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useDispatch, useSelector } from "react-redux";
import { myAIVideo } from "../assets";
import { VideoPlayer } from "./VideoPlayer";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { updateLikes } from "../store/slices/githubSlice";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{max: 45,scale: 1,speed: 450}}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const dispatch = useDispatch();
  const careerDuration = useSelector((state) => state.career.careerDuration);
  const {isLiked,likeCount} = useSelector((state) => state.github);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <ul className="list-disc marker:text-[#915EFF] pl-5">
          <li>
          🚀 Full-Stack Developer with {careerDuration} years of experience at Keppel, Singapore, skilled in React, React Native, Node.js, Java Spring Boot, and AWS. Specializing in scalable web and mobile applications.
          </li>
          <li>
            📚 Currently pursuing MTech in Software Engineering (long-distance) at BITS Pilani, expanding expertise in modern development and cloud computing.
          </li>
          <li>
            🔧 Throughout my career, I have worked on end-to-end development of applications, integrating frontend, backend, and cloud solutions to deliver seamless user experiences. My expertise extends to Redux, React Hook Form, i18n (internationalization), authentication, and API integrations.
          </li>
          <li>
            🌍  As an advocate for open-source development, I have contributed to various npm packages, including my own world-information package, which provides structured geographical data. Additionally, I am working on a customizable React sidebar component to enhance UI/UX in modern applications.
          </li>
          <li>
            💡 My problem-solving skills and deep understanding of software project management help me build robust and maintainable solutions.
          </li>
        </ul>
      </motion.p>

      <div className="w-full mt-20 flex flex-col justify-center items-center gap-y-10">
        <VideoPlayer file={myAIVideo} />
        <div className="flex items-center gap-x-4">
          <span className="font-bold">Tap to give your support!</span>
          <button className="mr-5 flex items-center" onClick={() => dispatch(updateLikes())}>
              {
                isLiked
                ? <HeartSolid className="w-7 h-7 text-red-600" />
                : <HeartOutline className="w-7 h-7 text-gray-400 animate-pulse" />
              }<span className="text-base">({likeCount})</span>
          </button>
        </div>
      </div>

      <div className='mt-20 flex justify-center overflow-x-auto overflow-y-hidden gap-10 p-6'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
