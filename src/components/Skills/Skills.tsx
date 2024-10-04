import styles from "./Skills.module.css";

export function Skills() {
  const {
    button,
    container,
    title,
    myImg,
    mainContainer,
    skills,
    imgContainer,
  } = styles;

  return (
    <div className={mainContainer}>
      <div className={imgContainer}>
        <img
          className={myImg}
          src="skillsImg.jpg"
          alt="Soukayna alala picture"
        />
      </div>
      <div className={container}>
        <div className={title}>My Skills</div>
        <div className={skills}>
          <div>React</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>GIt</div>
        </div>
        <button className={button}>My resume</button>
      </div>
    </div>
  );
}
