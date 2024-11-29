import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faCss3,
  faHtml5,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Skills() {
  const {
    resumeHyperlink,
    title,
    myImg,
    mainContainer,
    skills,
    imgContainer,
    tsIcon,
    icons,
    skill,
    span,
    resumeArrow,
    myResume,
  } = styles;

  return (
    <>
      <div className={title}>My Skills</div>

      <div className={mainContainer} id="skills">
        <div className={imgContainer}>
          <img
            className={myImg}
            src="skillsImg.jpg"
            alt="Soukayna alala picture"
          />
        </div>

        <div className={skills}>
          <div className={skill}>
            <FontAwesomeIcon className={icons} icon={faReact} />
            <span className={span}>React</span>
          </div>

          <div className={skill}>
            <FontAwesomeIcon className={icons} icon={faJs} />
            <span className={span}>JavaScript</span>
          </div>
          <div className={skill}>
            <FontAwesomeIcon className={icons} icon={faJs} />
            <span className={span}>API</span>
          </div>
          <div className={skill}>
            <FontAwesomeIcon className={icons} icon={faJs} />
            <span className={span}>Vite</span>
          </div>
          <div className={skill}>
            <img
              className={tsIcon}
              src="typescript.svg"
              alt="typescript icon"
            />
            <span className={span}>TypeScript</span>
          </div>
          <div className={skill}>
            <FontAwesomeIcon className={icons} icon={faHtml5} />
            <span className={span}>HTML</span>
          </div>
          <div className={skill}>
            <FontAwesomeIcon className={icons} icon={faCss3} />
            <span className={span}>CSS</span>
          </div>
          <div className={skill}>
            <FontAwesomeIcon className={icons} icon={faGit} />
            <span className={span}>GIt</span>
          </div>
        </div>
        <a className={resumeHyperlink}>
          <span className={myResume}>My resume</span>
          <FontAwesomeIcon className={resumeArrow} icon={faArrowRight} />
        </a>
      </div>
    </>
  );
}
