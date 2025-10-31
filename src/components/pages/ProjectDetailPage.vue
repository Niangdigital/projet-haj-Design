<template>
  <div v-if="project" class="project-detail">
    <!-- BACK BUTTON FIXE -->
    <button @click="goBack" class="back-button-fixed">
      ← Retour
    </button>

    <!-- HERO SECTION -->
    <section class="project-hero">
      <div class="hero-overlay"></div>
      <div 
        class="hero-background" 
        :style="{ backgroundImage: project.heroImage || project.image }"
      ></div>
      <div class="hero-content">
        <div class="container">
          <h1 class="project-title">{{ project.title }}</h1>
          <p class="project-subtitle">{{ project.details }}</p>
        </div>
      </div>
    </section>

     

      <!-- GALLERY -->
            <div v-if="project.gallery?.length" class="info-section">
              <h2 class="section-title">Galerie</h2>
              <div class="gallery-grid">
                <div 
                  v-for="(img, index) in project.gallery" 
                  :key="index" 
                  class="gallery-item" 
                  :style="{ backgroundImage: img }"
                  @click="openGallery(index)"
                ></div>
              </div>
            </div>

    <!-- PROJECT INFO -->
    <section class="project-info">
      <div class="container">
        <div class="info-grid">
          <!-- LEFT: Description -->
          <div class="info-main">
            <!-- À PROPOS -->
            <div class="info-section">
              <h2 class="section-title">À propos</h2>
              <p class="description-text">{{ project.description }}</p>
              <p v-if="project.longDescription" class="description-secondary">
                {{ project.longDescription }}
              </p>
            </div>

            <!-- TIMELINE -->
            <div v-if="project.timeline?.length" class="info-section">
              <h2 class="section-title">Processus</h2>
              <div class="timeline">
                <div v-for="(step, idx) in project.timeline" :key="idx" class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <h3 class="timeline-title">{{ step.phase }}</h3>
                    <p class="timeline-date">{{ step.date }}</p>
                    <p class="timeline-desc">{{ step.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- TESTIMONIAL -->
            <div v-if="project.testimonial" class="info-section">
              <h2 class="section-title">Témoignage client</h2>
              <div class="testimonial">
                <svg class="testimonial-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p class="testimonial-text">"{{ project.testimonial.text }}"</p>
                <div class="testimonial-author">
                  <strong>{{ project.testimonial.author }}</strong>
                  <span>{{ project.testimonial.role }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT: Sidebar -->
          <div class="info-sidebar">
            <!-- DÉTAILS -->
            <div class="sidebar-card">
              <h3 class="sidebar-title">Informations</h3>
              <div class="details-list">
                <div v-if="project.client" class="detail-row">
                  <span class="detail-label">Client</span>
                  <span class="detail-value">{{ project.client }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Catégorie</span>
                  <span class="detail-value">{{ project.category }}</span>
                </div>
                <div v-if="project.year" class="detail-row">
                  <span class="detail-label">Année</span>
                  <span class="detail-value">{{ project.year }}</span>
                </div>
                <div v-if="project.duration" class="detail-row">
                  <span class="detail-label">Durée</span>
                  <span class="detail-value">{{ project.duration }}</span>
                </div>
                <div v-if="project.surface" class="detail-row">
                  <span class="detail-label">Surface</span>
                  <span class="detail-value">{{ project.surface }}</span>
                </div>
                <div v-if="project.location" class="detail-row">
                  <span class="detail-label">Localisation</span>
                  <span class="detail-value">{{ project.location }}</span>
                </div>
                <div v-if="project.status" class="detail-row">
                  <span class="detail-label">Statut</span>
                  <span :class="['detail-value', 'status', getStatusClass(project.status)]">
                    {{ project.status }}
                  </span>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="sidebar-card cta-card">
              <h3 class="cta-title">Un projet en tête ?</h3>
              <p class="cta-description">
                Discutons de vos besoins et créons quelque chose d'exceptionnel.
              </p>
              <button @click="navigateToContact" class="cta-button">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RELATED PROJECTS -->
    <section v-if="relatedProjects.length > 0" class="related-projects">
      <div class="container">
        <h2 class="section-title-center">Projets similaires</h2>
        <div class="projects-grid">
          <div 
            v-for="related in relatedProjects" 
            :key="related.id" 
            @click="viewProject(related.id)"
            class="project-card"
          >
            <div class="card-image-wrapper">
              <img :src="extractImageUrl(related.image)" :alt="related.title" class="card-image" />
            </div>

            <div class="card-content">
              <span class="card-category">{{ related.category }}</span>
              <h3 class="card-title">{{ related.title }}</h3>
              <div class="card-footer">
                <span class="card-link">
                  Voir le projet
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- NOT FOUND -->
  <div v-else class="not-found">
    <div class="container">
      <h1>Projet non trouvé</h1>
      <p>Le projet que vous recherchez n'existe pas.</p>
      <button @click="goBack" class="back-button-large">
        ← Retour au portfolio
      </button>
    </div>
  </div>
</template>

<script setup>  

import { ref, computed, onMounted, watch } from 'vue';
import { usePortfolioStore } from '../../stores/portfolioStore';
import { useNavigationStore } from '../../stores/navigationStore';

const props = defineProps({
  projectId: {
    type: Number,
    required: true
  },
  maxRelatedProjects: {
    type: Number,
    default: 3
  }
});

const portfolioStore = usePortfolioStore();
const navigationStore = useNavigationStore();

const project = computed(() => {
  return portfolioStore.projects.find(p => p.id === props.projectId);
});

// ✨ Fonction pour mélanger un tableau (Fisher-Yates shuffle)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// ✨ Projets similaires mélangés aléatoirement
const relatedProjects = computed(() => {
  if (!project.value) return [];
  
  const sameCategory = portfolioStore.projects.filter(p => 
    p.category === project.value.category && 
    p.id !== project.value.id
  );
  
  // Mélanger et prendre les N premiers
  return shuffleArray(sameCategory).slice(0, props.maxRelatedProjects);
});

// ✨ Watch pour détecter le changement de projectId
watch(() => props.projectId, (newId) => {
  console.log('🔄 Project changed to:', newId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, { immediate: true });

// ✨ Scroll en haut au montage du composant
onMounted(() => {
  console.log('✅ ProjectDetail mounted with ID:', props.projectId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const goBack = () => {
  navigationStore.setPage('portfolio');
};

const navigateToContact = () => {
  navigationStore.setPage('contact');
};

// ✨ IMPORTANT: Cette fonction appelle setSelectedProject
const viewProject = (id) => {
  console.log('👉 Viewing project:', id);
  portfolioStore.setSelectedProject(id);  // ← MET À JOUR LE STORE
  navigationStore.navigateToProject(id);
};

const openGallery = (index) => {
  console.log('Ouvrir image', index);
};

const getStatusClass = (status) => {
  const classes = {
    'Terminé': 'status-completed',
    'En cours': 'status-progress',
    'En pause': 'status-paused'
  };
  return classes[status] || '';
};

const extractImageUrl = (imageString) => {
  if (!imageString) return '';
  const urlMatch = imageString.match(/url\(['"]?([^'"]+)['"]?\)/);
  return urlMatch ? urlMatch[1] : imageString;
};
</script>

<style scoped>
/* ============================================
   BACK BUTTON FIXE
   ============================================ */
.back-button-fixed {
  position: fixed;
  top: 100px;
  left: 2rem;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  color: #1A1A1A;
  border: none;
  padding: 0.875rem 1.75rem;
  border-radius: 50px;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.back-button-fixed:hover {
  background-color: var(--primary);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* ============================================
   HERO SECTION
   ============================================ */
.project-detail {
  min-height: 100vh;
  background-color: #FAFAFA;
}

.project-hero {
  position: relative;
  height: 65vh;
  min-height: 500px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0;
}

.hero-background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.75);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
}

.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 3rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.project-title {
  color: var(--white);
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.project-subtitle {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  max-width: 700px;
}

/* ============================================
   PROJECT INFO SECTION
   ============================================ */
.project-info {
  padding: 5rem 0;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 4rem;
}

.info-main {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.info-section {
  background-color: var(--white);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 2rem;
  letter-spacing: -0.01em;
}

.description-text {
  font-size: 1.125rem;
  color: #333;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.description-secondary {
  font-size: 1rem;
  color: #666;
  line-height: 1.8;
}

/* ============================================
   TIMELINE
   ============================================ */
.timeline {
  position: relative;
  padding-left: 2.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.625rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--primary), rgba(0,0,0,0.1));
}

.timeline-item {
  position: relative;
  padding-bottom: 2.5rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0.375rem;
  width: 0.875rem;
  height: 0.875rem;
  background-color: var(--primary);
  border: 3px solid var(--white);
  border-radius: 50%;
  box-shadow: 0 0 0 4px #F5F5F5;
}

.timeline-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 0.5rem;
}

.timeline-date {
  font-size: 0.875rem;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.timeline-desc {
  font-size: 0.9375rem;
  color: #666;
  line-height: 1.7;
}

/* ============================================
   GALLERY
   ============================================ */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.gallery-item {
  aspect-ratio: 4 / 3;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* ============================================
   TESTIMONIAL
   ============================================ */
.testimonial {
  position: relative;
  background: linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%);
  padding: 2.5rem;
  border-radius: 20px;
  border-left: 4px solid var(--primary);
}

.testimonial-icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: rgba(0, 0, 0, 0.08);
}

.testimonial-text {
  font-size: 1.125rem;
  color: #333;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 2rem;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.testimonial-author strong {
  font-size: 1rem;
  color: #1A1A1A;
  font-weight: 600;
}

.testimonial-author span {
  font-size: 0.875rem;
  color: #999;
}

/* ============================================
   SIDEBAR
   ============================================ */
.info-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-card {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.sidebar-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.details-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #F0F0F0;
}

.detail-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.detail-label {
  font-size: 0.875rem;
  color: #999;
  font-weight: 500;
}

.detail-value {
  font-size: 0.9375rem;
  color: #1A1A1A;
  font-weight: 600;
  text-align: right;
}

.status {
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8125rem;
}

.status-completed {
  background-color: #ECFDF5;
  color: #10B981;
}

.status-progress {
  background-color: #FEF3C7;
  color: #F59E0B;
}

.status-paused {
  background-color: #F3F4F6;
  color: #6B7280;
}

/* CTA Card */
.cta-card {
  background: var(--white);
  color: var(--text-dark);
}

.cta-title {
  color: var(--text-dark);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.cta-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.cta-button {
  width: 100%;
  background-color: var(--primary);
  color: var(--white);
  padding: 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  background-color: var(--primary);
  color: var(--white);
}

/* ============================================
   RELATED PROJECTS
   ============================================ */
.related-projects {
  padding: 5rem 0;
  background-color: var(--white);
}

.section-title-center {
  font-size: 2rem;
  font-weight: 600;
  color: #1A1A1A;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.01em;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.project-card {
  background: #FAFAFA;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
}

.card-image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: #E5E5E5;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project-card:hover .card-image {
  transform: scale(1.08);
}

.card-content {
  padding: 1.75rem;
}

.card-category {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1A1A1A;
  line-height: 1.3;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.project-card:hover .card-title {
  color: var(--primary);
}

.card-footer {
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #666;
  transition: all 0.3s ease;
}

.card-link svg {
  transition: transform 0.3s ease;
}

.project-card:hover .card-link {
  color: var(--primary);
}

.project-card:hover .card-link svg {
  transform: translateX(4px);
}

/* ============================================
   NOT FOUND
   ============================================ */
.not-found {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--white);
}

.not-found h1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 2rem;
}

.back-button-large {
  background-color: var(--text-dark);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.back-button-large:hover {
  background-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .back-button-fixed {
    top: 90px;
    left: 1rem;
    padding: 0.75rem 1.25rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }

  .project-hero {
    height: 50vh;
    min-height: 400px;
  }

  .project-title {
    font-size: 2.25rem;
  }

  .project-subtitle {
    font-size: 1.125rem;
  }

  .project-info {
    padding: 3rem 0;
  }

  .info-section {
    padding: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: 2rem;
  }

  .back-button-fixed {
    top: 80px;
    left: 1rem;
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
}
</style>