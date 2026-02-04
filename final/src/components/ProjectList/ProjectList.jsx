import styles from "./ProjectList.module.css"
import ProjectCard from "../ProjectCard/ProjectCard.jsx"

export default function ProjectList({ projects, onDelete }) {
  return (
    <div className={styles.list}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
