'use client'

import Image from 'next/image'
import {
  User,
  Briefcase,
  Code,
  MapPin,
  Calendar,
  Cpu,
  GraduationCap,
  Award,
  ExternalLink,
  Linkedin,
  Github
} from 'lucide-react'

export default function SobreMi() {
  const tecnologias = {
    frontend: ['React.js', 'Next.js', 'Vite', 'Tailwind', 'ReduxToolkit'],
    backend: ['Node.js', 'Express', 'Sequelize', 'NestJS', 'Prisma'],
    basesDeDatos: ['PostgreSQL', 'MongoDB'],
    herramientas: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'JWT']
  }

  const educacion = [
    {
      titulo: 'Técnico Redes y Comunicaciones',
      institucion: 'Instituto Tecnológico IDAT',
      periodo: 'Mayo 2016 - Junio 2018'
    },
    {
      titulo: 'Full Stack Web Developer',
      institucion: 'Henry Bootcamp',
      periodo: 'Mayo 2022 - Mayo 2023'
    },
    {
      titulo: 'HTML/CSS',
      institucion: 'Udemy',
      periodo: '2020'
    },
    {
      titulo: 'Escuela de Javascript',
      institucion: 'Udemy',
      periodo: '2021'
    }
  ]

  return (
    <div className='flex-1 flex flex-col lg:flex-row overflow-hidden'>
      {/* Panel izquierdo: Foto e información básica */}
      <div className='flex-1 lg:w-1/3 p-6 overflow-y-auto border-b lg:border-b-0 lg:border-r border-border-dark bg-panel-dark'>
        <div className='flex flex-col items-center'>
          {/* Foto de perfil */}
          <div className='relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 mb-6'>
            <Image
              src='https://res.cloudinary.com/dniekrmqb/image/upload/q_auto/v1736975908/eie39wrcbgdhayy5qqu8.webp'
              alt='Daniel Martel - Desarrollador Web'
              fill
              className='object-cover'
              priority
            />
          </div>

          <h1 className='text-3xl font-bold text-white mb-2 text-center'>
            Daniel Martel
          </h1>
          <p className='text-primary text-lg mb-6 text-center'>
            Desarrollador Web App
          </p>

          {/* Información de contacto */}
          <div className='w-full space-y-4 mb-8'>
            <div className='flex items-center gap-3 text-gray-300'>
              <MapPin className='text-primary w-5 h-5' />
              <span>Lima, Perú</span>
            </div>
            <div className='flex items-center gap-3 text-gray-300'>
              <Calendar className='text-primary w-5 h-5' />
              <span>2 años de experiencia</span>
            </div>
            <div className='flex items-center gap-3 text-gray-300'>
              <Cpu className='text-primary w-5 h-5' />
              <span>Ensamble de computadoras</span>
            </div>
          </div>

          {/* Enlaces a redes */}
          <div className='flex gap-4 mb-8'>
            <a
              href='https://www.linkedin.com/in/developer-martel/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white p-3 rounded-lg transition-colors'
            >
              <Linkedin className='w-6 h-6' />
            </a>
            <a
              href='https://github.com/developer-martel'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors'
            >
              <Github className='w-6 h-6' />
            </a>
          </div>

          {/* Tarjeta de experiencia destacada */}
          <div className='w-full bg-background-dark rounded-xl p-5 border border-border-dark'>
            <div className='flex items-center gap-2 mb-3'>
              <Award className='text-yellow-500 w-5 h-5' />
              <h3 className='text-white font-semibold'>Logro Destacado</h3>
            </div>
            <p className='text-gray-300 text-sm'>
              Implementación de Microsoft Azure y Google Cloud para
              autenticación y acceso a APIs de correo, Drive y OneDrive.
            </p>
          </div>
        </div>
      </div>

      {/* Panel derecho: Descripción detallada */}
      <div className='flex-1 lg:w-2/3 overflow-y-auto bg-panel-dark relative'>
        <div className='p-6 md:p-8 max-w-3xl mx-auto'>
          {/* Sección: Sobre mí */}
          <div className='mb-10'>
            <div className='flex items-center gap-3 mb-6'>
              <User className='text-primary w-7 h-7' />
              <h2 className='text-2xl font-bold text-white'>Sobre Mí</h2>
            </div>
            <div className='prose prose-invert max-w-none'>
              <p className='text-gray-300 leading-relaxed mb-4'>
                Disfruto el ensamblaje de computadoras y comprendo la
                importancia de una base sólida en hardware para el desarrollo de
                software. Esto me permite tener una comprensión profunda de cómo
                interactúan los componentes de hardware y software para crear
                aplicaciones eficientes y robustas.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                Me formé en el {'"Instituto Tecnológico IDAT"'} y en el bootcamp{' '}
                {'"Soy Henry"'}, adquiriendo conocimientos sólidos en una amplia
                gama de tecnologías y metodologías de desarrollo.
              </p>
            </div>
          </div>

          {/* Sección: Tecnologías */}
          <div className='mb-10'>
            <div className='flex items-center gap-3 mb-6'>
              <Code className='text-primary w-7 h-7' />
              <h2 className='text-2xl font-bold text-white'>
                Stack Tecnológico
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Frontend */}
              <div className='bg-background-dark rounded-lg border border-border-dark p-5'>
                <h3 className='text-white font-semibold mb-4 text-lg'>
                  Frontend
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {tecnologias.frontend.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className='bg-background-dark rounded-lg border border-border-dark p-5'>
                <h3 className='text-white font-semibold mb-4 text-lg'>
                  Backend
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {tecnologias.backend.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bases de Datos */}
              <div className='bg-background-dark rounded-lg border border-border-dark p-5'>
                <h3 className='text-white font-semibold mb-4 text-lg'>
                  Bases de Datos
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {tecnologias.basesDeDatos.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Herramientas */}
              <div className='bg-background-dark rounded-lg border border-border-dark p-5'>
                <h3 className='text-white font-semibold mb-4 text-lg'>
                  Herramientas
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {tecnologias.herramientas.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sección: Experiencia Destacada */}
          <div className='mb-10'>
            <div className='flex items-center gap-3 mb-6'>
              <Briefcase className='text-primary w-7 h-7' />
              <h2 className='text-2xl font-bold text-white'>
                Experiencia Destacada
              </h2>
            </div>
            <div className='bg-background-dark rounded-xl border border-border-dark p-6'>
              <h3 className='text-white text-xl font-semibold mb-3'>
                Implementación Cloud
              </h3>
              <p className='text-gray-300 mb-4'>
                Implementé integraciones con Microsoft Azure y Google Cloud,
                desarrollando el backend para autenticación (login) mediante
                ambas plataformas. Habilité el acceso programático a servicios
                como Gmail, Outlook, Google Drive y OneDrive, gestionando la
                obtención y procesamiento de la información de cada proveedor.
              </p>
              <div className='flex flex-wrap gap-3'>
                <span className='px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm flex items-center gap-2'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                  Microsoft Azure
                </span>
                <span className='px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  Google Cloud
                </span>
                <span className='px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm flex items-center gap-2'>
                  <span className='w-2 h-2 bg-yellow-500 rounded-full'></span>
                  APIs de Correo
                </span>
                <span className='px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm flex items-center gap-2'>
                  <span className='w-2 h-2 bg-purple-500 rounded-full'></span>
                  Drive/OneDrive
                </span>
              </div>
            </div>
          </div>

          {/* Sección: Educación */}
          <div className='mb-8'>
            <div className='flex items-center gap-3 mb-6'>
              <GraduationCap className='text-primary w-7 h-7' />
              <h2 className='text-2xl font-bold text-white'>
                Educación y Certificaciones
              </h2>
            </div>
            <div className='space-y-4'>
              {educacion.map((item, index) => (
                <div
                  key={index}
                  className='bg-background-dark rounded-lg border border-border-dark p-5 hover:border-primary/30 transition-colors'
                >
                  <div className='flex flex-col md:flex-row md:items-center justify-between mb-2'>
                    <h3 className='text-white font-semibold text-lg'>
                      {item.titulo}
                    </h3>
                    <span className='text-primary text-sm font-mono mt-1 md:mt-0'>
                      {item.periodo}
                    </span>
                  </div>
                  <p className='text-gray-300'>{item.institucion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enlace al portafolio */}
          <div className='mt-10 pt-6 border-t border-border-dark'>
            <a
              href='/proyectos'
              className='inline-flex items-center gap-2 text-primary hover:text-green-400 transition-colors'
            >
              <span>Ver mis proyectos</span>
              <ExternalLink className='w-4 h-4' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
