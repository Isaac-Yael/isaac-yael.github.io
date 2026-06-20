// ============================================================
// TEXTOS DEL SITIO — English / Español
// Para editar cualquier texto del sitio, búscalo aquí por su
// clave (ej: "hero.tagline") y cambia el valor en "en" y/o "es".
// El inglés ("en") es el idioma principal/por defecto del sitio.
// ============================================================

export type Lang = 'en' | 'es'

export interface TranslationShape {
  nav: { photo: string; video: string; about: string; contact: string }
  hero: {
    kicker: string
    titleLine1: string
    titleLine2: string
    tagline1: string
    tagline2: string
    ctaWork: string
    ctaContact: string
    location: string
  }
  about: {
    kicker: string
    paragraphs: string[]
    stats: { value: string; label: string }[]
  }
  services: {
    kicker: string
    heading: string
    list: { name: string; description: string }[]
  }
  gallery: {
    kicker: string
    heading: string
    tabAll: string
    empty: string
  }
  video: {
    kicker: string
    heading: string
    empty: string
    emptyHint: string
  }
  contact: {
    kicker: string
    heading: string
    description: string
  }
  footer: {
    rights: string
    location: string
  }
}

export const translations: Record<Lang, TranslationShape> = {
  en: {
    nav: {
      photo: 'Photography',
      video: 'Video',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Isaac Ruiz · Barcelona',
      titleLine1: 'CONTENT',
      titleLine2: 'CREATOR',
      tagline1: 'Visual designer and audiovisual producer,',
      tagline2: 'Mexican, based in Barcelona, Spain.',
      ctaWork: 'View Work',
      ctaContact: 'Contact',
      location: 'Barcelona, Spain',
    },
    about: {
      kicker: 'About me',
      paragraphs: [
        "I'm a Content Creator, visual designer and audiovisual producer from Mexico, currently based in Barcelona, Spain.",
        'Over the past 8 years I have developed projects focused on visual content creation, combining design, photography, video and digital strategy to help brands and businesses communicate effectively.',
        "My approach is about creating content that doesn't just look good, but connects with audiences, strengthens brand identity and drives measurable results.",
      ],
      stats: [
        { value: '8+', label: 'Years of experience' },
        { value: 'UNAM', label: 'Design & Visual Communication' },
        { value: 'BCN', label: 'Barcelona, Spain' },
      ],
    },
    services: {
      kicker: 'How can I help you?',
      heading: 'Services',
      list: [
        {
          name: 'Photography',
          description:
            'Portrait, lifestyle and creative photography with a cinematic approach. Studio and location lighting.',
        },
        {
          name: 'Video Production',
          description:
            'Professional video production and editing. Reels, ad spots and content for social media.',
        },
        {
          name: 'Motion Graphics',
          description:
            'Animations and motion design that add energy and narrative to brands and digital experiences.',
        },
        {
          name: 'Content Strategy',
          description:
            'Social media content planning and development focused on brand identity and measurable results.',
        },
        {
          name: 'Branding & Graphic Design',
          description:
            'Complete visual identities — from logos to coherent brand systems for print and digital media.',
        },
        {
          name: 'Creative AI',
          description:
            'Implementing AI tools into creative workflows to optimize production and generate high-impact content.',
        },
      ],
    },
    gallery: {
      kicker: 'Portfolio',
      heading: 'Photography',
      tabAll: 'All',
      empty: 'Coming soon',
    },
    video: {
      kicker: 'Audiovisual production',
      heading: 'Video & Reels',
      empty: 'Coming soon',
      emptyHint: 'Add your videos by editing',
    },
    contact: {
      kicker: "Let's work together",
      heading: "Let's talk",
      description:
        "Have a project in mind? I'd love to hear about it. Drop me an email or a WhatsApp message and let's start building something great.",
    },
    footer: {
      rights: 'All rights reserved',
      location: 'Barcelona, Spain',
    },
  },
  es: {
    nav: {
      photo: 'Fotografía',
      video: 'Video',
      about: 'About',
      contact: 'Contacto',
    },
    hero: {
      kicker: 'Isaac Ruiz · Barcelona',
      titleLine1: 'CONTENT',
      titleLine2: 'CREATOR',
      tagline1: 'Diseñador visual y productor audiovisual',
      tagline2: 'mexicano, basado en Barcelona, España.',
      ctaWork: 'Ver Trabajo',
      ctaContact: 'Contacto',
      location: 'Barcelona, España',
    },
    about: {
      kicker: 'Sobre mí',
      paragraphs: [
        'Soy Content Creator, diseñador visual y productor audiovisual mexicano, actualmente radicado en Barcelona, España.',
        'Durante los últimos 8 años he desarrollado proyectos enfocados en la creación de contenido visual, combinando diseño, fotografía, video y estrategias digitales para ayudar a marcas y empresas a comunicar de manera efectiva.',
        'Mi enfoque se basa en crear contenido que no solo se vea bien, sino que conecte con las audiencias, fortalezca la identidad de marca y genere resultados medibles.',
      ],
      stats: [
        { value: '8+', label: 'Años de experiencia' },
        { value: 'UNAM', label: 'Diseño y Comunicación Visual' },
        { value: 'BCN', label: 'Barcelona, España' },
      ],
    },
    services: {
      kicker: '¿En qué puedo ayudarte?',
      heading: 'Servicios',
      list: [
        {
          name: 'Fotografía',
          description:
            'Retrato, lifestyle y fotografía creativa con enfoque cinematográfico. Iluminación de estudio y locación.',
        },
        {
          name: 'Producción de Video',
          description:
            'Producción y edición de video profesional. Reels, spots publicitarios y contenido para redes sociales.',
        },
        {
          name: 'Motion Graphics',
          description:
            'Animaciones y gráficos en movimiento que agregan energía y narrativa a marcas y experiencias digitales.',
        },
        {
          name: 'Estrategia de Contenido',
          description:
            'Planificación y desarrollo de contenido para redes sociales con foco en identidad de marca y resultados medibles.',
        },
        {
          name: 'Branding & Diseño Gráfico',
          description:
            'Identidades visuales completas — desde logotipos hasta sistemas de marca coherentes para medios impresos y digitales.',
        },
        {
          name: 'Inteligencia Artificial Creativa',
          description:
            'Implementación de herramientas de IA en procesos creativos para optimizar producción y generar contenido de alto impacto.',
        },
      ],
    },
    gallery: {
      kicker: 'Portafolio',
      heading: 'Fotografía',
      tabAll: 'Todos',
      empty: 'Próximamente',
    },
    video: {
      kicker: 'Producción audiovisual',
      heading: 'Video & Reels',
      empty: 'Próximamente',
      emptyHint: 'Agrega tus videos editando',
    },
    contact: {
      kicker: 'Trabajemos juntos',
      heading: 'Hablemos',
      description:
        '¿Tienes un proyecto en mente? Me encantaría escucharte. Escríbeme por correo o por WhatsApp y empecemos a construir algo increíble.',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      location: 'Barcelona, España',
    },
  },
}
