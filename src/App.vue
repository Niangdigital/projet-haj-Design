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
import { onMounted } from 'vue';
import { useNavigationStore } from './stores/navigationStore.js';
import { usePortfolioStore } from './stores/portfolioStore.js';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import HomePage from './components/pages/HomePage.vue';
import PortfolioPage from './components/pages/PortfolioPage.vue';
import AboutPage from './components/pages/AboutPage.vue';
import ContactPage from './components/pages/ContactPage.vue';
import ProjectDetailPage from './components/pages/ProjectDetailPage.vue';
import WhatsAppButton from './components/ui/WhatsAppButton.vue';

const nav = useNavigationStore();
const portfolio = usePortfolioStore();

// Restaurer l'ID au chargement
onMounted(() => {
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