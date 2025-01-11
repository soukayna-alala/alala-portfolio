import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faCss3,
  faHtml5,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

export function Skills() {
  const {
    title,
    myImg,
    mainContainer,
    skills,
    imgContainer,
    tsIcon,
    icons,
    skill,
    span,
    viteIcon,
    FigmaIcon,
  } = styles;

  return (
    <>
      <div className={title}>My Skills</div>

      <div className={mainContainer} id="skills">
        <div className={imgContainer}>
          <img
            className={myImg}
            src="soukayna_alala_skills.jpg"
            alt="Soukayna alala image"
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
            <span className={span}>Fetch API</span>
          </div>
          <div className={skill}>
            <img className={viteIcon} src="Vitejs-logo.svg" alt="vite icon" />
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
            <span className={span}>HTML5</span>
          </div>
          <div className={skill}>
            <FontAwesomeIcon className={icons} icon={faCss3} />
            <span className={span}>CSS</span>
          </div>

          <div className={skill}>
            <img
              className={FigmaIcon}
              src="cdnlogo.com_figma.svg"
              alt="figma icon"
            />
            <span className={span}>Figma</span>
          </div>
          <div className={skill}>
            <FontAwesomeIcon className={icons} icon={faGit} />
            <span className={span}>Git</span>
          </div>
        </div>
      </div>
    </>
  );
}
