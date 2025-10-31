<template>
  <a 
    href="https://wa.me/33123456789" 
    target="_blank" 
    rel="noopener noreferrer" 
    class="whatsapp-button"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <svg 
      class="whatsapp-icon" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    
    <transition name="slide-fade">
      <span v-if="isHovered" class="whatsapp-text">Discutons</span>
    </transition>
  </a>
</template>

<script setup>
import { ref } from 'vue';

const isHovered = ref(false);
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  
  /* Effet glass adaptatif */
  background: rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.4);
  
  color: #000;
  padding: 0.875rem;
  min-width: 3.25rem;
  height: 3.25rem;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  box-shadow: 
    0 4px 12px -2px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.6) inset;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  text-decoration: none;
  cursor: pointer;
}

.whatsapp-button:hover {
  /* Retour au bleu WhatsApp initial au survol */
  background-color: #25D366;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border: 1px solid #25D366;
  box-shadow: 
    0 8px 20px -4px rgba(37, 211, 102, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.8) inset;
  transform: translateY(-2px);
  padding-right: 1.125rem;
}

.whatsapp-icon {
  width: 1.375rem;
  height: 1.375rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  color: #000; /* Icône noire pour fond clair */
}

.whatsapp-button:hover .whatsapp-icon {
  transform: scale(1.05);
  color: #fff; /* Icône blanche au survol sur fond bleu */
}

.whatsapp-text {
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  letter-spacing: 0.01em;
  color: #000;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
}

.whatsapp-button:hover .whatsapp-text {
  color: #fff; /* Texte blanc au survol sur fond bleu */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Mode sombre automatique basé sur la préférence système */
@media (prefers-color-scheme: dark) {
  .whatsapp-button {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 
      0 4px 12px -2px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
    color: #fff;
  }

  .whatsapp-icon {
    color: var(--text-dark); /* Icône verte pour fond sombre */
  }

  .whatsapp-text {
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  /* Même couleur de hover bleue en mode sombre */
  .whatsapp-button:hover {
    background-color: #25D366;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border: 1px solid #25D366;
    box-shadow: 
      0 8px 20px -4px rgba(37, 211, 102, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.2) inset;
  }

  .whatsapp-button:hover .whatsapp-icon {
    color: #fff;
  }

  .whatsapp-button:hover .whatsapp-text {
    color: #fff;
  }
}

/* Slide Fade Transition */
.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-8px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}

/* Responsive */
@media (max-width: 768px) {
  .whatsapp-button {
    bottom: 1.5rem;
    right: 1.5rem;
    padding: 0.75rem;
    min-width: 3rem;
    height: 3rem;
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
  }

  .whatsapp-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .whatsapp-text {
    font-size: 0.8125rem;
  }

  .whatsapp-button:hover {
    padding-right: 1rem;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}

/* Small screens - hide text on hover */
@media (max-width: 480px) {
  .whatsapp-button:hover {
    padding: 0.75rem;
  }
  
  .whatsapp-text {
    display: none;
  }
}

/* Fallback pour les navigateurs qui ne supportent pas backdrop-filter */
@supports not (backdrop-filter: blur(10px)) {
  .whatsapp-button {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.15);
  }
  
  .whatsapp-button:hover {
    background: #25D366;
    border: 1px solid #25D366;
    box-shadow: 0 8px 20px -4px rgba(37, 211, 102, 0.3);
  }

  @media (prefers-color-scheme: dark) {
    .whatsapp-button {
      background: rgba(0, 0, 0, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .whatsapp-button:hover {
      background: #25D366;
      border: 1px solid #25D366;
    }
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .whatsapp-button,
  .whatsapp-icon,
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: none;
  }
  
  .whatsapp-button:hover {
    transform: none;
  }
}

/* Contraste forcé pour une meilleure visibilité */
@media (prefers-contrast: high) {
  .whatsapp-button {
    background: rgba(0, 0, 0, 0.95);
    border: 2px solid #000;
    color: #000;
  }
  
  .whatsapp-button:hover {
    background: #25D366;
    border: 2px solid #25D366;
    color: #fff;
  }
  
  .whatsapp-button:hover .whatsapp-icon {
    color: #fff;
  }
}
</style>