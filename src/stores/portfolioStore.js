import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { projectsConfig } from '../config/projects.js';

export const usePortfolioStore = defineStore('portfolio', () => {
  const projects = ref(projectsConfig);
  const activeFilter = ref('tous');
  const hoveredCardId = ref(null);
  const selectedProjectId = ref(null);

  const filteredProjects = computed(() => {
    let result = projects.value;
    if (activeFilter.value !== 'tous') {
      result = result.filter(p => p.category === activeFilter.value);
    }
    return result.sort((a, b) => a.order - b.order);
  });

  // ⚠️ GARDE L'ANCIEN (pour compatibilité)
  const featuredProjects = computed(() => {
    return projects.value
      .filter(p => p.featured)
      .sort((a, b) => a.order - b.order);
  });

  // ✨ AJOUTE LES NOUVEAUX (avec fallback sur featured)
  const carouselProjects = computed(() => {
    return projects.value
      .filter(p => {
        // Si inCarousel existe, l'utilise, sinon fallback sur featured
        return p.inCarousel !== undefined ? p.inCarousel : p.featured;
      })
      .sort((a, b) => a.order - b.order);
  });

  const gridProjects = computed(() => {
    return projects.value
      .filter(p => {
        // Si inGrid existe, l'utilise, sinon fallback sur featured
        return p.inGrid !== undefined ? p.inGrid : p.featured;
      })
      .sort((a, b) => a.order - b.order);
  });

  const categories = computed(() => {
    const cats = new Set(projects.value.map(p => p.category));
    return ['tous', ...Array.from(cats)];
  });

  const projectCountByCategory = computed(() => {
    const counts = {};
    projects.value.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  });

  const selectedProject = computed(() => {
    return projects.value.find(p => p.id === selectedProjectId.value);
  });

  const setSelectedProject = (id) => {
    selectedProjectId.value = id;
  };

  return {
    projects,
    activeFilter,
    hoveredCardId,
    selectedProjectId,
    filteredProjects,
    featuredProjects,       // ⚠️ GARDE (pour pages existantes)
    carouselProjects,       // ✨ NOUVEAU
    gridProjects,           // ✨ NOUVEAU
    categories,
    projectCountByCategory,
    selectedProject,
    setFilter: (cat) => { activeFilter.value = cat; },
    setHoveredCard: (id) => { hoveredCardId.value = id; },
    setSelectedProject,
    addProject: (data) => {
      const id = Math.max(...projects.value.map(p => p.id), 0) + 1;
      const order = Math.max(...projects.value.map(p => p.order), 0) + 1;
      projects.value.push({ 
        id, 
        order, 
        featured: false,      // ⚠️ GARDE
        inCarousel: false,    // ✨ NOUVEAU
        inGrid: false,        // ✨ NOUVEAU
        tags: [], 
        ...data 
      });
    },
    updateProject: (id, updates) => {
      const idx = projects.value.findIndex(p => p.id === id);
      if (idx !== -1) projects.value[idx] = { ...projects.value[idx], ...updates };
    },
    deleteProject: (id) => {
      projects.value = projects.value.filter(p => p.id !== id);
    },
    toggleFeatured: (id) => {
      const p = projects.value.find(x => x.id === id);
      if (p) p.featured = !p.featured;
    }
  };
});