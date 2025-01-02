import styles from "./Projects.module.css";
import { projectList } from "./constants.ts";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button/Button.tsx";

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
  } = styles;
  return (
    <section className={main} id="projects">
      <div className={title}>My Projects</div>
      <div className={container}>
        {projectList.map((i) => (
          <div className={projectContainer} key={i.heading}>
            <img className={img} src={i.imgSrc} alt={i.imgAlt} />
            <div className={content}>
              <h4 className={h4}>{i.heading}</h4>
              <p className={paragraph}>{i.description}</p>

              <Button
                label={"Github"}
                size={"small"}
                variant={"primary"}
                icon={faArrowRight}
                isAnchor={true}
                href={i.gitHubLink}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
