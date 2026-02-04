import { useState } from "react"
import styles from "./ProjectForm.module.css"

export default function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return

    onAddProject({ title, description })
    setTitle("")
    setDescription("")
  }

  return (
    <section className={styles.card}>
      <h2 className={styles.heading}>Add Project</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Title
          <input
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project title"
          />
        </label>

        <label className={styles.label}>
          Description
          <textarea
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Project description"
          />
        </label>

        <button
          className={styles.button}
          type="submit"
          disabled={!title.trim() || !description.trim()}
        >
          Add
        </button>
      </form>
    </section>
  )
}
