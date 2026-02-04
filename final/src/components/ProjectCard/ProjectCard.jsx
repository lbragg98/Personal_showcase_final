import styles from "./ProjectCard.module.css"

export default function ProjectCard({ project, onDelete }) {
  return (
    <div className={styles.card}>
      <button
        className={styles.delete}
        aria-label={`Delete ${project.title}`}
        onClick={() => onDelete(project.id)}
      >
        ✕
      </button>

      {project.image && project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imageLink}
        >
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
          />
        </a>
      ) : null}

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View Project
          </a>
        ) : null}
      </div>
    </div>
  )
}
