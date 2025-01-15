import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/CartoonJalaa.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import gitHubLight from "../../assets/github-light.svg";
import gitHubDark from "../../assets/github-dark.svg";
import CV from "../../assets/Jalaa-Farhat-CV.pdf";

import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  //if we are in light do the light mode otherwise do the dark
  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const gitHubIcon = theme === "light" ? gitHubLight : gitHubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Jalaa <br /> Farhat
        </h1>
        <h2>
          Software Developer <br />
          Full-Stack Developer
        </h2>
        <span>
          <a href="https://www.linkedin.com/in/jalaafarhat/" target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
          <a href="https://github.com/jalaafarhat" target="_blank">
            <img src={gitHubIcon} alt="linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate Software Developer and Full-Stack Developer eager to
          turning innovative ideas into reality.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
