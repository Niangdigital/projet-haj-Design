<template>
  <div>
    <!-- HERO ÉPURÉ -->
    <section class="portfolio-hero">
      <div class="container">
        <div class="hero-content">
          <p class="section-label">Projets</p>
          <h1>Nos réalisations</h1>
          <p class="hero-description">
            Découvrez nos projets qui allient créativité, expertise technique et excellence architecturale
          </p>
        </div>
      </div>
    </section>

    <!-- FILTRES MODERNISÉS -->
    <section class="filters-section">
      <div class="container">
        <div class="filters-wrapper">
          <div class="filters">
            <button 
              v-for="cat in portfolio.categories" 
              :key="cat"
              @click="portfolio.setFilter(cat)"
              :class="{ active: portfolio.activeFilter === cat }"
              class="filter-button">
              {{ cat.charAt(0).toUpperCase() + cat.slice(1) }}
            </button>
          </div>
          
          <div class="results-info">
            <span>{{ portfolio.filteredProjects.length }} projet{{ portfolio.filteredProjects.length > 1 ? 's' : '' }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- GRILLE DE PROJETS ÉPURÉE -->
    <section class="portfolio-grid-section">
      <div class="container">
        <div class="projects-grid">
          <div 
            v-for="project in portfolio.filteredProjects" 
            :key="project.id"
            @click="viewProject(project.id)"
            @mouseenter="hoveredProject = project.id"
            @mouseleave="hoveredProject = null"
            class="project-card"
            :class="{ 'is-hovered': hoveredProject === project.id }">
            
            <!-- Image avec overlay graduel -->
            <div class="card-image-wrapper">
              <img :src="extractImageUrl(project.image)" :alt="project.title" class="card-image" />
              <div class="card-overlay"></div>
            </div>

            <!-- Badge catégorie -->
            

            <!-- Contenu -->
            <div class="card-content">
        
              
              
              <div class="card-footer">
                <span class="card-details">{{ project.details }}</span>
                <div class="card-action">
                  <span>Voir le projet</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Message si aucun projet -->
        <div v-if="portfolio.filteredProjects.length === 0" class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <h3>Aucun projet trouvé</h3>
          <p>Essayez un autre filtre pour voir nos réalisations</p>
          <button @click="portfolio.setFilter('tous')" class="btn-reset">
            Voir tous les projets
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePortfolioStore } from '../../stores/portfolioStore';
import { useNavigationStore } from '../../stores/navigationStore';

const portfolio = usePortfolioStore();
const nav = useNavigationStore();
const hoveredProject = ref(null);

const viewProject = (projectId) => {
  portfolio.setSelectedProject(projectId);
  nav.navigateToProject(projectId);
};

const extractImageUrl = (imageString) => {
  if (!imageString) return '';
  const urlMatch = imageString.match(/url\(['"]?([^'"]+)['"]?\)/);
  return urlMatch ? urlMatch[1] : imageString;
};

const getProjectCount = (category) => {
  return portfolio.projectCountByCategory[category] || 0;
};
</script>

<style scoped>
/* HERO ÉPURÉ */
.portfolio-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 7.5rem 1rem 7.5rem;
  position: relative;
  overflow: hidden;
}

.portfolio-hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(30%, -30%);
}

.hero-content {
  max-width: 700px;
  position: relative;
  z-index: 1;
}

.section-label {
  color: #60a5fa;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
}

.portfolio-hero h1 {
  color: var(--white);
  font-size: var(--text-hero);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.hero-description {
  color: #cbd5e1;
  font-size: var(--text-body-lg);
  line-height: 1.7;
  font-weight: 300;
}

/* SECTION FILTRES */
.filters-section {
  background-color: var(--white);
  padding: 2rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.95);
}


.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.filters-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.filter-button {
  padding: var(--btn-padding-sm);
  border-radius: 50px;
  font-weight: 500;
  font-size: var(--text-body);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--bg-lighter);
  color: var(--text-light);
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  position: relative;
}

.filter-button:hover:not(.active) {
  background-color: var(--bg-light);
  border-color: rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.filter-button.active {
  background-color: var(--text-dark);
  color: var(--white);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.filter-count {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.125rem 0.5rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.filter-button.active .filter-count {
  background: rgba(255, 255, 255, 0.25);
}

.results-info {
  color: var(--text-light);
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
}

/* GRILLE DE PROJETS */
.portfolio-grid-section {
  padding: 2.5rem 1rem 10rem;
  background-color: var(--bg-lighter);
  min-height: 60vh;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
}

.project-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  transform: translateY(-8px);
}

/* Image avec ratio fixe */
.card-image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  position: relative;
  background-color: var(--bg-light);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
}

.project-card:hover .card-image {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

/* Badge catégorie */
.card-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
}

.card-badge span {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  color: var(--text-dark);
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Contenu */
.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  line-height: 1.3;
  transition: color 0.3s ease;
}

.project-card:hover .card-title {
  color: var(--primary);
}

.card-description {
  font-size: 0.9375rem;
  color: var(--text-light);
  line-height: 1.6;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  margin-top: auto;
}

.card-details {
  font-size: var(--text-body-sm);
  color: var(--text-light);
  font-weight: 500;
}

.card-action {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dark);
  font-size: var(--text-body-sm);
  font-weight: 600;
  transition: all 0.3s ease;
}

.card-action svg {
  transition: transform 0.3s ease;
}

.project-card:hover .card-action {
  color: var(--primary);
}

.project-card:hover .card-action svg {
  transform: translateX(4px);
}

/* État vide */
.empty-state {
  text-align: center;
  padding: 6rem 2rem;
  max-width: 500px;
  margin: 0 auto;
}

.empty-state svg {
  color: var(--text-light);
  opacity: 0.3;
  margin-bottom: 1.5rem;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.empty-state p {
  color: var(--text-light);
  font-size: 1rem;
  margin-bottom: 2rem;
}

.btn-reset {
  background-color: var(--text-dark);
  color: var(--white);
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-reset:hover {
  background-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .portfolio-hero {
    padding: 4rem 0rem 4rem;
  }

  .portfolio-hero h1 {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .filters-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .filters {
    width: 100%;
    justify-content: flex-start;
  }

.filter-button {
    padding: 0.75rem 1.25rem;
    border-radius: 50px;
    font-weight: 500;
    font-size: var(--text-body);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: var(--bg-lighter);
    color: var(--text-light);
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    position: relative;
}

.filter-button.active {
    background-color: var(--text-dark);
    color: var(--white);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.results-info {
    width: 100%;
  }

  .filters-section {
    padding: 1.5rem 0rem;
  }

  .portfolio-grid-section {
    padding: 2rem 0rem 6rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .empty-state {
    padding: 4rem 1rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>