'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface ItemArrayFiles {
  name: string
  path: string
  icon: string
  color: string
}

interface FilesItems {
  filesList: ItemArrayFiles[]
  addFile: (file: ItemArrayFiles) => void
  removeFile: (file: string) => void
  setShowTerminal: (show: boolean) => void
  showTerminal: boolean
}

const FilesContext = createContext<FilesItems | undefined>(undefined)

export function FilesProvider({ children }: { children: React.ReactNode }) {
  const [showTerminal, setShowTerminal] = useState(true)
  const [filesList, setFilesList] = useState<FilesItems['filesList']>([
    {
      name: 'about.md',
      path: '/',
      icon: 'description',
      color: 'orange'
    },
    // {
    //   name: 'skills.json',
    //   path: '/skills',
    //   icon: 'data_object',
    //   color: 'yellow'
    // },
    {
      name: 'experience.git',
      path: '/experience',
      icon: 'history',
      color: 'orange'
    }
    // {
    //   name: 'contact.tsx',
    //   path: '/contact',
    //   icon: 'javascript',
    //   color: 'blue'
    // }
  ])

  const addFile = (file: ItemArrayFiles) => {
    const findOne = filesList.find((item) => item.name === file.name)
    if (!findOne) {
      setFilesList([...filesList, file])
    }
  }

  const removeFile = (file: string) => {
    const filterList = filesList.filter((item) => item.name !== file)
    setFilesList(filterList)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Verificamos si es Ctrl + Ñ (o Ctrl + ñ)
      if (event.ctrlKey && (event.key === 'ñ' || event.key === 'Ñ')) {
        event.preventDefault() // Evita comportamientos por defecto del navegador
        setShowTerminal((prev) => !prev)
        console.log('Terminal toggled!')
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Limpieza al desmontar el componente
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <FilesContext.Provider
      value={{ filesList, addFile, removeFile, showTerminal, setShowTerminal }}
    >
      {children}
    </FilesContext.Provider>
  )
}

export function useFiles() {
  const context = useContext(FilesContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
