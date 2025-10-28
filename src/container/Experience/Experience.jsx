import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { themeContext } from "../../App";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../cleint";

import "./Experience.scss";

// Mock data
const mockExperiences = [
  {
    _id: "1",
    year: "2023 - Present",
    works: [
      {
        name: "Senior Full Stack Developer",
        company: "Tech Company",
        desc: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented CI/CD pipelines."
      }
    ]
  },
  {
    _id: "2",
    year: "2021 - 2023",
    works: [
      {
        name: "Full Stack Developer",
        company: "Startup Inc",
        desc: "Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions using modern JavaScript frameworks."
      },
      {
        name: "Frontend Developer",
        company: "Web Solutions",
        desc: "Built responsive and interactive user interfaces for various web applications. Optimized performance and ensured cross-browser compatibility."
      }
    ]
  },
  {
    _id: "3",
    year: "2019 - 2021",
    works: [
      {
        name: "Junior Developer",
        company: "Digital Agency",
        desc: "Worked on various client projects, developing features and fixing bugs. Participated in code reviews and contributed to improving code quality standards."
      }
    ]
  },
  {
    _id: "4",
    year: "2017 - 2019",
    works: [
      {
        name: "Intern",
        company: "Software House",
        desc: "Assisted senior developers in building web applications. Learned best practices and contributed to team projects using HTML, CSS, and JavaScript."
      }
    ]
  }
];

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const { theme } = useContext(themeContext);

  useEffect(() => {
    const query = '*[_type == "experiences"] | order(year desc)';
    
    client.fetch(query)
      .then((data) => {
        // Use fetched data if available, otherwise use mock data
        setExperiences(data.length > 0 ? data : mockExperiences);
      })
      .catch((error) => {
        console.error("Error fetching experiences:", error);
        // Use mock data on error
        setExperiences(mockExperiences);
      });
  }, []);

  return (
    <>
      <h2 className="head-text">Work <span>Experience</span></h2>

      <div className="app__experiences">
        <div className="app__experiences-timeline">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience._id || index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__experience-item"
            >
              <div className="app__experience-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <div className={`app__experience-works ${
                theme === "dark" ? "dark-bg" : ""
              }`}>
                {experience.works && experience.works.map((work, workIndex) => (
                  <motion.div
                    key={`${experience._id}-${workIndex}`}
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__experience-work"
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text" style={{ marginTop: 5 }}>
                      {work.company}
                    </p>
                    <p className="p-text" style={{ marginTop: 10 }}>
                      {work.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "experience",
  "app__whitebg"
);

