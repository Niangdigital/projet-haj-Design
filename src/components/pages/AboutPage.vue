<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="hero-background"></div>
      <div class="container">
        <div class="hero-content">
          <p class="section-label">À Propos</p>
          <h1>HAJ Design</h1>
          <p class="hero-subtitle">Excellence & Innovation depuis 15 ans</p>
        </div>
      </div>
    </section>

    <section class="about-story">
      <div class="container">
        <div class="story-layout">
          <div class="story-header">
            <p class="section-label">Notre histoire</p>
            <h2>Qui sommes-nous</h2>
          </div>
          <div class="story-text">
            <p>Depuis 15 ans, H Design transforme des visions en réalités exceptionnelles. Fondée sur l'excellence, l'innovation et l'écoute, notre entreprise dépasse les attentes à chaque projet.</p>
            <p>Nos équipes pluridisciplinaires réunissent expertise en construction, design, architecture et maçonnerie. Nous travaillons avec passion pour créer des espaces qui inspirent et marquent les esprits.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">15<span>+</span></div>
            <div class="stat-label">Années d'expérience</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">200<span>+</span></div>
            <div class="stat-label">Projets réalisés</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50<span>+</span></div>
            <div class="stat-label">Clients satisfaits</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100<span>%</span></div>
            <div class="stat-label">Engagement qualité</div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-values">
      <div class="container">
        <div class="values-header">
          <p class="section-label">Nos principes</p>
          <h2>Ce qui nous définit</h2>
        </div>

        <div class="values-grid">
          <div v-for="value in values" :key="value.num" class="value-card">
            <div class="value-number">{{ value.num }}</div>
            <div class="value-content">
              <h3>{{ value.title }}</h3>
              <p>{{ value.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-services">
      <div class="container">
        <div class="services-header">
          <p class="section-label">Expertise</p>
          <h2>Nos domaines d'excellence</h2>
        </div>

        <div class="services-grid">
          <div v-for="service in services" :key="service.title" class="service-card">
            <div class="service-icon">{{ service.icon }}</div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Prêt à concrétiser votre vision ?</h2>
          <p>Discutons de votre projet et créons ensemble quelque chose d'exceptionnel.</p>
          <button @click="nav.setPage('contact')" class="cta-button">
            Contactez-nous
            <span class="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useNavigationStore } from '../../stores/navigationStore';

const nav = useNavigationStore();

const values = [
  { 
    num: '01', 
    title: 'Excellence', 
    desc: 'Aucun compromis sur la qualité. Chaque projet est une œuvre d\'art que nous créons avec minutie et passion.' 
  },
  { 
    num: '02', 
    title: 'Innovation', 
    desc: 'Repousser constamment les limites du possible. Nous explorons de nouvelles approches pour des résultats uniques.' 
  },
  { 
    num: '03', 
    title: 'Écoute', 
    desc: 'Comprendre profondément votre vision. Vos besoins et aspirations sont au cœur de notre démarche créative.' 
  }
];

const services = [
  { 
    icon: '🏗️', 
    title: 'Construction', 
    desc: 'Maîtrise complète de chaque étape du projet, de la conception à la livraison, avec une attention aux détails sans faille.' 
  },
  { 
    icon: '🎨', 
    title: 'Design Intérieur', 
    desc: 'Création d\'espaces fonctionnels et esthétiques sur-mesure qui reflètent votre personnalité et optimisent votre quotidien.' 
  },
  { 
    icon: '🏢', 
    title: 'Architecture', 
    desc: 'Conception architecturale novatrice alliant créativité, durabilité et respect des normes les plus exigeantes.' 
  },
  { 
    icon: '🧱', 
    title: 'Maçonnerie', 
    desc: 'Expertise technique et matériaux de première qualité pour des structures solides, durables et esthétiquement irréprochables.' 
  }
];
</script>

<style scoped>

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
/* Hero Section */
.about-hero {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%), 
              url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070') center/cover no-repeat;
  color: white;
  padding: 7.5rem 1rem 7.5rem;
  position: relative;
  overflow: hidden;
}

.about-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.section-label {
  color: #60a5fa;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: block;
}

.about-hero h1 {
  font-size: var(--text-hero);
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.hero-subtitle {
  font-size: var(--text-body-lg);
  font-weight: 300;
  color: #cbd5e1;
  letter-spacing: 0.01em;
}

/* Story Section */
.about-story {
  padding: 8rem 0rem 8rem;
  background: white;
}

.story-layout {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.story-header {
  margin-bottom: 3rem;
}

.story-header .section-label {
  color: var(--primary);
}

.story-header h2 {
  font-size: var(--text-h1);
  font-weight: 600;
  color: var(--text-dark);
  margin-top: 0.5rem;
  letter-spacing: -0.01em;
}

.story-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}

.story-text p {
  color: var(--text-light);
  font-size: var(--text-body-lg);
  line-height: 1.8;
  font-weight: 300;
}

/* Stats Section */
.about-stats {
  padding:5rem 0rem 5rem;
  background: var(--text-dark);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  padding: 2rem 1rem;
}

.stat-number {
  font-size: var(--text-h1);
  font-weight: 300;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}

.stat-number span {
  font-size: 2rem;
  color: var(--primary);
}

.stat-label {
  font-size: var(--text-body);
  color: #cbd5e1;
  font-weight: 300;
  letter-spacing: 0.02em;
}

/* Values Section */
.about-values {
  padding: 8rem 0rem 10rem;
  background: var(--bg-lighter);
}

.values-header {
  text-align: center;
  margin-bottom: 5rem;
}

.values-header .section-label {
  color: var(--primary);
}

.values-header h2 {
  font-size: var(--text-h1);
  font-weight: 600;
  color: var(--text-dark);
  margin-top: 0.5rem;
  letter-spacing: -0.01em;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.value-card {
  background: white;
  padding: 3rem 2.5rem;
  border-radius: var(--radius-lg);
  transition: all 0.4s ease;
  border: 1px solid var(--border);
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: var(--primary);
}

.value-number {
  font-size: var(--text-h1);
  font-weight: 300;
  color: #dbeafe;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.value-content h3 {
  font-size: var(--text-h3);
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.value-content p {
  color: var(--text-light);
  font-weight: 300;
  line-height: 1.7;
  font-size: var(--text-body-lg);
}

/* Services Section */
.about-services {
  padding: 10rem 0rem 8rem;
  background: white;
}

.services-header {
  margin-bottom: 5rem;
  max-width: 700px;
}

.services-header .section-label {
  color: var(--primary);
}

.services-header h2 {
  font-size: var(--text-h1);
  font-weight: 600;
  color: var(--text-dark);
  margin-top: 0.5rem;
  letter-spacing: -0.01em;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  max-width: 900px;
}

.service-card {
  padding: 3rem 0;
  border-bottom: 1px solid var(--border);
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 2.5rem;
  align-items: start;
  transition: all 0.3s ease;
}

.service-card:last-child {
  border-bottom: none;
}

.service-card:hover {
  padding-left: 1rem;
}

.service-icon {
  font-size: 3rem;
  display: block;
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon {
  transform: translateX(5px);
}

.service-card h3 {
  font-size: var(--text-h3);
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.service-card p {
  color: var(--text-light);
  font-weight: 300;
  line-height: 1.8;
  font-size: var(--text-body-lg);
}

/* CTA Section */
.about-cta {
  padding: 8rem 0rem 10rem;
  background: var(--bg-lighter);
  border-top: 1px solid var(--border);
}

.cta-content {
  text-align: center;
  max-width: 650px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: var(--text-h1);
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.cta-content p {
  font-size: var(--text-body-lg);
  color: var(--text-light);
  font-weight: 300;
  margin-bottom: 3rem;
  line-height: 1.7;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--primary);
  color: white;
  padding: var(--btn-padding-sm);
  border-radius: 50px;
  font-weight: 500;
  font-size: var(--text-body) ;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.cta-button:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.arrow {
  transition: transform 0.3s ease;
  font-size: 1.25rem;
}

.cta-button:hover .arrow {
  transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }

  .about-hero {
    padding: 6rem 1.5rem 5rem;
    min-height: auto;
  }

  .about-hero h1 {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .about-story {
    padding: 5rem 1.5rem;
  }

  .story-header {
    margin-bottom: 2rem;
  }

  .story-header h2,
  .values-header h2,
  .services-header h2 {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .about-values,
  .about-services,
  .about-cta {
    padding: 5rem 1.5rem;
  }

  .values-header,
  .services-header {
    margin-bottom: 3rem;
  }

  .value-card {
    padding: 2rem 1.5rem;
  }

  .service-card {
    grid-template-columns: 60px 1fr;
    gap: 1.5rem;
    padding: 2rem 0;
  }

  .service-icon {
    font-size: 2.5rem;
  }

  .service-card h3 {
    font-size: 1.5rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-content p {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>