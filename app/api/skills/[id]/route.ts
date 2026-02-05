import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const skill = await prisma.skill.findUnique({
      where: { id: parseInt(params.id) }
    })

    if (!skill) {
      return NextResponse.json(
        { error: 'Habilidad no encontrada' },
        { status: 404 }
      )
    }

    return NextResponse.json(skill)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Error al obtener habilidad' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()

    const skill = await prisma.skill.update({
      where: { id: parseInt(params.id) },
      data: {
        category: body.category,
        label: body.label,
        status: body.status,
        val: body.val,
        color: body.color
      }
    })

    return NextResponse.json(skill)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Error al actualizar habilidad' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.skill.delete({
      where: { id: parseInt(params.id) }
    })

    return NextResponse.json({ message: 'Habilidad eliminada' })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Error al eliminar habilidad' },
      { status: 500 }
    )
  }
}
