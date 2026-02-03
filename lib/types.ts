// Project Data
export interface ProjectStat {
  label: string
  val: string
  color: string
}

export interface ProjectTag {
  name: string
}

// Skills Data
export interface SkillCategory {
  label: string
  status: string
  val: string
  color: string
}

export interface SkillData {
  frontend: string[]
  backend: string[]
}

// Experience Data
export interface Commit {
  hash: string
  role: string
  company: string
  date: string
  head: boolean
  branch?: string
  merge?: boolean
  details: {
    title: string
    description: string
    achievements: string[]
    technologies: string[]
    period: string
    location?: string
  }
}

// Status Bar
export interface StatusBarProps {
  line?: string
  col?: string
  lang?: string
  icon?: string
}

// Contact Form
export interface MessageData {
  name: string
  email?: string
  message: string
}
