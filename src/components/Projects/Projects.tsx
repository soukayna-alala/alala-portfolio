import styles from "./Projects.module.css";
import { projectList } from "./contants.ts";
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
    imgContainer,
  } = styles;
  return (
    <main className={main} id="projects">
      <div className={title}>My Projects</div>
      <div className={container}>
        {projectList.map((i) => (
          <div className={projectContainer} key={i.heading}>
            <div className={imgContainer}>
              <img className={img} src={i.imgSrc} alt={i.imgAlt} />
            </div>
            <div className={content}>
              <h4 className={h4}>{i.heading}</h4>
              <p className={paragraph}>{i.description}</p>
              <a className={github} href={i.gitHubLink}>
                Github <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
