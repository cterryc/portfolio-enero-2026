import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    // Filtrar por categoría si se proporciona el query param
    const skills = await prisma.skill.findMany({
      where: category ? { category } : undefined,
      orderBy: {
        id: 'asc'
      }
    })

    return NextResponse.json(skills)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Error al obtener habilidades' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const skill = await prisma.skill.create({
      data: {
        category: body.category,
        label: body.label,
        status: body.status,
        val: body.val,
        color: body.color
      }
    })

    return NextResponse.json(skill, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Error al crear habilidad' },
      { status: 500 }
    )
  }
}
