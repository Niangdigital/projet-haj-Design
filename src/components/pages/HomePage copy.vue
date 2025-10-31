src/components/pages/HomePage.vue<template>
  <section class="featured-projects-carousel">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Portfolio</p>
        <h2>Nos dernières réalisations</h2>
        <p class="section-description">Découvrez une sélection de nos projets phares.</p>
        <div class="section-divider"></div>
      </div>

      <!-- CAROUSEL CONTAINER -->
      <div 
        class="carousel-wrapper"
        @mouseenter="pauseAutoRotation"
        @mouseleave="resumeAutoRotation"
      >
        <!-- NAVIGATION ARROWS -->
        <button 
          class="carousel-arrow carousel-arrow-left" 
          @click="previousSlide"
          aria-label="Projet précédent"
        >
          ←
        </button>
        
        <button 
          class="carousel-arrow carousel-arrow-right" 
          @click="nextSlide"
          aria-label="Projet suivant"
        >
          →
        </button>

        <!-- CARDS CONTAINER -->
        <div class="carousel-track">
          <div 
            v-for="(project, index) in displayedProjects" 
            :key="`${project.id}-${index}`"
            :class="getCardClasses(index)"
            class="carousel-card"
            @click="handleCardClick(index)"
          >
            <!-- PROJECT IMAGE -->
            <div class="card-image-container">
              <div 
                class="card-image" 
                :style="{ background: project.image }"
              ></div>
              
              <!-- OVERLAY FOR CENTER CARD ONLY -->
              <div v-if="index === 2" class="center-card-overlay">
                <button class="view-project-btn" @click.stop="viewProject(project.id)">
                  Voir le projet complet
                  <span class="arrow">→</span>
                </button>
              </div>
            </div>

            <!-- PROJECT CONTENT (Hidden for center card) -->
            <div v-if="index !== 2" class="card-content">
              <span class="card-category">{{ project.category }}</span>
              <h3>{{ project.title }}</h3>
              <p class="card-description">{{ project.description }}</p>
              <div class="card-details">
                <p>{{ project.details }}</p>
              </div>
            </div>

            <!-- MINIMAL INFO FOR CENTER CARD -->
            <div v-else class="center-card-info">
              <span class="center-card-category">{{ project.category }}</span>
              <h3 class="center-card-title">{{ project.title }}</h3>
            </div>
          </div>
        </div>

        <!-- PROGRESS INDICATORS -->
        <div class="carousel-indicators">
          <button
            v-for="(project, index) in featuredProjects"
            :key="project.id"
            :class="{ active: index === getCurrentRealIndex() }"
            class="indicator-dot"
            @click="goToSlide(index)"
            :aria-label="`Aller au projet ${index + 1}`"
          ></button>
        </div>
      </div>

      <!-- SEE ALL BUTTON -->
      <div class="section-cta">
        <button @click="nav.setPage('portfolio')" class="button-secondary">
          Voir tous nos projets →
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { usePortfolioStore } from '../../stores/portfolioStore';
import { useNavigationStore } from '../../stores/navigationStore';

const portfolio = usePortfolioStore();
const nav = useNavigationStore();

const currentIndex = ref(0);
const isPaused = ref(false);
let autoRotateInterval = null;

const featuredProjects = computed(() => portfolio.featuredProjects);

// Créer un tableau circulaire pour l'effet infini
// On affiche 5 cartes : [-2, -1, CENTRE, +1, +2]
const displayedProjects = computed(() => {
  const projects = featuredProjects.value;
  if (projects.length === 0) return [];
  
  const result = [];
  for (let i = -2; i <= 2; i++) {
    const index = (currentIndex.value + i + projects.length) % projects.length;
    result.push(projects[index]);
  }
  return result;
});

// Obtenir les classes pour chaque carte selon sa position
const getCardClasses = (index) => {
  const positions = {
    0: 'card-far-left',
    1: 'card-left',
    2: 'card-center',
    3: 'card-right',
    4: 'card-far-right'
  };
  return positions[index] || '';
};

// Navigation
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % featuredProjects.value.length;
};

const previousSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + featuredProjects.value.length) % featuredProjects.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const getCurrentRealIndex = () => {
  return currentIndex.value;
};

// Click sur une carte non-centrale : la centrer
const handleCardClick = (displayIndex) => {
  if (displayIndex !== 2) {
    const offset = displayIndex - 2;
    currentIndex.value = (currentIndex.value + offset + featuredProjects.value.length) % featuredProjects.value.length;
  }
};

// Voir le détail du projet
const viewProject = (projectId) => {
  portfolio.setSelectedProject(projectId);
  nav.navigateToProject(projectId);
};

// Auto-rotation
const startAutoRotation = () => {
  if (autoRotateInterval) clearInterval(autoRotateInterval);
  autoRotateInterval = setInterval(() => {
    if (!isPaused.value) {
      nextSlide();
    }
  }, 4000); // 4 secondes par slide
};

const pauseAutoRotation = () => {
  isPaused.value = true;
};

const resumeAutoRotation = () => {
  isPaused.value = false;
};

