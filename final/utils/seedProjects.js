export function seedProjects() {
  const now = Date.now()

  return [
    {
      id: crypto.randomUUID(),
      title: "Project 1",
      description: "Description of the project",
      createdAt: now - 300000,
    },
    {
      id: crypto.randomUUID(),
      title: "Project 2",
      description: "Description of the project",
      createdAt: now - 200000,
    },
    {
      id: crypto.randomUUID(),
      title: "Project 3",
      description: "Description of the project",
      createdAt: now - 100000,
    },
  ]
}
