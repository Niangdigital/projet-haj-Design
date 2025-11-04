<template>
  <div>
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-background"></div>
      <div class="hero-content">
        <div class="hero-text" style="animation-delay: 0.2s">
          <p class="hero-subtitle">Bienvenue chez HAJ Design</p>
        </div>
        <h1 class="hero-title" style="animation-delay: 0.4s">
         Plus qu'un design une nouvelle expérience <span class="highlight">pour vos futurs clients</span>
        </h1>
        <p class="hero-description" style="animation-delay: 0.6s">
          Construction — Design d'Intérieur — Architecture — Maçonnerie
        </p>
        <button @click="nav.setPage('portfolio')" class="btn btn-primary btn-lg" style="animation-delay: 0.8s">
          Découvrir nos projets
          <span class="btn-arrow">→</span>
        </button>
      </div>
    </section>

    <!-- FEATURED PROJECTS - CARROUSEL 3D -->
    <section class="featured-projects" ref="carouselSection">
      <div class="container">
        <div class="section-header">
          
        </div>

        <!-- CARROUSEL 3D CONTAINER -->
        <div class="carousel-wrapper">
          <div 
            class="carousel-3d" 
            :style="{ perspective: '2000px' }"
          >
            <div 
              v-for="(project, index) in portfolio.carouselProjects" 
              :key="project.id"
              class="carousel-card"
              :class="{ 'is-centered': isCardCentered(index) }"
              :style="getCardStyle(index)"
              @click="handleCardClick(project.id, index)"
              @mouseenter="handleCardHover(index, true)"
              @mouseleave="handleCardHover(index, false)"
            >
              <!-- IMAGE CONTAINER AVEC DÉFILEMENT -->
              <div class="card-image-wrapper">
                <transition name="image-crossfade">
                  <div 
                    :key="currentImageIndexes[index]"
                    class="card-image"
                    :style="{ 
                      background: getProjectImage(project, index),
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }"
                  />
                </transition>
                
                <!-- GRADIENT OVERLAY -->
                <div class="card-gradient" :style="{ background: project.gradientOverlay || 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }"></div>
                
                <!-- INDICATEUR D'IMAGES (visible uniquement sur carte centrale) -->
                <div v-if="isCardCentered(index)" class="image-indicator">
                  <span>{{ currentImageIndexes[index] + 1 }} / {{ getProjectImages(project).length }}</span>
                </div>
              </div>

              <!-- CONTENU NON-CENTRAL (titre + catégorie) -->
              <transition name="fade">
                <div v-if="!isCardCentered(index)" class="card-content-default">
                  <span class="card-category">{{ project.category }}</span>
                  <h3 class="card-title">{{ project.title }}</h3>
                  <p class="card-description">{{ project.description }}</p>
                </div>
              </transition>

              <!-- BOUTON CTA (visible uniquement sur carte centrale) -->
              <transition name="slide-up">
                <div v-if="isCardCentered(index)" class="card-cta">
                  <button class="btn btn-white btn-md" @click.stop="viewProject(project.id)">
                    Voir le projet complet
                    <span class="btn-arrow">→</span>
                  </button>
                </div>
              </transition>
            </div>
          </div>

          <!-- NAVIGATION ARROWS -->
          <button @click="navigateCarousel('prev')" class="carousel-nav carousel-nav-prev">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button @click="navigateCarousel('next')" class="carousel-nav carousel-nav-next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <!-- CONTROLS AVEC NAVIGATION INTÉGRÉE -->
        <div class="carousel-controls">
          <!-- Flèche gauche -->
          <button @click="navigateCarousel('prev')" class="progress-nav-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <!-- Progress dots -->
          <div class="progress-dots">
            <button
              v-for="(project, index) in portfolio.carouselProjects"
              :key="project.id"
              @click="jumpToCard(index)"
              class="progress-dot"
              :class="{ active: index === centerIndex }"
            ></button>
          </div>
          
          <!-- Flèche droite -->
          <button @click="navigateCarousel('next')" class="progress-nav-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <!-- PROJECTS GRID -->
        <div class="projects-grid-section">
          <div class="section-header-grid">
            <h2>Nos dernières réalisations</h2>
            <p class="section-description">Découvrez une sélection de nos projets phares.</p>
          </div>
          
          <div class="projects-grid">
            <div 
              v-for="p in portfolio.gridProjects" 
              :key="p.id" 
              class="project-card"
              @click="viewProject(p.id)"
            >
              <div class="project-image-container">
                <img :src="extractImageUrl(p.image)" alt="" class="project-image" />
              </div>
              <div class="project-content">
                <span class="project-category">{{ p.category }}</span>
                <h3>{{ p.title }}</h3>
                <p>{{ p.description }}</p>
                <div class="project-footer">
                  <div class="project-details">
                    <p>{{ p.details }}</p>
                  </div>
                  <div class="project-action">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section-cta">
            <button @click="nav.setPage('portfolio')" class="btn btn-primary btn-lg">
              Voir le catalogue complet →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST SECTION -->
    <section class="trust-section" ref="statsSection">
      <div class="container">
        <div class="trust-content">
          <!-- LEFT: TEXT CONTENT -->
          <div class="trust-text">
            <p class="trust-label">Pourquoi HAJ Design</p>
            <h2 class="trust-title">Une expertise reconnue au service de vos ambitions</h2>
            <p class="trust-description">
              Depuis plus de 15 ans, nous transformons les espaces en lieux d'exception. 
              Notre approche combine créativité, expertise technique et engagement qualité 
              pour donner vie à vos projets les plus ambitieux.
            </p>
            
            <!-- SERVICES LIST -->
            <div class="trust-services">
              <div class="service-item">
                <div class="service-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div class="service-text">
                  <h4>Architecture & Design</h4>
                  <p>Conception sur mesure adaptée à vos besoins</p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div class="service-text">
                  <h4>Construction & Maçonnerie</h4>
                  <p>Réalisation complète avec finitions haut de gamme</p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div class="service-text">
                  <h4>Design d'Intérieur</h4>
                  <p>Aménagement et décoration personnalisés</p>
                </div>
              </div>
            </div>

            <!-- CTA BUTTONS -->
            <div class="trust-cta-group">
              <button @click="nav.setPage('contact')" class="btn btn-secondary btn-md">
                Discuter de mon projet
                <span class="btn-arrow">→</span>
              </button>
              <button @click="nav.setPage('about')" class="btn btn-outline btn-md">
                En savoir plus
              </button>
            </div>
          </div>

          <!-- RIGHT: COMPACT STATS -->
          <div class="trust-stats">
            <div class="stats-compact">
              <div class="stat-compact-item">
                <div class="stat-compact-number">{{ animatedStats[0] }}<span>+</span></div>
                <p>Projets réalisés</p>
              </div>
              
              <div class="stat-compact-divider"></div>
              
              <div class="stat-compact-item">
                <div class="stat-compact-number">{{ animatedStats[1] }}</div>
                <p>Ans d'expertise</p>
              </div>
              
              <div class="stat-compact-divider"></div>
              
              <div class="stat-compact-item">
                <div class="stat-compact-number">{{ animatedStats[2] }}<span>%</span></div>
                <p>Clients satisfaits</p>
              </div>
            </div>

            <!-- TRUST BADGE -->
            <div class="trust-badge">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
              <span>Qualité certifiée & garantie</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNERS SECTION -->
    <PartnersSection />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { usePortfolioStore } from '../../stores/portfolioStore';
