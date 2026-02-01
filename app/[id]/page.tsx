'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Eye, Info, Code, ExternalLink, Github } from 'lucide-react'
import { projects, defaultProject } from '@/lib/projects'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function ProjectExplorerPage() {
  const params = useParams()
  const [selectedProject, setSelectedProject] = useState(defaultProject)
  const [imageError, setImageError] = useState(false)

  // Encontrar proyecto por ID de la ruta
  useEffect(() => {
    if (params.id) {
      const project = projects.find((p) => p.id === params.id)
      if (project) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedProject(project)
      }
    }
  }, [params.id])

  // Manejar error en imagen
  const handleImageError = () => {
    setImageError(true)
  }

  // Placeholder para imagen
  const placeholderImage =
    'data:image/svg+xml;base64,' +
    btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#1a1a1a"/>
      <rect x="50" y="50" width="700" height="500" fill="#2a2a2a" rx="10"/>
      <text x="400" y="300" text-anchor="middle" fill="#4a4a4a" font-family="Arial" font-size="24">
        ${selectedProject.title}
      </text>
      <text x="400" y="330" text-anchor="middle" fill="#3a3a3a" font-family="Arial" font-size="16">
        Captura del proyecto
      </text>
    </svg>
  `)

  return (
    <div className='flex-1 flex flex-col lg:flex-row overflow-hidden'>
      {/* Panel izquierdo: Vista previa visual */}
      <div className='flex-1 lg:w-1/2 p-6 overflow-y-auto border-b lg:border-b-0 lg:border-r border-border-dark bg-panel-dark'>
        {/* Selector de proyectos */}
        {/* <div className='mb-6 flex gap-2'>
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedProject.id === project.id
                  ? 'bg-primary text-background-dark'
                  : 'bg-background-dark text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {project.id === 'saviorperu'
                ? 'SaviorPeru'
                : project.id === 'grimreaper'
                  ? 'GrimReaper'
                  : 'Videogames'}
            </button>
          ))}
        </div> */}

        {/* Vista previa del proyecto */}
        <div className='bg-background-dark rounded-xl overflow-hidden shadow-2xl border border-border-dark'>
          <div className='h-8 bg-[#1a2e24] flex items-center px-4 gap-2 border-b border-border-dark'>
            <div className='flex gap-1.5'>
              <div className='w-3 h-3 rounded-full bg-red-500/80'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500/80'></div>
              <div className='w-3 h-3 rounded-full bg-green-500/80'></div>
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='bg-black/20 px-3 py-0.5 rounded text-[10px] text-gray-500 font-mono truncate max-w-50'>
                {selectedProject.liveUrl.replace('https://', '')}
              </div>
            </div>
          </div>
          <div className='relative aspect-video w-full bg-gray-900 group'>
            {!imageError && selectedProject.imageUrl ? (
              <Image
                alt={`Captura de ${selectedProject.title}`}
                src={selectedProject.imageUrl}
                fill
                className='object-cover opacity-90 group-hover:opacity-100 transition-opacity'
                onError={handleImageError}
              />
            ) : (
              <div
                className='absolute inset-0 bg-linear-to-br from-gray-900 to-gray-800 flex items-center justify-center'
                style={{
                  backgroundImage: `url("${placeholderImage}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            )}
            <div className='absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]'>
              <a
                href={selectedProject.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary hover:bg-green-400 text-background-dark font-bold py-2 px-6 rounded-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300'
              >
                <Eye size={18} />
                Ver Demo en Vivo
              </a>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-4'>
          {selectedProject.stats.map((stat) => (
            <div
              key={stat.label}
              className='bg-background-dark p-3 rounded-lg border border-border-dark'
            >
              <div className='text-xs text-gray-500 uppercase'>
                {stat.label}
              </div>
              <div className={`${stat.color} font-bold text-xl`}>
                {stat.val}
              </div>
            </div>
          ))}
        </div>

        {/* Características */}
        <div className='mt-6 bg-background-dark p-4 rounded-lg border border-border-dark'>
          <h3 className='text-white font-bold mb-3 flex items-center gap-2'>
            <Info size={18} className='text-primary' />
            Características Principales
          </h3>
          <ul className='space-y-2'>
            {selectedProject.features.slice(0, 4).map((feature, index) => (
              <li
                key={index}
                className='text-gray-400 text-sm flex items-start gap-2'
              >
                <span className='text-primary mt-1'>•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Panel derecho: Código/Detalles */}
      <div className='flex-1 lg:w-1/2 overflow-y-auto bg-panel-dark relative'>
        <div className='p-8 max-w-3xl mx-auto'>
          <div className='mb-6'>
            <p className='font-mono text-primary text-sm mb-2'>
              # Detalles del Proyecto
            </p>
            <h1 className='text-4xl font-bold text-white mb-4 tracking-tight'>
              {selectedProject.title}
            </h1>
            <div className='flex flex-wrap gap-2 mb-6'>
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 rounded bg-white/5 border border-white/10 text-gray-300 text-xs font-mono'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className='prose prose-invert prose-p:text-gray-400 prose-headings:text-white max-w-none'>
            <h3 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
              <Info className='text-primary text-xl' />
              Descripción General
            </h3>
            <p className='text-gray-400 leading-relaxed mb-6'>
              {selectedProject.longDescription}
            </p>

            <h3 className='text-lg font-semibold text-white mb-2 flex items-center gap-2'>
              <Code className='text-primary text-xl' />
              Implementación Clave
            </h3>
            <div className='bg-background-dark rounded-lg border border-border-dark overflow-hidden mb-8 font-mono text-sm relative group'>
              <div className='px-4 py-2 border-b border-white/5 text-xs text-gray-500 flex justify-between items-center'>
                <span>src/{selectedProject.codeSnippet.file}</span>
                <span className='text-gray-500'>
                  {selectedProject.codeSnippet.language}
                </span>
              </div>
              <div className='p-4 overflow-x-auto text-gray-300'>
                <div className='space-y-0.5'>
                  {selectedProject.codeSnippet.lines.map((line, index) => (
                    <div key={index} className='flex'>
                      <span className='text-purple-400 w-8 text-right pr-4 select-none'>
                        {index + 1}
                      </span>
                      <pre className='flex-1 overflow-x-auto'>
                        <code
                          className={`
                            ${line.includes('export') ? 'text-pink-400' : ''}
                            ${line.includes('const') || line.includes('let') || line.includes('async') ? 'text-blue-400' : ''}
                            ${line.includes('function') || line.includes('=>') ? 'text-yellow-300' : ''}
                            ${line.includes('try') || line.includes('catch') ? 'text-red-400' : ''}
                            ${line.includes('//') ? 'text-gray-500' : ''}
                            ${line.includes('return') ? 'text-pink-400' : ''}
                            ${line.includes('await') ? 'text-blue-400' : ''}
                            ${line.includes('axios') || line.includes('fetch') ? 'text-green-400' : ''}
                          `}
                        >
                          {line}
                        </code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 mt-8'>
              <a
                href={selectedProject.repoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 bg-white hover:bg-gray-100 text-background-dark font-bold py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors'
              >
                <Github size={20} />
                Ver Código Fuente
              </a>
              <a
                href={selectedProject.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 bg-transparent hover:bg-white/5 border border-border-dark text-white font-bold py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors'
              >
                <ExternalLink size={20} />
                Ver Sitio en Vivo
              </a>
            </div>

            {/* Navegación entre proyectos */}
            <div className='mt-8 pt-6 border-t border-white/5'>
              <div className='flex justify-between'>
                {projects.map((project, index) => {
                  const currentIndex = projects.findIndex(
                    (p) => p.id === selectedProject.id
                  )
                  const prevProject =
                    projects[
                      currentIndex > 0 ? currentIndex - 1 : projects.length - 1
                    ]
                  const nextProject =
                    projects[
                      currentIndex < projects.length - 1 ? currentIndex + 1 : 0
                    ]

                  return (
                    <React.Fragment key={index}>
                      <Link
                        key={`prev-${project.id}`}
                        href={`/projects/${prevProject.id}`}
                        className='text-gray-400 hover:text-white text-sm flex items-center gap-2'
                      >
                        ←{' '}
                        {prevProject.id === 'saviorperu'
                          ? 'SaviorPeru'
                          : prevProject.id === 'grimreaper'
                            ? 'GrimReaper'
                            : 'Videogames'}
                      </Link>
                      <Link
                        key={`next-${project.id}`}
                        href={`/projects/${nextProject.id}`}
                        className='text-gray-400 hover:text-white text-sm flex items-center gap-2'
                      >
                        {nextProject.id === 'saviorperu'
                          ? 'SaviorPeru'
                          : nextProject.id === 'grimreaper'
                            ? 'GrimReaper'
                            : 'Videogames'}{' '}
                        →
                      </Link>
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
