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
      'url(/image/image1.jpg)',
      'url(/image/image2.jpg)',
      'url(/image/image3.jpg)'
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
    inCarousel: false,
    inGrid: false,
    order: 1,
    tags: ['luxe', 'rénovation', 'vue-mer', 'écologique']
  },
  
  {
    id: 2,
    title: 'Espace Collaboratif Tech Hub',
    category: 'Design Intérieur',
    image: 'url(/image/image22.jpg)',
    images: [
      'url(/image/image22.jpg)',
      'url(/image/image21.jpg)'
    ],
    gallery: [
      'url(/image/image22.jpg)',
      'url(/image/image21.jpg)',
      'url(/image/image22.jpg)',
      'url(/image/image21.jpg)',
    ],
    heroImage: 'url(/image/image22.jpg)',
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
    inGrid: false,
    order: 2,
   
  },

  

  {
  id: 3,
  title: 'Complexe Commercial Urbain',
  category: 'Architecture',
  image: 'url(/image/image32.jpg)',
  images: [
    'url(/image/image32.jpg)',
    'url(/image/image31.jpg)',

  ],
  gallery: [
    'url(/image/image32.jpg)',
    'url(/image/image31.jpg)',
    'url(/image/image32.jpg)',
    'url(/image/image31.jpg)'
  ],
  heroImage: 'url(/image/image32.jpg)',
  description: 'Immeuble 5 étages avec galerie commerciale et bureaux modernes.',
  details: 'Hauteur: 22m | Étages: 5',
  
  longDescription: 'Un complexe commercial multifonctionnel conçu pour dynamiser le paysage urbain. L\'architecture contemporaine intègre des espaces commerciaux en rez-de-chaussée, une galerie marchande lumineuse et des bureaux modernes aux étages supérieurs. La façade vitrée maximise la luminosité naturelle tout en offrant une esthétique élégante.',
  
  client: 'Urbania Development',
  year: 2024,
  duration: '18 mois',
  status: 'En cours',
  surface: '2500m²',
  location: 'Dakar, Almadies',
  budget: 'Élevé',
  
  timeline: [
    { 
      phase: 'Études et permis', 
      date: 'Janvier - Mars 2023', 
      desc: 'Études techniques et obtention des autorisations' 
    },
    { 
      phase: 'Fondations', 
      date: 'Avril - Juin 2023', 
      desc: 'Terrassement et réalisation des fondations' 
    },
    { 
      phase: 'Structure', 
      date: 'Juillet 2023 - Mars 2024', 
      desc: 'Élévation des 5 étages et charpente' 
    },
    { 
      phase: 'Finitions', 
      date: 'Avril - Juin 2024', 
      desc: 'Aménagements intérieurs et façades' 
    }
  ],
  
  testimonial: {
    text: 'Un projet ambitieux qui transforme notre quartier. L\'équipe a su conjuguer esthétique et fonctionnalité.',
    author: 'Mamadou Diop',
    role: 'Directeur Urbania Development'
  },
  
  featured: false,
  inCarousel: true,
  inGrid: true,
  order: 3,
  tags: ['commercial', 'urbain']
},

{
  id: 4,
  title: 'Loft Artistique Industriel',
  category: 'Design Intérieur',
  image: 'url(/image/image41.jpg)',
  images: [
    'url(/image/image41.jpg)',
    'url(/image/image42.jpg)',
  ],
  gallery: [
    'url(/image/image42.jpg)',
    'url(/image/image41.jpg)',
    'url(/image/image42.jpg)',
    'url(/image/image41.jpg)'
  ],
  heroImage: 'url(/image/image42.jpg)',
  description: 'Transformation d\'ancien atelier en loft avec poutres apparentes.',
  details: 'Surface: 320m² | Plafond: 6m',
  
  longDescription: 'Réhabilitation d\'un ancien atelier industriel en loft contemporain. Le projet conserve l\'âme du lieu avec ses poutres métalliques apparentes et ses hauts plafonds, tout en intégrant des aménagements modernes. Les espaces ouverts sont ponctués de cloisons vitrées pour préserver la luminosité et les volumes généreux.',
  
  client: 'Galerie Contemporaine',
  year: 2023,
  duration: '5 mois',
  status: 'Terminé',
  surface: '320m²',
  location: 'Dakar, Médina',
  budget: 'Moyen',
  
  timeline: [
    { 
      phase: 'Diagnostic et conception', 
      date: 'Février 2023', 
      desc: 'Évaluation de la structure existante' 
    },
    { 
      phase: 'Démolition sélective', 
      date: 'Mars 2023', 
      desc: 'Retrait des éléments non conservés' 
    },
    { 
      phase: 'Rénovation', 
      date: 'Avril - Juin 2023', 
      desc: 'Installation des nouveaux équipements' 
    },
    { 
      phase: 'Décoration', 
      date: 'Juillet 2023', 
      desc: 'Mise en place du mobilier design' 
    }
  ],
  
  testimonial: {
    text: 'Un espace qui respire l\'authenticité et la modernité. Parfait pour nos expositions !',
    author: 'Aminata Sow',
    role: 'Directrice Galerie Contemporaine'
  },
  
  featured: true,
  inCarousel: true,
  inGrid: true,
  order: 4,
  tags: ['artistique', 'industriel']
},

