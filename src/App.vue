<template>
  <div class="app-wrapper">
    <Header />

    <main>
      <HomePage v-if="nav.currentPage === 'home'" />
      <PortfolioPage v-else-if="nav.currentPage === 'portfolio'" />
      <AboutPage v-else-if="nav.currentPage === 'about'" />
      <ContactPage v-else-if="nav.currentPage === 'contact'" />
      
      <!-- ✨ Key dynamique qui change à chaque projet -->
      <ProjectDetailPage 
        v-else-if="nav.currentPage === 'project-detail' && portfolio.selectedProjectId" 
        :projectId="portfolio.selectedProjectId"
        :key="portfolio.selectedProjectId"
      />
    </main>

    <WhatsAppButton />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue';
import { useNavigationStore } from './stores/navigationStore.js';
import { usePortfolioStore } from './stores/portfolioStore.js';
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';
import HomePage from './components/pages/HomePage.vue';
import PortfolioPage from './components/pages/PortfolioPage.vue';
import AboutPage from './components/pages/AboutPage.vue';
import ContactPage from './components/pages/ContactPage.vue';
import ProjectDetailPage from './components/pages/ProjectDetailPage.vue';
import WhatsAppButton from './components/ui/WhatsAppButton.vue';

const nav = useNavigationStore();
const portfolio = usePortfolioStore();

// ✅ SOLUTION: Watcher pour scroller APRÈS le rendu de la nouvelle page
watch(() => nav.currentPage, async () => {
  await nextTick(); // Attendre que Vue termine le rendu du nouveau composant
  window.scrollTo({ top: 0, behavior: 'instant' }); // Scroll instantané en haut
});

onMounted(() => {
  // 🔥 CRITIQUE: Initialiser la navigation pour le bouton retour
  nav.initNavigation();
  
  // Restaurer l'ID du projet au chargement
  if (nav.currentPage === 'project-detail') {
    const savedId = sessionStorage.getItem('currentProjectId');
    if (savedId) {
      portfolio.setSelectedProject(parseInt(savedId));
    }
  }
});
</script>

<style scoped>
.app-wrapper {
  background-color: var(--white);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  overflow-x: hidden;
}
</style>