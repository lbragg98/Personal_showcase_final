import styles from "./EmptyState.module.css"

export default function EmptyState({ hasProjects, searchTerm }) {
  if (!hasProjects) {
    return <p className={styles.text}>No projects yet. Add one above.</p>
  }
  return <p className={styles.text}>No projects match "{searchTerm}".</p>
}