{
  id: 5,
  title: 'Extension Résidentielle Premium',
  category: 'Maçonnerie',
  image: 'url(/image/image52.jpg)',
  images: [
    'url(/image/image52.jpg)',
    'url(/image/image51.jpg)',
  
  ],
  gallery: [
    'url(/image/image52.jpg)',
    'url(/image/image51.jpg)',
    'url(/image/image52.jpg)',
    'url(/image/image51.jpg)'
  ],
  heroImage: 'url(/image/image52.jpg)',
  description: 'Agrandissement harmonieux avec patio intégré et ossature acier.',
  details: 'Extension: +85m²',
  
  longDescription: 'Extension architecturale d\'une villa existante intégrant un patio central couvert. La structure en acier permet de grandes portées et une intégration légère avec l\'existant. Les nouveaux espaces comprennent un salon lumineux, une suite parentale et un bureau, tous ouverts sur le jardin intérieur.',
  
  client: 'Famille Sarr',
  year: 2024,
  duration: '4 mois',
  status: 'Terminé',
  surface: '85m²',
  location: 'Dakar, Fann Résidence',
  budget: 'Moyen-élevé',
  
  timeline: [
    { 
      phase: 'Conception détaillée', 
      date: 'Janvier 2024', 
      desc: 'Plans d\'exécution et validation client' 
    },
    { 
      phase: 'Fondations et structure', 
      date: 'Février 2024', 
      desc: 'Montage de l\'ossature métallique' 
    },
    { 
      phase: 'Maçonnerie et couverture', 
      date: 'Mars 2024', 
      desc: 'Élévation des murs et toiture' 
    },
    { 
      phase: 'Finitions', 
      date: 'Avril 2024', 
      desc: 'Aménagements et raccordements' 
    }
  ],
  
  testimonial: {
    text: 'L\'extension se fond parfaitement avec notre maison. Le patio apporte une lumière magnifique.',
    author: 'Ibrahima Sarr',
    role: 'Propriétaire'
  },
  
  featured: false,
  inCarousel: true,
  inGrid: false,
  order: 5,
  tags: ['résidentiel', 'extension']
},

{
  id: 6,
  title: 'Boutique Flagship Luxe',
  category: 'Architecture',
  image: 'url(/image/image62.jpg)',
  images: [
    'url(/image/image62.jpg)',
    'url(/image/image61.jpg)',
    
  ],
  gallery: [
    'url(/image/image62.jpg)',
    'url(/image/image61.jpg)',
    'url(/image/image62.jpg)',
    'url(/image/image61.jpg)'
  ],
  heroImage: 'url(/image/image62.jpg)',
  description: 'Espace retail haut de gamme avec expérience immersive.',
  details: 'Surface: 180m²',
  
  longDescription: 'Boutique concept store alliant luxe et technologie. L\'espace propose une expérience client unique avec des zones d\'essayage privatives, un éclairage scénographique adaptatif et des matériaux nobles (marbre, laiton brossé, verre texturé). L\'agencement fluide guide naturellement le parcours client.',
  
  client: 'Maison Élégance',
  year: 2023,
  duration: '3 mois',
  status: 'Terminé',
  surface: '180m²',
  location: 'Dakar, Sea Plaza',
  budget: 'Élevé',
  
  timeline: [
    { 
      phase: 'Concept design', 
      date: 'Août 2023', 
      desc: 'Création de l\'identité spatiale' 
    },
    { 
      phase: 'Travaux préparatoires', 
      date: 'Septembre 2023', 
      desc: 'Démontage et préparation du local' 
    },
    { 
      phase: 'Aménagement premium', 
      date: 'Octobre 2023', 
      desc: 'Installation du mobilier sur-mesure' 
    },
    { 
      phase: 'Mise en scène', 
      date: 'Novembre 2023', 
      desc: 'Éclairage et merchandising final' 
    }
  ],
  
  testimonial: {
    text: 'Notre flagship incarne parfaitement l\'ADN de notre marque. Un écrin pour nos collections.',
    author: 'Fatou Diagne',
    role: 'Directrice Maison Élégance'
  },
  
  featured: false,
  inCarousel: false,
  inGrid: false,
  order: 6,
  tags: ['retail', 'luxe']
},

