export interface NavItem {
  id: string
  name: string
  icon: string
  iconColor: string
  path: string
}

export const navigationData: NavItem[] = [
  {
    id: 'grimreaper',
    name: 'grimreaper.tsx',
    icon: 'javascript',
    iconColor: 'blue',
    path: '/grimreaper'
  },
  {
    id: 'saviorperu',
    name: 'saviorperu.tsx',
    icon: 'javascript',
    iconColor: 'blue',
    path: '/saviorperu'
  },
  {
    id: 'videogames',
    name: 'videogames.tsx',
    icon: 'javascript',
    iconColor: 'blue',
    path: '/videogames'
  }
]
