import styles from "./ProjectsStyles.module.css";
import react from "../../assets/reacttt.png";
import ProjectCard from "../../common/ProjectCard";
import Movie from "../../assets/movie.jpg";

function projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={react}
          link="https://github.com/jalaafarhat/jalaa-farhat-portfolio"
          h3="Portfolio Website"
          p="Portfolio Website using React"
        />

        <ProjectCard
          src={Movie}
          link="https://github.com/jalaafarhat/MoviesReview"
          h3="MoviesReview"
          p="Express & MongoDB website for managing movie links and reviews."
        />
      </div>
    </section>
  );
}

export default projects;
