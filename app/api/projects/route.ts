// app/api/projects/route.ts
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        stats: true
      },
      orderBy: {
        // 'desc' para los más recientes primero (3, 2, 1)
        // 'asc' para los más antiguos primero (1, 2, 3)
        createdAt: 'asc'
      }
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error en la base de datos:', error)

    return NextResponse.json(
      { error: 'Error al obtener proyectos' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // 1. Lógica para múltiples proyectos (Array)
    if (Array.isArray(body)) {
      const projects = await prisma.project.createMany({
        data: body.map((project) => ({
          id: project.id, // Opcional si usas @default(cuid()) o uuid()
          title: project.title,
          description: project.description,
          longDescription: project.longDescription,
          liveUrl: project.liveUrl,
          repoUrl: project.repoUrl,
          imageUrl: project.imageUrl,
          technologies: project.technologies,
          features: project.features,
          codeSnippet: project.codeSnippet
        })),
        skipDuplicates: true // Útil para evitar errores si un ID ya existe
      })

      return NextResponse.json(projects, { status: 201 })
    }

    // 2. Lógica para un solo proyecto (Objeto)
    const project = await prisma.project.create({
      data: {
        id: body.id,
        title: body.title,
        description: body.description,
        longDescription: body.longDescription,
        liveUrl: body.liveUrl,
        repoUrl: body.repoUrl,
        imageUrl: body.imageUrl,
        technologies: body.technologies,
        features: body.features,
        codeSnippet: body.codeSnippet
      }
    })

    return NextResponse.json(project, { status: 201 })
  } catch (error) {
    console.error('Error al crear proyecto(s):', error)
    return NextResponse.json(
      { error: 'Error al crear proyecto' },
      { status: 500 }
    )
  }
}
