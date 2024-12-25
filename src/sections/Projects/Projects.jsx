import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";

function projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a
          href="https://github.com/jalaafarhat/Godot-Knight-Game"
          target="_blank"
        >
          <img className="hover" src={viberr} alt="Viberr logo" />
          <h3>Knight Game</h3>
          <p>Knight Game using Godot 4</p>
        </a>
      </div>
    </section>
  );
}

export default projects;
