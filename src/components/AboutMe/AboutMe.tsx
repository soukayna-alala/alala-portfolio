import { Typewriter } from "react-simple-typewriter";
import styles from "./AboutMe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function AboutMe() {
  const {
    h1,
    paragraph,
    container,
    aboutMeImage,
    paragraphGap,
    resumeHyperlink,
    myResume,
    resumeArrow,
  } = styles;

  return (
    <>
      <h1 className={h1} id="aboutMe">
        <Typewriter
          words={["Front-End Developer"]}
          loop={1}
          typeSpeed={120}
          delaySpeed={1200}
        />
      </h1>
      <div className={container}>
        <img
          className={aboutMeImage}
          src="aboutMePic.jpg"
          alt="Soukayna Alala's image "
        />
        <div className={paragraphGap}>
          <p className={paragraph}>
            Hi there, my name is Soukayna. I'm 24 years old, and I live in
            London. I entered the world of coding in 2022, and I am continuously
            practicing and working hard to develop my skills.
          </p>
          <p className={paragraph}>
            I am dedicated to building my expertise in front-end development,
            including HTML, CSS, JavaScript, TypeScript, React, and Git.
          </p>
          <p className={paragraph}>
            I am now eager to apply these skills to real-world projects and
            contribute to a collaborative team. I am highly motivated, a quick
            learner, and ready to take on challenges and grow in this field.
          </p>
          <p className={paragraph}>
            I’m also open to volunteer opportunities to gain hands-on experience
            and showcase my abilities. My goal is to keep learning new things,
            improve my skills every day, analyze and solve UI and programming
            issues, and be able to work independently in a team.
          </p>
        </div>
        <a className={resumeHyperlink}>
          <span className={myResume}>My resume</span>
          <FontAwesomeIcon className={resumeArrow} icon={faArrowRight} />
        </a>
      </div>
    </>
  );
}
