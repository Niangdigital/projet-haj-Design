<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column footer-brand">
          <h3 class="footer-logo"><span>HAJ</span>Design</h3>
          <p class="footer-description">Excellence en construction, design et architecture depuis 15 ans. Nous transformons vos idées en réalité.</p>
          <div class="footer-social-links">
            <a href="#" class="social-link" aria-label="LinkedIn">in</a>
            <a href="#" class="social-link" aria-label="Facebook">f</a>
            <a href="#" class="social-link" aria-label="Instagram">ig</a>
            <a href="#" class="social-link" aria-label="Twitter">X</a>
          </div>
        </div>

        <div class="footer-column">
          <h4 class="footer-title">Navigation</h4>
          <ul class="footer-links">
            <li><button @click="nav.setPage('home')">Accueil</button></li>
            <li><button @click="nav.setPage('portfolio')">Projets</button></li>
            <li><button @click="nav.setPage('about')">À Propos</button></li>
            <li><button @click="nav.setPage('contact')">Contact</button></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-title">Services</h4>
          <ul class="footer-links">
            <li><button>Construction</button></li>
            <li><button>Design Intérieur</button></li>
            <li><button>Architecture</button></li>
            <li><button>Maçonnerie</button></li>
          </ul>
        </div> 

        <div class="footer-column">
          <h4 class="footer-title">Contact</h4>
          <div class="footer-contact-info">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <a href="mailto:contact@hdesign.com" class="contact-link">contact@hajdesign.com</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <a href="tel:+221775040487" class="contact-link">+221 77 504 04 87</a>
            </div>
             <div class="contact-item">
              <span class="contact-icon">📍</span>
             <a href="https://www.google.com/maps/search/?api=1&query=Rufisque+Dakar+Senegal" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="contact-link location-link">
              Rufisque<br>Dakar, Sénégal
            </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2024 HAJ Design. Tous droits réservés.</p>
        <div class="footer-legal">
          <button class="legal-link">Mentions légales</button>
          <span class="separator">•</span>
          <button class="legal-link">Politique de confidentialité</button>
          <span class="separator">•</span>
          <button class="legal-link">CGV</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useNavigationStore } from '../../stores/navigationStore';

const nav = useNavigationStore();
</script>

<style scoped>
.footer {
  background: linear-gradient(to bottom, #0f172a, #111827);
  color: var(--white);
  padding: 5rem 0rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-brand {
  max-width: 320px;
}

.footer-logo {
  font-size: var(--text-h3);
  font-weight: 300;  /* ✅ Changé de 600 à 300 pour correspondre au header */
  color: var(--grisfooter);
  margin-bottom: 1rem;
}

.footer-logo span {
  font-weight: 600;  /* ✅ Le "HAJ" est en bold, comme dans le header */
  /* On garde le gradient qui existe déjà */
  background: var(--grisfooter);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: #9ca3af;
  font-size: var(--text-body);
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.footer-social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #9ca3af;
  border-radius: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--text-body-sm);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(96, 165, 250, 0.15);
  border-color: #60a5fa;
  color: #60a5fa;
  transform: translateY(-2px);
}

.footer-title {
  font-size: var(--text-body-lg);
  font-weight: 400;
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
  color: #60a5fa;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
}

.footer-links button {
  background: none;
  color: #9ca3af;
  font-size: var(--text-body);
  font-weight: 300;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  border: none;
}

.footer-links button:hover {
  color: #60a5fa;
  transform: translateX(4px);
}

.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.contact-icon {
  font-size: 1rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
}

.contact-link {
  color: #9ca3af;
  font-size: var(--text-body);
  font-weight: 300;
  text-decoration: none;
  transition: color 0.3s ease;
  line-height: 1.6;
}

.contact-link:hover {
  color: #60a5fa;
}

.contact-text {
  color: #9ca3af;
  font-size: var(--text-body);
  font-weight: 300;
  line-height: 1.6;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: #9ca3af;
  font-size: 0.875rem;
  font-weight: 300;
  margin: 0;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.legal-link {
  background: none;
  color: #9ca3af;
  font-size: var(--text-body-sm);
  font-weight: 300;
  cursor: pointer;
  transition: color 0.3s ease;
  border: none;
  padding: 0;
}

.legal-link:hover {
  color: #60a5fa;
}

.separator {
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.875rem;
}

@media (max-width: 1024px) {
  .footer {
    padding: 4rem 1rem 2rem;
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0rem 2rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .footer-legal {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>