import { useNavigationStore } from '../../stores/navigationStore';
import PartnersSection from '../../components/PartnersSection.vue';

const portfolio = usePortfolioStore();
const nav = useNavigationStore();

// CAROUSEL STATE
const centerIndex = ref(0);
const currentImageIndexes = ref([]);
const isPaused = ref(false);
const isHoveredCentered = ref(false);
const carouselSection = ref(null);
const isCarouselInView = ref(false);
const carouselScale = ref(0.75);
const isScaleAnimationComplete = ref(false);
const isImageRotationComplete = ref(false);

// STATS STATE
const statsSection = ref(null);
const animatedStats = ref([0, 0, 0]);
const statsTargets = [150, 15, 98];
const hasAnimated = ref(false);

// TIMERS
let imageTimer = null;
let cardRotationTimer = null;

const initializeImageIndexes = () => {
  currentImageIndexes.value = portfolio.carouselProjects.map(() => 0);
};

const getProjectImages = (project) => {
  if (project.images && Array.isArray(project.images)) {
    return project.images;
  }
  return [project.image];
};

const getProjectImage = (project, index) => {
  const images = getProjectImages(project);
  const imageIndex = currentImageIndexes.value[index] || 0;
  return images[imageIndex] || project.image;
};

const isCardCentered = (index) => {
  return index === centerIndex.value;
};

