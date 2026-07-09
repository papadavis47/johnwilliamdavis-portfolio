'use client'

import { css } from 'styled-system/css'
import { merriweather } from '@/app/fonts'
import ProjectCard from './ProjectCard'
import { projects } from './projects'

export default function ProjectsContent() {
  return (
    <div
      className={css({
        maxWidth: '900px',
        mx: 'auto',
        px: '4',
        py: '12',
      })}
    >
      <h1
        className={`${merriweather.className} ${css({
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'text',
          mb: '10',
        })}`}
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
    </div>
  )
}
