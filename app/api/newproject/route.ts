import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    // Solo debería haber un registro de fotos (configuración del sitio)

    return NextResponse.json({
      message: 'Configuración de fotos obtenida',
      data: { key: 'value' }
    })
  } catch (error) {
    console.error('Error obteniendo configuración de fotos:', error)
    return NextResponse.json(
      { message: 'Error interno al obtener configuración de fotos' },
      { status: 500 }
    )
  }
}
