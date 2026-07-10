'use client'

import { css } from 'styled-system/css'
import PageContainer from '@/design-system/PageContainer'
import ProjectCard from './ProjectCard'
import { projects } from './projects'

export default function ProjectsContent() {
  return (
    <PageContainer width="wide">
      <h1
        className={css({
          textStyle: 'h1',
          color: 'text',
          mb: '10',
        })}
      >
        Projects
      </h1>

      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridAutoRows: '1fr',
          gap: '6',
          md: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
        })}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </PageContainer>
  )
}
