<template>
  <header :class="headerClasses">
    <div class="container">
      <div class="header-content">
        <button @click="nav.setPage('home')" class="logo">
          <span>HAJ</span>Design
        </button>

        <nav v-if="!isMobile" class="nav-desktop">
          <button 
            v-for="page in pages" 
            :key="page.id" 
            @click="nav.setPage(page.id)" 
            :class="['nav-link', { 'nav-link-active': isActivePage(page.id) }]"
          >
            {{ page.label }}
          </button>
        </nav>

        <button v-if="!isMobile" @click="nav.setPage('contact')" class="btn btn-secondary btn-sm">
          Nous contacter
        </button>

        <button v-if="isMobile" @click="nav.toggleMenu" class="menu-button">
          <span v-if="!nav.menuOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>

      <nav v-if="nav.menuOpen && isMobile" class="nav-mobile">
        <button 
          v-for="page in pages" 
          :key="page.id" 
          @click="nav.setPage(page.id)" 
          :class="['nav-mobile-link', { 'nav-mobile-link-active': isActivePage(page.id) }]"
        >
          {{ page.label }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useNavigationStore } from '../../stores/navigationStore';

const nav = useNavigationStore();
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 768);

// Gérer le scroll directement dans le composant
const handleScroll = () => {
  nav.scrollY = window.scrollY;
};

// Gérer le redimensionnement de la fenêtre
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});

const headerClasses = computed(() => ({
  'header': true,
  'header-sticky': nav.scrollY > 50
}));

const pages = [
  { id: 'home', label: 'Accueil' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'À Propos' },
  { id: 'contact', label: 'Contact' }
];

// Vérifier si la page est active
const isActivePage = (pageId) => {
  return nav.currentPage === pageId;
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--white);
  border-bottom: 1px solid var(--border);
  transition: all 0.3s ease;
}

.header.header-sticky {
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
}

.logo {
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--text-dark);
  background: none;
  cursor: pointer;
  transition: color 0.3s ease;
  border: none;
}

.logo:hover {
  color: var(--primary);
}

.logo span {
  font-weight: 600;
}

.nav-desktop {
  display: flex;
  gap: 2rem;
}

.nav-link {
  position: relative;
  font-size: var(--text-body-lg);
  color: var(--text-light);
  background: none;
  font-weight: 400;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border: none;
  cursor: pointer;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--text-dark);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--text-dark);
}

.nav-link:hover::after {
  width: 100%;
}

/* Style pour la page active */
.nav-link-active {
  color: var(--text-dark);
  font-weight: 500;
}

.nav-link-active::after {
  width: 100%;
  background-color: var(--text-dark);
}

.cta-button {
  background-color: var(--text-dark);
  color: var(--white);
  padding: 0.625rem 1.5rem;
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.cta-button:hover {
  background-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.15);
}

.menu-button {
  display: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  color: var(--text-dark);
}

.nav-mobile {
  display: none;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid var(--border);
  padding: 0.5rem 0;
}

.nav-mobile-link {
  color: var(--text-light);
  background: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.875rem 1rem;
  border: none;
  border-left: 3px solid transparent;
  font-weight: 400;
}

.nav-mobile-link:hover {
  color: var(--text-dark);
  background-color: var(--bg-lighter);
}

/* Style pour la page active mobile */
.nav-mobile-link-active {
  color: var(--text-dark);
  font-weight: 500;
  background-color: var(--bg-lighter);
  /*border-left-color: var(--text-dark);*/
  border-radius: var(--radius);
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .cta-button {
    display: none;
  }

  .menu-button {
    display: block;
  }

  .nav-mobile {
    display: flex;
  }

  .header-content {
    padding: 1rem 0;
  }
}
</style>