const getCardStyle = (index) => {
  const totalCards = portfolio.carouselProjects.length;
  let position = (index - centerIndex.value + totalCards) % totalCards;
  
  if (position > totalCards / 2) {
    position = position - totalCards;
  }

  const isCentered = position === 0;
  const isMobile = window.innerWidth < 768;
  
  // En mobile, désactiver complètement le scale
  const scale = isMobile ? 1 : (isCentered ? carouselScale.value : 0.75);
  const opacity = isCentered ? 1 : 0.5;
  const translateX = isMobile ? position * window.innerWidth : position * 400;
  const translateZ = isMobile ? 0 : (isCentered ? 0 : -150);
  const blur = isCentered ? 0 : 2;
  const zIndex = isCentered ? 10 : 5 - Math.abs(position);

  return {
    transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
    opacity: opacity,
    filter: `blur(${blur}px)`,
    zIndex: zIndex,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  };
};

const navigateCarousel = (direction) => {
  const totalCards = portfolio.carouselProjects.length;
  if (direction === 'next') {
    centerIndex.value = (centerIndex.value + 1) % totalCards;
  } else {
    centerIndex.value = (centerIndex.value - 1 + totalCards) % totalCards;
  }
  currentImageIndexes.value[centerIndex.value] = 0;
  isImageRotationComplete.value = false;
};

const jumpToCard = (index) => {
  centerIndex.value = index;
  currentImageIndexes.value[index] = 0;
  isImageRotationComplete.value = false;
};

const handleCardHover = (index, hovering) => {
  if (isCardCentered(index)) {
    isHoveredCentered.value = hovering;
  }
};

const handleCardClick = (projectId, index) => {
  if (isCardCentered(index)) {
    viewProject(projectId);
  } else {
    jumpToCard(index);
  }
};

const viewProject = (projectId) => {
  portfolio.setSelectedProject(projectId);
  nav.navigateToProject(projectId);
};

const extractImageUrl = (imageString) => {
  if (!imageString) return '';
  const urlMatch = imageString.match(/url\(['"]?([^'"]+)['"]?\)/);
  return urlMatch ? urlMatch[1] : imageString;
};

const startImageRotation = () => {
  if (imageTimer) clearInterval(imageTimer);
  
  imageTimer = setInterval(() => {
    if (!isScaleAnimationComplete.value || isPaused.value || isHoveredCentered.value) return;

    const currentProject = portfolio.carouselProjects[centerIndex.value];
    const images = getProjectImages(currentProject);
    const currentImageIndex = currentImageIndexes.value[centerIndex.value];

    if (currentImageIndex < images.length - 1) {
      currentImageIndexes.value[centerIndex.value]++;
      isImageRotationComplete.value = false;
    } else {
      isImageRotationComplete.value = true;
    }
  }, 3000);
};

