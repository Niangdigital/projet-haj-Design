import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {
  // Initialiser depuis l'URL ou sessionStorage
  const getInitialPage = () => {
    if (typeof window === 'undefined') return 'home';
    
    const path = window.location.pathname;
    if (path === '/' || path === '') return 'home';
    if (path.startsWith('/portfolio')) return 'portfolio';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/contact')) return 'contact';
    if (path.startsWith('/project/')) return 'project-detail';
    
    return sessionStorage.getItem('currentPage') || 'home';
  };

  const currentPage = ref(getInitialPage());
  const menuOpen = ref(false);
  const scrollY = ref(0);

  // Fonction pour changer de page avec historique navigateur
  const setPage = (page) => {
    if (currentPage.value === page) return; // Ne rien faire si déjà sur la page
    
    currentPage.value = page;
    menuOpen.value = false;
    window.scrollTo(0, 0);
    
    // Sauvegarder dans sessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('currentPage', page);
      
      // 🔥 AJOUT: Mettre à jour l'URL et l'historique du navigateur
      const urlMap = {
        'home': '/',
        'portfolio': '/portfolio',
        'about': '/about',
        'contact': '/contact'
      };
      
      const url = urlMap[page] || '/';
      window.history.pushState({ page }, '', url);
    }
  };

  // Navigation vers un projet spécifique
  const navigateToProject = (projectId) => {
    currentPage.value = 'project-detail';
    menuOpen.value = false;
    
    // Stocker l'ID du projet
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('currentProjectId', projectId);
      sessionStorage.setItem('currentPage', 'project-detail');
      
      // 🔥 AJOUT: Mettre à jour l'URL avec l'ID du projet
      window.history.pushState({ page: 'project-detail', projectId }, '', `/project/${projectId}`);
    }
  };

  // 🔥 NOUVEAU: Gérer le bouton retour du navigateur
  const handlePopState = (event) => {
    if (event.state && event.state.page) {
      // Navigation depuis l'état du navigateur
      currentPage.value = event.state.page;
      
      if (event.state.projectId) {
        sessionStorage.setItem('currentProjectId', event.state.projectId);
      }
    } else {
      // Fallback: détecter depuis l'URL
      const path = window.location.pathname;
      
      if (path === '/' || path === '') {
        currentPage.value = 'home';
      } else if (path.startsWith('/portfolio')) {
        currentPage.value = 'portfolio';
      } else if (path.startsWith('/about')) {
        currentPage.value = 'about';
      } else if (path.startsWith('/contact')) {
        currentPage.value = 'contact';
      } else if (path.startsWith('/project/')) {
        currentPage.value = 'project-detail';
        const projectId = path.split('/project/')[1];
        if (projectId) {
          sessionStorage.setItem('currentProjectId', projectId);
        }
      }
    }
    
    menuOpen.value = false;
    window.scrollTo(0, 0);
  };

  // 🔥 NOUVEAU: Initialiser l'écoute du bouton retour
  const initNavigation = () => {
    if (typeof window !== 'undefined') {
      // Écouter les événements popstate (bouton retour/avant)
      window.addEventListener('popstate', handlePopState);
      
      // Initialiser l'état de l'historique au chargement
      const initialState = {
        page: currentPage.value,
        projectId: sessionStorage.getItem('currentProjectId')
      };
      window.history.replaceState(initialState, '', window.location.pathname);
    }
  };

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };

  const setScrollY = (y) => {
    scrollY.value = y;
  };

  return {
    currentPage,
    menuOpen,
    scrollY,
    setPage,
    navigateToProject,
    toggleMenu,
    setScrollY,
    initNavigation,
    handlePopState
  };
});