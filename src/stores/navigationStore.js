import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {
  // Récupérer la page sauvegardée ou par défaut 'home'
  const currentPage = ref(
    typeof window !== 'undefined' 
      ? sessionStorage.getItem('currentPage') || 'home'
      : 'home'
  );
  
  const menuOpen = ref(false);
  const scrollY = ref(0);

  // Fonction pour changer de page
  const setPage = (page) => {
    currentPage.value = page;
    menuOpen.value = false;
    window.scrollTo(0, 0);
    
    // Sauvegarder la page actuelle
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('currentPage', page);
    }
  };

  // ✨ CORRIGÉ: Navigation vers un projet spécifique
  const navigateToProject = (projectId) => {
    currentPage.value = 'project-detail';
    menuOpen.value = false;
    // ❌ NE PAS scroller ici - laisse le composant le faire
    
    // Stocker l'ID du projet et la page
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('currentProjectId', projectId);
      sessionStorage.setItem('currentPage', 'project-detail');
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
    setScrollY
  };
});