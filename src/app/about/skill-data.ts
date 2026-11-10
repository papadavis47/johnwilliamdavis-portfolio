import { itemVariants } from '@/design-system/motion'
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
      { name: 'Rust', icon: Terminal },
      { name: 'TypeScript', icon: FileCode },
      { name: 'Python', icon: FileCode },
    ],
  },
  {
    title: 'Frontend',
    icon: Terminal,
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'Vue', icon: Code2 },
      { name: 'Next.js', icon: Server },
      // { name: 'Nuxt.js', icon: Server },
      { name: 'Astro', icon: Server },
      { name: 'TanStack Start', icon: Code2 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Axum', icon: Server },
      { name: 'Postgres', icon: Database },
      { name: 'Bun', icon: Server },
      // { name: 'Deno', icon: Server },
      { name: 'Supabase', icon: Database },
      { name: 'Turso Cloud', icon: Database },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      // { name: 'Git', icon: GitBranch },
      // { name: 'Linux', icon: Terminal },
      // { name: 'Docker', icon: Container },
      { name: 'Zed', icon: FolderCode },
      { name: 'Amp', icon: FileCode },
      { name: 'Claude Code', icon: FileCode },
      { name: 'Delta', icon: FolderCode },
      { name: 'Ghostty', icon: Terminal },
    ],
  },
]

// Tech I Know Well keeps its staggered rise; the rest of the page only fades
export const riseVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    ...itemVariants.visible,
    y: 0,
  },
}
