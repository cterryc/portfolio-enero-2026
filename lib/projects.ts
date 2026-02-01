export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  liveUrl: string
  repoUrl: string
  imageUrl: string
  technologies: string[]
  features: string[]
  stats: {
    label: string
    val: string
    color: string
  }[]
  codeSnippet: {
    file: string
    language: string
    lines: string[]
  }
}

export const projects: Project[] = [
  {
    id: 'saviorperu',
    title: 'SaviorPeru - E-commerce Full Stack',
    description: 'E-commerce completo de ropa peruana con backend y frontend',
    longDescription:
      'Plataforma de comercio electrónico desarrollada desde cero con sistema de autenticación, gestión de productos, carrito interactivo y optimización de imágenes. Implementado con arquitectura moderna y despliegue en la nube.',
    liveUrl: 'https://saviorperu.com',
    repoUrl: 'https://github.com/SAVIORPERU/SAVIORPERU',
    imageUrl: '', // Añadir URL después
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Clerk',
      'Cloudinary',
      'Tailwind CSS',
      'Vercel'
    ],
    features: [
      'Carrito interactivo con Sidebar',
      'Autenticación con Clerk',
      'Gestión de productos con imágenes en Cloudinary',
      'Formulario de reclamos con envío por WhatsApp',
      'Optimización de rendimiento y SEO',
      'Despliegue completo en Vercel'
    ],
    stats: [
      { label: 'Performance', val: '98%', color: 'text-green-400' },
      { label: 'SEO', val: '95%', color: 'text-blue-400' },
      { label: 'Accessibility', val: '92%', color: 'text-yellow-400' },
      { label: 'Commits', val: '156', color: 'text-purple-400' }
    ],
    codeSnippet: {
      file: 'hooks/useCart.ts',
      language: 'TypeScript',
      lines: [
        'export const useCart = () => {',
        '  const [state, dispatch] = useReducer(cartReducer, initialState);',
        '',
        '  // Agregar item al carrito',
        '  const addItem = (item: Product) => {',
        "    dispatch({ type: 'ADD_ITEM', payload: item });",
        "    localStorage.setItem('cart', JSON.stringify([...state.items, item]));",
        '  };',
        '',
        '  // Eliminar item del carrito',
        '  const removeItem = (productId: string) => {',
        "    dispatch({ type: 'REMOVE_ITEM', payload: productId });",
        '  };',
        '',
        '  return { state, addItem, removeItem };',
        '};'
      ]
    }
  },
  {
    id: 'grimreaper',
    title: 'GrimReaper - Gestor de Clan WoW',
    description: 'WebApp para gestión de puntuación DKP en World of Warcraft',
    longDescription:
      'Plataforma web completa para administrar clan de WoW 3.3.5a con sistema DKP, scraping dinámico de datos de personajes y base de datos en la nube. Incluye panel interactivo con ítems y alters.',
    liveUrl: 'https://grimreaper.vercel.app',
    repoUrl: 'https://github.com/cterryc/Grimreaper',
    imageUrl: '', // Añadir URL después
    technologies: [
      'React.js',
      'Vite.js',
      'Express.js',
      'PostgreSQL',
      'Sequelize',
      'Redux Toolkit',
      'Render',
      'Neon'
    ],
    features: [
      'Scraping dinámico desde warmane.com',
      'Sistema DKP (Dragon Kill Points)',
      'Base de datos en Neon (PostgreSQL)',
      'Popup interactivo con ítems de personajes',
      'Lista de mejores ítems (BIS) por clase',
      'Interfaz en español e inglés'
    ],
    stats: [
      { label: 'Performance', val: '96%', color: 'text-green-400' },
      { label: 'SEO', val: '88%', color: 'text-blue-400' },
      { label: 'Accessibility', val: '90%', color: 'text-yellow-400' },
      { label: 'Commits', val: '87', color: 'text-purple-400' }
    ],
    codeSnippet: {
      file: 'services/scraperService.js',
      language: 'JavaScript',
      lines: [
        '// Scraping de datos de personajes de Warmane',
        'export const scrapeCharacterData = async (characterName) => {',
        '  try {',
        '    const response = await fetch(',
        '      `https://armory.warmane.com/character/${characterName}/Icecrown/summary`',
        '    );',
        '    const html = await response.text();',
        '    ',
        '    // Parsear HTML con cheerio',
        '    const $ = cheerio.load(html);',
        '    ',
        '    const characterData = {',
        "      name: $('.name').text().trim(),",
        "      level: $('.level').text().trim(),",
        "      class: $('.class').text().trim(),",
        "      gearScore: $('.gear-score').text().trim(),",
        '      items: []',
        '    };',
        '    ',
        '    // Extraer items equipados',
        "    $('.item-slot').each((index, element) => {",
        "      const itemName = $(element).find('.item-name').text();",
        "      const itemLink = $(element).find('a').attr('href');",
        '      characterData.items.push({ itemName, itemLink });',
        '    });',
        '    ',
        '    return characterData;',
        '  } catch (error) {',
        "    console.error('Error scraping character:', error);",
        '    throw error;',
        '  }',
        '};'
      ]
    }
  },
  {
    id: 'videogames',
    title: 'Videogames App - Catálogo Interactivo',
    description: 'Aplicación de catálogo de videojuegos con búsqueda avanzada',
    longDescription:
      'Proyecto académico full-stack desarrollado en Henry Bootcamp que consume la API RAWG para mostrar videojuegos con sistema de búsqueda, filtrado y creación de videojuegos personalizados.',
    liveUrl: 'https://videogames-terry.vercel.app',
    repoUrl: 'https://github.com/cterryc/PI-Videogames-Vite',
    imageUrl: '', // Añadir URL después
    technologies: [
      'React.js',
      'Redux',
      'Express.js',
      'PostgreSQL',
      'Sequelize',
      'Axios',
      'RAWG API'
    ],
    features: [
      'Búsqueda y filtrado avanzado de videojuegos',
      'Consumo de API RAWG para datos actualizados',
      'Formulario controlado para crear videojuegos',
      'Ordenamiento múltiple (alfabético, rating, fecha)',
      'Base de datos PostgreSQL con Sequelize ORM',
      'Frontend responsive con React y Redux'
    ],
    stats: [
      { label: 'Performance', val: '94%', color: 'text-green-400' },
      { label: 'SEO', val: '85%', color: 'text-blue-400' },
      { label: 'Accessibility', val: '89%', color: 'text-yellow-400' },
      { label: 'Commits', val: '64', color: 'text-purple-400' }
    ],
    codeSnippet: {
      file: 'actions/gamesActions.js',
      language: 'JavaScript',
      lines: [
        '// Consumo de API RAWG para obtener videojuegos',
        'export const fetchGames = (filters = {}) => async (dispatch) => {',
        "  dispatch({ type: 'LOADING_GAMES' });",
        '  ',
        '  try {',
        '    const params = new URLSearchParams({',
        '      key: process.env.RAWG_API_KEY,',
        '      page_size: 40,',
        '      ...filters',
        '    });',
        '    ',
        '    const response = await axios.get(',
        '      `https://api.rawg.io/api/games?${params}`',
        '    );',
        '    ',
        '    const games = response.data.results.map((game) => ({',
        '      id: game.id,',
        '      name: game.name,',
        '      released: game.released,',
        '      rating: game.rating,',
        '      background_image: game.background_image,',
        '      genres: game.genres.map((g) => g.name),',
        '      platforms: game.platforms.map((p) => p.platform.name)',
        '    }));',
        '    ',
        '    dispatch({',
        "      type: 'SET_GAMES',",
        '      payload: { games, total: response.data.count }',
        '    });',
        '  } catch (error) {',
        '    dispatch({',
        "      type: 'SET_ERROR',",
        "      payload: 'Error al cargar videojuegos'",
        '    });',
        '  }',
        '};'
      ]
    }
  }
]

// Proyecto por defecto
export const defaultProject = projects[0]
