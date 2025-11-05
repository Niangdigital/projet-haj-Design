export const projectsConfig = [
  {
    id: 1,
    title: 'Villa Contemporaine Côtière',
    category: 'Construction',
    image: 'url(/image/image1.jpg)', // Image principale (carousel, cards)
    images: [ // Pour carousel/autres usages existants
      'url(/image/image1.jpg)',
      'url(/image/image2.jpg)'
    ],
    gallery: [ // ✨ NOUVEAU: Galerie photos spécifique
      'url(/image/image1.jpg)',
      'url(/image/image2.jpg)',
      'url(/image/image3.jpg)',
      'url(/image/image4.jpg)',
      'url(/image/image1.jpg)',
      'url(/image/image2.jpg)'
    ],
    heroImage: 'url(/image/image1.jpg)', // ✨ NOUVEAU: Image hero format paysage
    description: 'Rénovation complète d\'une villa années 70. Matériaux nobles, baies vitrées panoramiques.',
    details: 'Surface: 280m² | Durée: 14 mois',
    
    longDescription: 'Cette villa côtière a été entièrement repensée pour offrir un espace de vie moderne et lumineux. Les baies vitrées panoramiques créent un lien harmonieux entre l\'intérieur et l\'extérieur, tandis que les matériaux nobles comme le bois de teck et la pierre naturelle apportent chaleur et authenticité.',
    
    client: 'Famille Diallo',
    year: 2023,
    duration: '14 mois',
    status: 'Terminé',
    surface: '280m²',
    location: 'Dakar, Almadies',
    budget: 'Premium',
    
    features: [
      { 
        icon: '🌊', 
        title: 'Vue mer panoramique', 
        desc: 'Baies vitrées du sol au plafond sur 180°' 
      },
      { 
        icon: '🌳', 
        title: 'Matériaux durables', 
        desc: 'Bois de teck certifié et pierre locale' 
      },
      { 
        icon: '☀️', 
        title: 'Énergie solaire', 
        desc: 'Panneaux photovoltaïques 15kW' 
      },
      { 
        icon: '🏊', 
        title: 'Piscine à débordement', 
        desc: 'Bassin 12m avec vue sur l\'océan' 
      }
    ],
    
    timeline: [
      { 
        phase: 'Études et conception', 
        date: 'Janvier - Février 2023', 
        desc: 'Relevés architecturaux, études de sol et conception des plans' 
      },
      { 
        phase: 'Démolition et gros œuvre', 
        date: 'Mars - Juin 2023', 
        desc: 'Dépose des anciennes structures et renforcement des fondations' 
      },
      { 
        phase: 'Second œuvre', 
        date: 'Juillet - Novembre 2023', 
        desc: 'Menuiseries, électricité, plomberie et revêtements' 
      },
      { 
        phase: 'Finitions et livraison', 
        date: 'Décembre 2023', 
        desc: 'Aménagements extérieurs, piscine et remise des clés' 
      }
    ],
    
    services: ['Conception architecturale', 'Gros œuvre', 'Menuiseries sur-mesure', 'Piscine & Aménagements'],
    
    technologies: ['Ossature béton renforcé', 'Menuiseries aluminium', 'Domotique KNX', 'Panneaux solaires'],
    
    testimonial: {
      text: 'Un travail exceptionnel. L\'équipe a su transformer notre vision en réalité tout en respectant les délais et le budget.',
      author: 'M. Diallo',
      role: 'Propriétaire'
    },
    
    featured: true,
    inCarousel: true,
    inGrid: true,
    order: 1,
    tags: ['luxe', 'rénovation', 'vue-mer', 'écologique']
  },
  
  {
    id: 2,
    title: 'Espace Collaboratif Tech Hub',
    category: 'Design Intérieur',
    image: 'url(/image/image3.jpg)',
    images: [
      'url(/image/image3.jpg)',
      'url(/image/image4.jpg)'
    ],
    gallery: [
      'url(/public/image/image1.jpg)',
      'url(/public/image/image2.jpg)',
      'url(/public/image/image3.jpg)',
      'url(/public/image/image4.jpg)',
   
    ],
    heroImage: 'url(/public/image/image3.jpg)',
    description: 'Bureau innovant pour startup. Zones créatives, open-space modulable.',
    details: 'Surface: 450m² | Zones: 8',
    
    longDescription: 'Un espace de travail pensé pour favoriser la créativité et la collaboration. Le design modulable permet d\'adapter les espaces selon les besoins, tandis que les zones acoustiques offrent des espaces de concentration. L\'utilisation de couleurs vives et de mobilier ergonomique crée un environnement stimulant et confortable.',
    
    client: 'TechStart Africa',
    year: 2024,
    duration: '6 mois',
    status: 'Terminé',
    surface: '450m²',
    location: 'Dakar, Plateau',
    budget: 'Moyen',
    
    
    
    timeline: [
      { 
        phase: 'Audit et conception', 
        date: 'Janvier 2024', 
        desc: 'Analyse des besoins et création des concepts' 
      },
      { 
        phase: 'Préparation des espaces', 
        date: 'Février 2024', 
        desc: 'Démontage et préparation des surfaces' 
      },
      { 
        phase: 'Aménagement', 
        date: 'Mars - Mai 2024', 
        desc: 'Installation du mobilier et des équipements' 
      },
      { 
        phase: 'Livraison', 
        date: 'Juin 2024', 
        desc: 'Tests finaux et remise en main propre' 
      }
    ],
    
    
    testimonial: {
      text: 'Nos équipes sont ravies ! L\'espace favorise vraiment la collaboration et la productivité.',
      author: 'Sarah Ndiaye',
      role: 'CEO TechStart Africa'
    },
    
    featured: true,
    inCarousel: true,
    inGrid: true,
    order: 2,
   
  },

  // Continue avec les autres projets en suivant la même structure...

  {
    id: 3,
    title: 'Complexe Commercial Urbain',
    category: 'Architecture',
    image: 'url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800)',
    images: [
      'url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800)',
      'url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800)',
      'url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800)'
    ],
    description: 'Immeuble 5 étages avec galerie commerciale et bureaux modernes.',
    details: 'Hauteur: 22m | Étages: 5',
    featured: false,
    inCarousel: true,   // PAS dans carousel
    inGrid: true,        // Mais dans cartes
    order: 3,
    tags: ['commercial', 'urbain']
  },
  {
    id: 4,
    title: 'Loft Artistique Industriel',
    category: 'Design Intérieur',
    image: 'url(https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800)',
    images: [
      'url(https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800)',
      'url(https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800)',
      'url(https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800)'
    ],
    description: 'Transformation d\'ancien atelier en loft avec poutres apparentes.',
    details: 'Surface: 320m² | Plafond: 6m',
    featured: true,
    inCarousel: true,
    inGrid: false,       // Uniquement carousel
    order: 4,
    tags: ['artistique', 'industriel']
  },
  {
    id: 5,
    title: 'Extension Résidentielle Premium',
    category: 'Maçonnerie',
    image: 'url(https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800)',
    images: [
      'url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800)',
      'url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800)'
    ],
    description: 'Agrandissement harmonieux avec patio intégré et ossature acier.',
    details: 'Extension: +85m²',
    featured: false,
    inCarousel: true,
    inGrid: false,        // Uniquement cartes
    order: 5,
    tags: ['résidentiel', 'extension']
  },
  {
    id: 6,
    title: 'Boutique Flagship Luxe',
    category: 'Architecture',
    image: 'linear-gradient(135deg, #f8bbd0 0%, #f48fb1 100%)',
    images: [
      'linear-gradient(135deg, #f8bbd0 0%, #f48fb1 100%)',
      'linear-gradient(135deg, #f48fb1 0%, #f06292 100%)'
    ],
    description: 'Espace retail haut de gamme avec expérience immersive.',
    details: 'Surface: 180m²',
    featured: false,
    inCarousel: false,
    inGrid: false,       // Ni carousel ni cartes (catalogue uniquement)
    order: 6,
    tags: ['retail', 'luxe']
  },
  {
    id: 7,
    title: 'Restaurant Gastronomique',
    category: 'Construction',
    image: 'url(https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800)',
    images: [
      'linear-gradient(135deg, #b2dfdb 0%, #80cbc4 100%)',
      'linear-gradient(135deg, #80cbc4 0%, #4db6ac 100%)'
    ],
    description: 'Restaurant avec cuisine ouverte et terrasse suspendue.',
    details: 'Couverts: 80',
    featured: false,
    inCarousel: false,
    inGrid: false,
    order: 7,
    tags: ['gastronomie', 'terrasse']
  },
  {
    id: 8,
    title: 'Maison Écologique Durable',
    category: 'Architecture',
    image: 'linear-gradient(135deg, #d1c4e9 0%, #b39ddb 100%)',
    images: [
      'linear-gradient(135deg, #d1c4e9 0%, #b39ddb 100%)',
      'linear-gradient(135deg, #b39ddb 0%, #9575cd 100%)'
    ],
    description: 'Résidence BBC avec toiture solaire et matériaux écologiques.',
    details: '100% Solaire',
    featured: false,
    inCarousel: false,
    inGrid: false,
    order: 8,
    tags: ['écologie', 'solaire']
  }
];