{
  id: 7,
  title: 'Restaurant Gastronomique',
  category: 'Construction',
  image:     'url(/image/image71.jpg)',
  images: [
      'url(/image/image71.jpg)',
      'url(/image/image72.jpg)',
  ],
  gallery: [
      'url(/image/image71.jpg)',
      'url(/image/image72.jpg)',
      'url(/image/image71.jpg)',
      'url(/image/image72.jpg)'
  ],
  heroImage: 'url(/image/image71.jpg)',
  description: 'Restaurant avec cuisine ouverte et terrasse suspendue.',
  details: 'Couverts: 80',
  
  longDescription: 'Création d\'un restaurant gastronomique avec cuisine ouverte sur la salle. La terrasse suspendue offre une vue panoramique sur l\'océan. L\'acoustique a été particulièrement soignée pour garantir le confort des convives. Les matériaux naturels (bois, pierre, végétaux) créent une ambiance chaleureuse et raffinée.',
  
  client: 'Le Rivage',
  year: 2024,
  duration: '8 mois',
  status: 'En cours',
  surface: '350m²',
  location: 'Dakar, Corniche',
  budget: 'Élevé',
  
  timeline: [
    { 
      phase: 'Études techniques', 
      date: 'Janvier 2024', 
      desc: 'Plans cuisine et normes sanitaires' 
    },
    { 
      phase: 'Gros œuvre', 
      date: 'Février - Avril 2024', 
      desc: 'Construction et terrasse suspendue' 
    },
    { 
      phase: 'Équipements cuisine', 
      date: 'Mai - Juin 2024', 
      desc: 'Installation cuisine professionnelle' 
    },
    { 
      phase: 'Aménagement salle', 
      date: 'Juillet - Août 2024', 
      desc: 'Décoration et mobilier' 
    }
  ],
  
  testimonial: {
    text: 'Un cadre exceptionnel qui sublime notre cuisine. Nos clients sont enchantés par la vue !',
    author: 'Chef Pierre Mendy',
    role: 'Chef propriétaire Le Rivage'
  },
  
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
  image: 'url(/image/image72.jpg)',
  images: [
    'url(/image/image72.jpg)',
    'url(/image/image71.jpg)',
  ],
  gallery: [
    'url(/image/image72.jpg)',
    'url(/image/image71.jpg)',
    'url(/image/image72.jpg)',
    'url(/image/image71.jpg)'
  ],
  heroImage: 'url(/image/image72.jpg)',
  description: 'Résidence BBC avec toiture solaire et matériaux écologiques.',
  details: '100% Solaire',
  
  longDescription: 'Villa bioclimatique à énergie positive intégrant les dernières innovations écologiques. Panneaux solaires en toiture, isolation renforcée en matériaux biosourcés, récupération des eaux pluviales et ventilation naturelle. L\'orientation optimisée et les protections solaires garantissent un confort thermique optimal toute l\'année.',
  
  client: 'EcoHome Sénégal',
  year: 2024,
  duration: '10 mois',
  status: 'Terminé',
  surface: '220m²',
  location: 'Dakar, Yoff',
  budget: 'Moyen-élevé',
  
  timeline: [
    { 
      phase: 'Études bioclimatiques', 
      date: 'Décembre 2023', 
      desc: 'Simulations thermiques et énergétiques' 
    },
    { 
      phase: 'Fondations écologiques', 
      date: 'Janvier - Février 2024', 
      desc: 'Terrassement minimal et fondations' 
    },
    { 
      phase: 'Construction biosourcée', 
      date: 'Mars - Juillet 2024', 
      desc: 'Élévation avec matériaux écologiques' 
    },
    { 
      phase: 'Équipements verts', 
      date: 'Août - Septembre 2024', 
      desc: 'Panneaux solaires et systèmes durables' 
    }
  ],
  
  testimonial: {
    text: 'Une maison qui respecte la planète sans compromis sur le confort. Nos factures d\'énergie sont nulles !',
    author: 'Awa Thiam',
    role: 'Propriétaire'
  },
  
  featured: false,
  inCarousel: true,
  inGrid: true,
  order: 8,
  tags: ['écologie', 'solaire']
}
];