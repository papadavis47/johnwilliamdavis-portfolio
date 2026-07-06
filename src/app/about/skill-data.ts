import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Container,
  Database,
  FileCode,
  FolderCode,
  GitBranch,
  Server,
  Terminal,
  Wrench,
} from 'lucide-react'

export interface Skill {
  name: string
  icon: LucideIcon
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'TypeScript', icon: FileCode },
      { name: 'Rust', icon: Terminal },
      { name: 'Go', icon: Terminal },
      { name: 'Zig', icon: Terminal },
      { name: 'Python', icon: FileCode },
    ],
  },
  {
    title: 'Frontend',
    icon: Terminal,
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Server },
      { name: 'Astro', icon: Server },
      { name: 'TanStack Start', icon: Code2 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Bun', icon: Server },
      { name: 'Deno', icon: Server },
      { name: 'PostgreSQL', icon: Database },
      { name: 'Turso Cloud', icon: Database },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Linux', icon: Terminal },
      { name: 'Docker', icon: Container },
      { name: 'Zed', icon: FolderCode },
      { name: 'Amp', icon: FileCode },
    ],
  },
]

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const itemVariants = {
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
