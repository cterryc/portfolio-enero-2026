'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Folder,
  File,
  FileJson,
  GitCommit,
  FileText,
  Terminal,
  MoreHorizontal,
  ChevronRight
} from 'lucide-react'
import { navigationData } from '@/data/navigation'
import { useFiles } from '@/context/FileContext'

const iconMap = {
  javascript: File,
  data_object: FileJson,
  history: GitCommit,
  description: FileText,
  terminal: Terminal
}

export default function Sidebar() {
  const pathname = usePathname()
  const { addFile } = useFiles()

  const linkComponent = (
    path: string,
    color = 'gray',
    name: string,
    icon: string
  ) => {
    const Icon = iconMap[icon as keyof typeof iconMap]
    return (
      <Link
        href={path}
        className={`flex items-center gap-2 px-3 py-1.5 w-full text-left hover:bg-white/5 group ${
          pathname === path
            ? 'bg-primary/10 border-l-2 border-primary'
            : 'hover:bg-white/5'
        }`}
        onClick={() => {
          addFile({ color, icon, name, path })
        }}
      >
        <Icon className={`text-${color}-400 text-[18px]`} />
        <span className='text-sm text-gray-400 group-hover:text-white'>
          {name}
        </span>
      </Link>
    )
  }

  return (
    <aside className='w-64 hidden md:flex flex-col bg-background-dark border-r border-border-dark shrink-0'>
      <div className='h-10 px-4 flex items-center justify-between text-xs font-bold tracking-widest text-gray-400'>
        <span>EXPLORER</span>
        <MoreHorizontal className='text-[16px] cursor-pointer hover:text-white' />
      </div>
      <div className='flex-1 overflow-y-auto py-2'>
        <div className='px-2 pb-1'>
          <button className='flex items-center gap-1 w-full text-left text-xs font-bold text-gray-200 hover:text-white group'>
            <ChevronRight className='text-[16px] transition-transform group-hover:rotate-90' />
            PORTFOLIO-V2
          </button>
        </div>
        <div className='flex flex-col gap-0.5 mt-1'>
          <div className='mt-2 px-2'>
            {linkComponent('/', 'orange', 'about.md', 'description')}
            {linkComponent(
              '/experience',
              'orange',
              'experience.git',
              'history'
            )}
          </div>
          <div className='pl-5 py-1 flex items-center gap-1.5 text-sm text-gray-400'>
            <Folder className='text-[16px]' />
            <span>Proyectos</span>
          </div>
          <div className='pl-8 flex flex-col gap-0.5'>
            {navigationData.map((file) => {
              const Icon = iconMap[file.icon as keyof typeof iconMap]
              return (
                <Link
                  key={file.id}
                  href={file.path}
                  className={`flex items-center gap-2 px-3 py-1.5 w-full text-left transition-colors group ${
                    pathname === file.path
                      ? 'bg-primary/10 border-l-2 border-primary'
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => {
                    addFile({
                      color: file.iconColor,
                      icon: file.icon,
                      name: file.name,
                      path: file.path
                    })
                  }}
                >
                  <Icon className={`text-${file.iconColor}-400 text-[18px]`} />
                  <span
                    className={`text-sm ${
                      pathname === file.path
                        ? 'text-white font-medium'
                        : 'text-gray-400 group-hover:text-white'
                    }`}
                  >
                    {file.name}
                  </span>
                </Link>
              )
            })}
          </div>
          <div className='mt-2 px-2'>
            {linkComponent('/skills', 'yellow', 'skills.json', 'data_object')}
            {linkComponent('/contact', 'blue', 'contact.tsx', 'javascript')}
          </div>
        </div>
      </div>
    </aside>
  )
}
