import styles from "./ProjectsStyles.module.css";
import godot from "../../assets/godot.jpg";
import react from "../../assets/reacttt.png";
import ProjectCard from "../../common/ProjectCard";
import AI from "../../assets/AI.jpg";
import Movie from "../../assets/movie.jpg";

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
        <ProjectCard
          src={AI}
          link="https://github.com/jalaafarhat/AIContentGenerator"
          h3="AI Content Generator (in progress)"
          p="AI content generator website using MERN stack"
        />

        <ProjectCard
          src={Movie}
          link="https://github.com/jalaafarhat/MoviesReview"
          h3="MoviesReview"
          p="MoviesReview: Express & MongoDB app for managing movie links and reviews."
        />
      </div>
    </section>
  );
}

export default projects;
