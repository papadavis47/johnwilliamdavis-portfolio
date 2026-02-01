'use client'

import { motion } from 'motion/react'
import { css } from '../../../styled-system/css'
import { merriweather } from '@/app/fonts'
import {
  Code2,
  Database,
  Terminal,
  Wrench,
  FileCode,
  Server,
  Container,
  GitBranch,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Skill {
  name: string
  icon: LucideIcon
}

interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'TypeScript', icon: FileCode },
      { name: 'Rust', icon: Terminal },
      { name: 'Go', icon: Terminal },
      { name: 'Python', icon: FileCode },
    ],
  },
  {
    title: 'Frontend',
    icon: Terminal,
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Server },
      { name: 'Svelte', icon: Code2 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'PostgreSQL', icon: Database },
      { name: 'SQLite', icon: Database },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Docker', icon: Container },
      { name: 'Linux', icon: Terminal },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
}

function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = skill.icon
  return (
    <motion.div
      variants={itemVariants}
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '2',
        px: '4',
        py: '2',
        bg: 'surface',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'muted/20',
        transition: 'all 200ms',
        _hover: {
          borderColor: 'primary',
          transform: 'translateY(-2px)',
        },
      })}
    >
      <Icon
        size={18}
        className={css({ color: 'primary', flexShrink: 0 })}
      />
      <span
        className={css({
          fontSize: '0.9rem',
          color: 'text',
          whiteSpace: 'nowrap',
        })}
      >
        {skill.name}
      </span>
    </motion.div>
  )
}

function SkillSection({ category }: { category: SkillCategory }) {
  const CategoryIcon = category.icon
  return (
    <motion.div
      variants={itemVariants}
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '4',
      })}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '3',
        })}
      >
        <CategoryIcon
          size={22}
          className={css({ color: 'secondary' })}
        />
        <h3
          className={`${merriweather.className} ${css({
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'text',
          })}`}
        >
          {category.title}
        </h3>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className={css({
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3',
        })}
      >
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function AboutMeContent() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={css({
        maxWidth: '800px',
        mx: 'auto',
        px: '4',
        py: '12',
        md: { py: '16' },
      })}
    >
      <motion.h1
        variants={itemVariants}
        className={`${merriweather.className} ${css({
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'text',
          mb: '8',
          md: { fontSize: '3rem' },
        })}`}
      >
        About Me
      </motion.h1>

      <motion.section
        variants={itemVariants}
        className={css({
          mb: '12',
        })}
      >
        <p
          className={css({
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'text',
            mb: '4',
          })}
        >
          I&apos;m a software developer passionate about building robust, efficient, and
          maintainable systems. My primary focus is on TypeScript, Rust, and Go—languages
          that offer strong type safety and excellent developer experience.
        </p>
        <p
          className={css({
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'muted',
          })}
        >
          I enjoy working across the full stack, from crafting intuitive user interfaces
          with React and Next.js to designing scalable backend services and databases.
          I&apos;m always exploring new technologies and approaches to solve complex problems
          elegantly.
        </p>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2
          className={`${merriweather.className} ${css({
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'text',
            mb: '8',
            md: { fontSize: '2rem' },
          })}`}
        >
          Skills & Technologies
        </h2>
        <div
          className={css({
            display: 'grid',
            gap: '10',
            gridTemplateColumns: '1fr',
            md: { gridTemplateColumns: 'repeat(2, 1fr)' },
          })}
        >
          {skillCategories.map((category) => (
            <SkillSection key={category.title} category={category} />
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
