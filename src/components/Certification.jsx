import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, professionalCertificate } from "../assets";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({
  index,
  name,
  description,
  specialization,
  image,
  certificateLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(certificateLink, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={professionalCertificate}
                alt='professional-certificate'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[17px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {specialization.map((tech) => (
            <p
              key={`${name}-${tech.name}`}
              className={`text-[14px] ${tech.color}`}
            >
              #{tech.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certification = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Career highlights</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Throughout my career, I have actively pursued professional development and earned several certifications in key areas. 
          Below is a list of the certifications I have completed, along with the attached certificate links for verification. 
          These certifications reflect my commitment to enhancing my skills and staying up-to-date with industry standards.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certifications.map((certificate, index) => (
          <CertificationCard key={`project-${index}`} index={index} {...certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "");