const startCardRotation = () => {
  if (cardRotationTimer) clearInterval(cardRotationTimer);
  
  cardRotationTimer = setInterval(() => {
    if (!isScaleAnimationComplete.value || !isImageRotationComplete.value || isPaused.value || isHoveredCentered.value) {
      return;
    }

    navigateCarousel('next');
    isImageRotationComplete.value = false;
  }, 1000);
};

const animateStats = () => {
  if (hasAnimated.value) return;
  hasAnimated.value = true;

  const duration = 2000;
  const startTime = Date.now();
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const rawProgress = Math.min(elapsed / duration, 1);
    const progress = easeOutQuart(rawProgress);

    animatedStats.value = statsTargets.map((target) => {
      return Math.floor(target * progress);
    });

    if (rawProgress < 1) {
      requestAnimationFrame(animate);
    } else {
      animatedStats.value = [...statsTargets];
    }
  };

  animate();
};

onMounted(() => {
  initializeImageIndexes();
  startImageRotation();
  startCardRotation();

  // Sur mobile, démarrer immédiatement sans attendre l'intersection
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    isCarouselInView.value = true;
    isScaleAnimationComplete.value = true;
    carouselScale.value = 1;
  } else {
    // Sur desktop, garder le comportement d'intersection
    const carouselObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScaleAnimationComplete.value) {
            isCarouselInView.value = true;
            
            const startTime = Date.now();
            const duration = 200;
            
            const animateScale = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
              const easedProgress = easeOutCubic(progress);
              
              carouselScale.value = 0.75 + (0.25 * easedProgress);
              
              if (progress < 1) {
                requestAnimationFrame(animateScale);
              } else {
                carouselScale.value = 1;
                isScaleAnimationComplete.value = true;
              }
            };
            
            animateScale();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (carouselSection.value) {
      carouselObserver.observe(carouselSection.value);
    }
  }
  // Observer pour les stats
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          animateStats();
        }
      });
    },
    { threshold: 0.3 }
  );

  if (statsSection.value) {
    statsObserver.observe(statsSection.value);
  }
});

onUnmounted(() => {
  if (imageTimer) clearInterval(imageTimer);
  if (cardRotationTimer) clearInterval(cardRotationTimer);
});
</script>

<style scoped>
/* HERO SECTION */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7rem 12rem;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.55) 50%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053') center/cover no-repeat;
  z-index: 1;
  filter: blur(3.0px);
}

.hero-background::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 30% 50%, 
    rgba(59, 130, 246, 0.1) 0%, 
    transparent 50%
  );
  animation: breathe 8s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.6; }
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 10;
}

