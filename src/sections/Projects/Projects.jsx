import styles from "./ProjectsStyles.module.css";
import godot from "../../assets/godot.jpg";
import react from "../../assets/reacttt.png";
import ProjectCard from "../../common/ProjectCard";

function projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={godot}
          link="https://github.com/jalaafarhat/Godot-Knight-Game"
          h3="Knight Game"
          p="Knight Game using Godot 4"
        />
        <ProjectCard
          src={react}
          link="https://github.com/jalaafarhat/jalaa-farhat-portfolio"
          h3="Portfolio Website"
          p="Portfolio Website using React"
        />
      </div>
    </section>
  );
}

export default projects;