onMounted(() => {
  startAutoRotation();
});

onUnmounted(() => {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval);
  }
});
</script>

<style scoped>
.featured-projects-carousel {
  padding: 10rem 0;
  background-color: var(--white);
  overflow: hidden;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  margin-bottom: 6rem;
  text-align: center;
}

.section-label {
  color: var(--text-light);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.section-header h2 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.section-description {
  color: var(--text-light);
  font-weight: 300;
  max-width: 42rem;
  margin: 0 auto;
}



/* ============================================
   CAROUSEL WRAPPER
   ============================================ */
.carousel-wrapper {
  position: relative;
  margin-bottom: 4rem;
  min-height: 550px;
}

/* ============================================
   CAROUSEL TRACK
   ============================================ */
.carousel-track {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
  perspective: 1200px;
}

/* ============================================
   CAROUSEL CARD - BASE
   ============================================ */
.carousel-card {
  border-radius: var(--radius-2xl);
  overflow: hidden;
  background-color: var(--white);
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  flex-shrink: 0;
  width: 280px;
  position: relative;
}

/* ============================================
   CARD POSITIONS
   ============================================ */
.card-far-left,
.card-far-right {
  opacity: 0.3;
  transform: scale(0.7) translateX(0);
  filter: blur(2px);
  pointer-events: none;
}

.card-left {
  opacity: 0.6;
  transform: scale(0.85) translateX(40px);
  z-index: 1;
}

.card-right {
  opacity: 0.6;
  transform: scale(0.85) translateX(-40px);
  z-index: 1;
}

.card-center {
  opacity: 1;
  transform: scale(1.15) translateY(-10px);
  z-index: 10;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  cursor: default;
}

.card-center:hover {
  transform: scale(1.18) translateY(-15px);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.3);
}

/* ============================================
   CARD IMAGE
   ============================================ */
.card-image-container {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;
}

.carousel-card:hover .card-image {
  transform: scale(1.05);
}

/* ============================================
   CENTER CARD OVERLAY
   ============================================ */
.center-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-center .center-card-overlay {
  opacity: 1;
}

.view-project-btn {
  background-color: var(--white);
  color: var(--text-dark);
  padding: 0.875rem 1.75rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 0.9375rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.view-project-btn:hover {
  background-color: var(--text-dark);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.view-project-btn .arrow {
  transition: transform 0.3s ease;
}

.view-project-btn:hover .arrow {
  transform: translateX(4px);
}

/* ============================================
   CARD CONTENT (Side cards)
   ============================================ */
.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.card-category {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  opacity: 0.75;
}

.card-content h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-description {
  font-size: 0.875rem;
  color: var(--text-light);
  margin-bottom: 1rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-details {
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  margin-top: auto;
}

.card-details p {
  font-size: 0.75rem;
  color: var(--secondary);
  margin: 0;
}

/* ============================================
   CENTER CARD INFO (Minimal)
   ============================================ */
.center-card-info {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  z-index: 10;
}

.center-card-category {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.95);
  color: var(--text-dark);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.center-card-title {
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0.75rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ============================================
   NAVIGATION ARROWS
   ============================================ */
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--white);
  color: var(--text-dark);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 20;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-arrow:hover {
  background-color: var(--text-dark);
  color: var(--white);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.carousel-arrow-left {
  left: 1rem;
}

.carousel-arrow-right {
  right: 1rem;
}

/* ============================================
   INDICATORS
   ============================================ */
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 3rem;
}

.indicator-dot {
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background-color: var(--border);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.indicator-dot:hover {
  background-color: var(--text-light);
  transform: scale(1.2);
}

.indicator-dot.active {
  background-color: var(--text-dark);
  width: 2rem;
  border-radius: 0.5rem;
}

/* ============================================
   CTA SECTION
   ============================================ */
.section-cta {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
}

.button-secondary {
  background-color: var(--text-dark);
  color: var(--white);
  padding: 0.875rem 2rem;
  border-radius: var(--radius-lg);
  font-size: 0.9375rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.button-secondary:hover {
  background-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.2);
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .carousel-track {
    gap: 1rem;
  }

  .carousel-card {
    width: 240px;
  }

  .card-left {
    transform: scale(0.85) translateX(20px);
  }

  .card-right {
    transform: scale(0.85) translateX(-20px);
  }
}

@media (max-width: 768px) {
  .featured-projects-carousel {
    padding: 4rem 0;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-header h2 {
    font-size: 1.875rem;
  }

  .carousel-wrapper {
    min-height: 450px;
  }

  .carousel-track {
    gap: 0.5rem;
  }

  /* Sur mobile : afficher seulement 3 cartes */
  .card-far-left,
  .card-far-right {
    display: none;
  }

  .carousel-card {
    width: 200px;
  }

  .card-image-container {
    height: 220px;
  }

  .card-center {
    transform: scale(1.1) translateY(-10px);
  }

  .carousel-arrow {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.25rem;
  }

  .carousel-arrow-left {
    left: 0.5rem;
  }

  .carousel-arrow-right {
    right: 0.5rem;
  }
}
</style>