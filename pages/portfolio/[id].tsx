import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

interface Project {
  title: string;
  description: string;
}

const ProjectPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    if (id) {
      setProject({
        title: `Project ${id}`,
        description: 'Project description...'
      })
    }
  }, [id])

  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectPage
