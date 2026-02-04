import styles from "./ProjectSearch.module.css"

export default function ProjectSearch({ value, onChange }) {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search Projects"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
