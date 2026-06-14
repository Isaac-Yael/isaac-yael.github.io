// ============================================================
// CÓMO AGREGAR UNA NUEVA COLECCIÓN:
// 1. Crea la carpeta:  public/images/collections/[id]/
// 2. Agrega tus fotos en esa carpeta (ej: 01.jpg, 02.jpg...)
// 3. Copia el bloque de ejemplo abajo y llénalo con tus datos
// ============================================================

export interface Photo {
  src: string
  alt: string
}

export interface Collection {
  id: string
  name: string
  description: string
  year?: string
  cover: string      // foto de portada (para uso futuro)
  photos: Photo[]
}

export const collections: Collection[] = [
  {
    id: 'retratos',
    name: 'Retratos',
    description: 'Fotografía de retrato con iluminación cinematográfica.',
    year: '2024–2025',
    cover: '/images/collections/retratos/03.png',
    photos: [
      { src: '/images/collections/retratos/01.png', alt: 'Retrato en exterior — luz natural' },
      { src: '/images/collections/retratos/02.png', alt: 'Retrato con iluminación neon azul' },
      { src: '/images/collections/retratos/03.png', alt: 'Retrato dramático — chaqueta roja' },
      { src: '/images/collections/retratos/04.png', alt: 'Retrato exterior — pasto rosa' },
      { src: '/images/collections/retratos/05.png', alt: 'Retrato UV — luz negra' },
      { src: '/images/collections/retratos/06.png', alt: 'Retrato estudio — iluminación neon' },
      { src: '/images/collections/retratos/07.png', alt: 'Retrato profesional estudio' },
      { src: '/images/collections/retratos/08.png', alt: 'Retrato — fondo rojo' },
      { src: '/images/collections/retratos/09.png', alt: 'Retrato — luz morada dramática' },
      { src: '/images/collections/retratos/10.png', alt: 'Retrato conceptual — tipografía' },
      { src: '/images/collections/retratos/11.png', alt: 'Retrato casual — fondo azul' },
      { src: '/images/collections/retratos/12.png', alt: 'Fotografía urbana — motocicleta' },
      { src: '/images/collections/retratos/13.png', alt: 'Retrato lifestyle — exterior' },
      { src: '/images/collections/retratos/14.png', alt: 'Retrato blanco y negro' },
      { src: '/images/collections/retratos/15.png', alt: 'Retrato lifestyle — verano' },
    ],
  },

  // ── EJEMPLO PARA AGREGAR UNA NUEVA COLECCIÓN ──────────────
  // {
  //   id: 'bodas',
  //   name: 'Bodas',
  //   description: 'Fotografía de boda con estilo editorial.',
  //   year: '2025',
  //   cover: '/images/collections/bodas/01.jpg',
  //   photos: [
  //     { src: '/images/collections/bodas/01.jpg', alt: 'Boda 1' },
  //     { src: '/images/collections/bodas/02.jpg', alt: 'Boda 2' },
  //   ],
  // },
]
