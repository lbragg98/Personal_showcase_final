import { useMemo, useState } from "react"
import styles from "./App.module.css"

import seedProjects from "./utils/seedProjects.js"

import Header from "./components/Header/Header.jsx"
import ProjectForm from "./components/ProjectForm/ProjectForm.jsx"
import ProjectSearch from "./components/ProjectSearch/ProjectSearch.jsx"
import ProjectList from "./components/ProjectList/ProjectList.jsx"
import EmptyState from "./components/EmptyState/EmptyState.jsx"

export default function App() {
  const [projects, setProjects] = useState(() => seedProjects())
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = useMemo(() => {
    const q = searchTerm.toLowerCase().trim()
    if (!q) return projects
    return projects.filter(
      (p) =>
        (p.title || "").toLowerCase().includes(q) ||
        (p.description || "").toLowerCase().includes(q)
    )
  }, [projects, searchTerm])

  function handleAddProject(data) {
    setProjects((prev) => [
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: data.title,
        description: data.description,
        image: data.image || "",
        link: data.link || "",
        createdAt: Date.now(),
      },
      ...prev,
    ])
  }

  function handleDeleteProject(id) {
    setProjects((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <ProjectForm onAddProject={handleAddProject} />

          <ProjectSearch value={searchTerm} onChange={setSearchTerm} />

          {filteredProjects.length === 0 ? (
            <EmptyState hasProjects={projects.length > 0} searchTerm={searchTerm} />
          ) : (
            <ProjectList projects={filteredProjects} onDelete={handleDeleteProject} />
          )}
        </main>
      </div>
    </div>
  )
}