.hero-text {
  margin-bottom: 2rem;
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  color: var(--white);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-title {
  margin-bottom: 2rem;
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
  color: var(--bg-lighter);
  font-size: var(--text-hero);
  line-height: var(--line-height-tight);
}

.highlight {
  font-weight: 600;
  color: var(--white);
}

.hero-description {
  font-size: var(--text-body-lg);
  color: var(--bg-lighter);
  margin-bottom: 3.5rem;
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

/* FEATURED PROJECTS - CARROUSEL */
.featured-projects {
  padding: 2rem 0rem 10rem;
  background-color: var(--white);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  margin-bottom: 0rem;
}

.section-label {
  color: var(--text-light);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
}

.section-header h2 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: var(--text-h1);
}

.section-description {
  color: var(--text-light);
  font-weight: 300;
  max-width: 42rem;
  font-size: var(--text-body-lg);
}

.section-divider {
  width: 4rem;
  height: 2px;
  background: var(--text-dark);
  margin-top: 1.5rem;
}

/* CARROUSEL 3D */
.carousel-wrapper {
  position: relative;
  margin-bottom: 0rem;
}

.carousel-3d {
  position: relative;
  width: 100%;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.carousel-card {
  position: absolute;
  width: 380px;
  height: 520px;
  border-radius: 24px;
  overflow: hidden;
  background: var(--white);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transform-style: preserve-3d;
}

.carousel-card.is-centered {
  cursor: default;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid transparent;
}

.carousel-card.is-centered:hover {
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
  border-color: var(--primary);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-card.is-centered:hover .card-image {
  transform: scale(1.08);
}

.card-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.image-indicator {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: var(--text-body-sm);
  font-weight: 500;
  z-index: 2;
}

/* CONTENU PAR DÉFAUT (non-central) */
.card-content-default {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  color: white;
  z-index: 1;
}

.card-category {
  font-size: var(--text-small);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
  display: block;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: var(--text-h3);
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.card-description {
  font-size: var(--text-body-sm);
  opacity: 0.9;
  line-height: 1.5;
}

/* CTA BUTTON (carte centrale) */
.card-cta {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

/* NAVIGATION ARROWS */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: var(--text-dark);
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 20;
  opacity: 0.3;
}

.carousel-nav:hover {
  opacity: 1;
  transform: translateY(-50%) scale(1.15);
}

.carousel-nav-prev {
  left: 30px;
}

.carousel-nav-next {
  right: 30px;
}

/* CONTROLS AVEC NAVIGATION INTÉGRÉE */
.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
}

.progress-nav-btn {
  background: white;
  color: var(--text-dark);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 0;
  flex-shrink: 0;
}

.progress-nav-btn:hover {
  background: var(--text-dark);
  color: white;
  border-color: var(--text-dark);
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.progress-dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.progress-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  flex-shrink: 0;
}

.progress-dot.active {
  width: 32px;
  border-radius: 5px;
  background: var(--text-dark);
}

.progress-dot:hover:not(.active) {
  background: rgba(0, 0, 0, 0.4);
  transform: scale(1.2);
}

/* PROJECTS GRID SECTION */
.projects-grid-section {
  padding: 8rem 0 0;
}

.section-header-grid {
  text-align: center;
  margin-bottom: 5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.section-header-grid h2 {
  font-size: var(--text-h1);
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-header-grid .section-description {
  color: var(--text-light);
  font-size: var(--text-body-lg);
  font-weight: 300;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
  padding: 0;
}

.project-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background-color: var(--white);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.project-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  transform: translateY(-8px);
}

/* IMAGE CONTAINER AVEC RATIO FIXE */
.project-image-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;
  background-color: var(--bg-lighter);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-category {
  font-size: var(--text-small);
  font-weight: 700;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.project-card h3 {
  font-size: var(--text-body-lg);
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.project-card:hover h3 {
  color: var(--primary);
}

.project-card p {
  font-size: var(--text-body-sm);
  color: var(--text-light);
  margin-bottom: 1rem;
  flex-grow: 1;
  line-height: 1.6;
}

.project-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  gap: 1rem;
}

.project-details {
  flex: 1;
}

.project-details p {
  font-size: var(--text-body-sm);
  color: var(--text-light);
  margin: 0;
  font-weight: 500;
}

.project-action {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.project-action svg {
  color: var(--text-light);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-action svg {
  color: var(--primary);
  transform: translateX(4px);
}

/* TRANSITIONS */
.image-crossfade-enter-active,
.image-crossfade-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.image-crossfade-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image-crossfade-enter-from {
  opacity: 0;
}

.image-crossfade-leave-to {
  opacity: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.section-cta {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
}

/* TRUST SECTION - POURQUOI NOUS FAIRE CONFIANCE */
.trust-section {
  padding: 10rem 0;
  background-color: var(--bg-lighter);
}

.trust-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

/* LEFT SIDE - TEXT CONTENT */
.trust-text {
  max-width: 560px;
}

.trust-label {
  color: var(--primary);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  display: block;
}

.trust-title {
  font-size: var(--text-h1);
  font-weight: 600;
  color: var(--text-dark);
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.trust-description {
  font-size: var(--text-body-lg);
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: 3rem;
}

/* SERVICES LIST */
.trust-services {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.service-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.service-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.service-item:hover .service-icon {
  background: var(--primary);
  transform: translateY(-2px);
}

.service-icon svg {
  color: var(--text-dark);
  transition: color 0.3s ease;
}

.service-item:hover .service-icon svg {
  color: white;
}

.service-text h4 {
  font-size: var(--text-body);
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.service-text p {
  font-size: var(--text-body-sm);
  color: var(--text-light);
  line-height: 1.5;
}

/* CTA BUTTONS GROUP */
.trust-cta-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* RIGHT SIDE - COMPACT STATS */
.trust-stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-compact {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.stat-compact-item {
  text-align: center;
  flex: 1;
}

.stat-compact-number {
  font-size: var(--text-stat);
  font-weight: 600;
  color: var(--text-dark);
  line-height: 1;
  margin-bottom: 0.5rem;
  font-variant-numeric: tabular-nums;
}

.stat-compact-number span {
  font-size: 1.75rem;
  font-weight: 500;
  color: var(--primary);
}

.stat-compact-item p {
  font-size: var(--text-body-sm);
  color: var(--text-light);
  font-weight: 400;
}

.stat-compact-divider {
  width: 1px;
  height: 60px;
  background: rgba(0, 0, 0, 0.1);
}

/* TRUST BADGE */
.trust-badge {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.trust-badge svg {
  color: var(--primary);
  flex-shrink: 0;
}

.trust-badge span {
  font-size: var(--text-body-sm);
  font-weight: 600;
  color: var(--text-dark);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero {
    padding: 4rem 1rem;
  }

  .hero-title{
    font-size: 2.5rem;
   
}
 .hero-content {
    padding: 0;
  }
  .featured-projects {
    padding: 0 0 6rem;
  }
  .stats {
    padding: 4rem 0;
  }

  .section-header {
    margin-bottom: 3rem;
     padding: 0;
  }

  .carousel-3d {
  height: 550px;
  padding: 0;
  }

  .carousel-card {
    width: calc(100vw - 0rem);
    max-width: 100%;
    height: 520px;
  }

  .carousel-card.is-centered {
  cursor: default;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 0px solid transparent;
  }

  .carousel-nav {
  width: 40px;
  height: 40px;
  opacity: 0.5;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  }

  .carousel-nav svg {
  width: 20px;
  height: 20px;
  }

  .carousel-nav-prev {
    left: 4px;
  }

  .carousel-nav-next {
    right: 4px;
  }

  .section-cta {
    padding-top: 0rem;
  }

  /* TRUST SECTION RESPONSIVE */
  .trust-section {
    padding: 6rem 0;
  }

  .trust-content {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .trust-text {
    max-width: 100%;
  }

  .trust-services {
    gap: 1.25rem;
  }

  .service-icon {
    width: 40px;
    height: 40px;
  }

  .service-icon svg {
    width: 18px;
    height: 18px;
  }

  .trust-cta-group {
    flex-direction: column;
  }

  .trust-stats {
    gap: 1.5rem;
  }
  .btn-md{
    padding: var(--btn-padding-lg);
    font-size: var(--text-body-sm);
    gap: 0.5rem ;
}
  .stats-compact {
    flex-direction: column;
    gap: 2rem;
   
  }

  .stat-compact-divider {
    width: 100%;
    height: 1px;
  }

  .trust-badge {
    padding: 1.25rem 1.5rem;
  }

  .carousel-controls {
    flex-direction: row;
    gap: 0.75rem;
  }

  .progress-nav-btn {
    width: 28px;
    height: 28px;
  }
  .progress-nav-btn svg {
    width: 12px;
    height: 12px;
  }

  .card-cta {
    padding: 2rem;
  }

  .projects-grid-section {
    margin-top: 0;
    padding: 4rem 0 0;
    border-radius: 30px;
  }

  .section-header-grid {
    margin-bottom: 3rem;
    padding: 0 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0;
  }


}
</style>