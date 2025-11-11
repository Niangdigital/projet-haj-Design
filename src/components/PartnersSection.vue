<template>
  <section class="partners-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center">
        <p class="section-label">{{ config.subtitle }}</p>
        <h2>{{ config.title }}</h2>
        <div class="section-divider center"></div>
      </div>

      <!-- Partners Carousel -->
      <div class="partners-carousel">
        <div class="carousel-track">
          <!-- Premier ensemble -->
          <div 
            v-for="(partner, idx) in partners" 
            :key="`partner-1-${idx}`" 
            class="partner-item"
          >
            <p>{{ partner }}</p>
          </div>

          <!-- Deuxième ensemble (duplication pour l'infini) -->
          <div 
            v-for="(partner, idx) in partners" 
            :key="`partner-2-${idx}`" 
            class="partner-item"
          >
            <p>{{ partner }}</p>
          </div>
        </div>
      </div>

      <!-- Info supplémentaire -->
      <div class="partners-info">
        <p>{{ config.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { usePartnersStore } from '../stores/partnersStore';

const partnersStore = usePartnersStore();
const partners = partnersStore.getPartners();
const config = partnersStore.getConfig();

const carouselTrack = ref(null);
const isPaused = ref(false);

const handleTouchStart = () => {
  isPaused.value = true;
};

const handleTouchEnd = () => {
  isPaused.value = false;
};

onMounted(() => {
  if (carouselTrack.value) {
    carouselTrack.value.addEventListener('touchstart', handleTouchStart);
    carouselTrack.value.addEventListener('touchend', handleTouchEnd);
    carouselTrack.value.addEventListener('touchcancel', handleTouchEnd);
  }
});

onUnmounted(() => {
  if (carouselTrack.value) {
    carouselTrack.value.removeEventListener('touchstart', handleTouchStart);
    carouselTrack.value.removeEventListener('touchend', handleTouchEnd);
    carouselTrack.value.removeEventListener('touchcancel', handleTouchEnd);
  }
});
</script>

<style scoped>
.partners-section {
  padding: 10rem 0rem;
  background-color: var(--white);
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
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.section-header h2 {
      font-size: var(--text-h1);
    font-weight: 600;
    color: var(--text-dark);
    line-height: 1.2;
    margin-bottom: 1.5rem;
}



.section-divider.center {
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(to right, transparent, var(--primary), transparent);
  width: 8rem;
}

/* Carousel */
.partners-carousel {
  position: relative;
  overflow: hidden;
  padding: 1rem 0;
  margin-bottom: 3rem;
}

.carousel-track {
  display: flex;
  gap: 1.5rem;
  animation: scroll 30s linear infinite;
}

.carousel-track:hover {
  animation-play-state: paused;
}

.partner-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  min-width: max-content;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.partner-item:hover {
  border-color: var(--primary);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: var(--bg-lighter);
}

.partner-item p {
  color: var(--text-dark);
  font-size: var(--text-body-lg);
  font-weight: 400;
  margin: 0;
}

.partner-item:hover p {
  color: var(--primary);
}

/* Info */
.partners-info {
  text-align: center;
}

.partners-info p {
  color: var(--text-light);
  font-size: var(--text-body-sm);
  font-weight: 300;
  margin: 0;
}

/* Animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 0.75rem));
  }
}

/* Responsive */
@media (max-width: 768px) {
  .partners-section {
    padding: 4rem 0;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-header h2 {
    font-size: 1.75rem;
  }

  .carousel-track {
    gap: 1rem;
    animation: scroll 20s linear infinite;
  }

  .partner-item {
    padding: 1rem;
    font-size: 0.875rem;
  }

  .partner-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-lighter);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  min-width: max-content;
  transition: all 0.3s ease;
  white-space: nowrap;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.partner-item:hover {
  border-color: var(--primary);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: var(--bg-lighter);
}

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-50% - 0.5rem));
    }
  }
}

@media (max-width: 480px) {
  .partners-section {
    padding: 6rem 0;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .partner-item {
    padding: 0.75rem;
    font-size: 0.75rem;
  }
}
</style>
