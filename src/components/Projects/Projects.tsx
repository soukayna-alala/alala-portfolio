import styles from "./Projects.module.css";
import { projectList } from "./constants.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Projects() {
  const {
    h4,
    paragraph,
    main,
    content,
    title,
    container,
    img,
    projectContainer,
    github,
    arrowRight,
  } = styles;
  return (
    <section className={main}>
      <div className={title}>My Projects</div>
      <div className={container}>
        {projectList.map((i) => (
          <div className={projectContainer} key={i.heading}>
            <img className={img} src={i.imgSrc} alt={i.imgAlt} />
            <div className={content}>
              <h4 className={h4}>{i.heading}</h4>
              <p className={paragraph}>{i.description}</p>
              <a className={github} href={i.gitHubLink}>
                Github
                <FontAwesomeIcon className={arrowRight} icon={faArrowRight} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
