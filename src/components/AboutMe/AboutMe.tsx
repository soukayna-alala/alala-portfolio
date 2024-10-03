import styles from "./AboutMe.module.css";

export function AboutMe() {
  const { paragraph, container } = styles;

  return (
    <div className={container}>
      {/*<h4 className={h4}>About me</h4>*/}
      <p className={paragraph}>
        I'm a Junior Frontend developer based in London.
        <br /> I entered the world of coding since 2022 and <br /> I'm
        continuously practicing and <br /> working hard to develop and <br />
        learn more...
      </p>
    </div>
  );
}
