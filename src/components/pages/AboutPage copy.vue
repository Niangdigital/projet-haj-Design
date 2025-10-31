<template>
  <div>
    <section class="about-hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-text">
          <p class="section-label">À Propos</p>
          <h1>H Design</h1>
          <p class="hero-subtitle">Excellence et passion depuis 15 ans</p>
        </div>
      </div>
    </section>

    <section class="about-story">
      <div class="container">
        <div class="story-content">
          <h2>Qui sommes-nous</h2>
          <div class="story-text">
            <p>Depuis 15 ans, H Design transforme des visions en réalités exceptionnelles. Fondée sur l'excellence, l'innovation et l'écoute, notre entreprise dépasse les attentes à chaque projet.</p>
            <p>Nos équipes pluridisciplinaires réunissent expertise en construction, design, architecture et maçonnerie. Nous travaillons avec passion pour créer des espaces qui inspirent et perdurent.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-values">
      <div class="container">
        <h2>Nos valeurs</h2>
        <div class="values-grid">
          <div v-for="value in values" :key="value.num" class="value-item">
            <span class="value-number">{{ value.num }}</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-services">
      <div class="container">
        <h2>Notre expertise</h2>
        <div class="services-grid">
          <div v-for="service in services" :key="service.title" class="service-item">
            <h3>{{ service.title }}</h3>
            <p>{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-contact">
      <div class="container">
        <div class="contact-content">
          <h2>Démarrons votre projet</h2>
          <p>Échangeons sur votre vision</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const values = [
  { num: '01', title: 'Excellence', desc: 'Aucun compromis sur la qualité. Chaque projet est unique.' },
  { num: '02', title: 'Innovation', desc: 'Repousser les limites. Explorer de nouvelles approches.' },
  { num: '03', title: 'Écoute', desc: 'Comprendre votre vision. Vos besoins guident nos actions.' }
];

const services = [
  { title: 'Construction', desc: 'Maîtrise complète de chaque étape, du concept à la livraison.' },
  { title: 'Design Intérieur', desc: 'Espaces fonctionnels et esthétiques pensés sur-mesure.' },
  { title: 'Architecture', desc: 'Conception novatrice respectant votre vision.' },
  { title: 'Maçonnerie', desc: 'Expertise technique pour des structures durables.' }
];
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-hero {
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80');
  background-size: cover;
  background-position: center;
  min-height: 85vh;
  display: flex;
  align-items: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(17, 24, 39, 0.75);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 8rem 0;
}

.hero-text {
  max-width: 700px;
}

.section-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: block;
}

.about-hero h1 {
  color: #ffffff;
  font-size: 5rem;
  font-weight: 200;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
  line-height: 1;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
}

.about-story {
  padding: 10rem 0;
  background-color: #ffffff;
}

.story-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-story h2 {
  color: #111827;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
}

.story-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.story-text p {
  color: #6b7280;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.8;
}

.about-values {
  padding: 10rem 0;
  background-color: #f9fafb;
}

.about-values h2 {
  color: #111827;
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 5rem;
  letter-spacing: -0.02em;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  max-width: 1100px;
  margin: 0 auto;
}

.value-item {
  text-align: center;
  padding: 0 1rem;
}

.value-number {
  display: block;
  color: #e5e7eb;
  font-size: 4rem;
  font-weight: 200;
  margin-bottom: 2rem;
  line-height: 1;
}

.value-item h3 {
  color: #111827;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.value-item p {
  color: #6b7280;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
}

.about-services {
  padding: 10rem 0;
  background-color: #ffffff;
}

.about-services h2 {
  color: #111827;
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 5rem;
  letter-spacing: -0.02em;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background-color: #e5e7eb;
  border: 1px solid #e5e7eb;
  max-width: 1000px;
  margin: 0 auto;
}

.service-item {
  background-color: #ffffff;
  padding: 3rem;
  transition: background-color 0.3s ease;
}

.service-item:hover {
  background-color: #f9fafb;
}

.service-item h3 {
  color: #111827;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.service-item p {
  color: #6b7280;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
}

.about-contact {
  padding: 10rem 0;
  background-color: #111827;
}

.contact-content {
  text-align: center;
}

.about-contact h2 {
  color: #ffffff;
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.about-contact p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.25rem;
  font-weight: 300;
}

@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }

  .about-hero {
    min-height: 70vh;
  }

  .hero-content {
    padding: 5rem 0;
  }

  .about-hero h1 {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .about-story,
  .about-values,
  .about-services,
  .about-contact {
    padding: 6rem 0;
  }

  .about-story h2,
  .about-values h2,
  .about-services h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .about-contact h2 {
    font-size: 2rem;
  }

  .story-text p {
    font-size: 1rem;
  }

  .service-item {
    padding: 2rem;
  }
}
</style>