<template>
  <div>
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <p class="section-label">Contact</p>
          <h1>Parlons de <span class="gradient-text">votre projet</span></h1>
          <p class="hero-subtitle">Une simple conversation peut transformer une idée en réalité.<br>Notre équipe est à votre écoute.</p>
          
          <div class="hero-contact-cards">
            <a href="tel:+33123456789" class="contact-card">
              <div class="card-icon">📞</div>
              <div class="card-content">
                <div class="card-label">Appelez-nous</div>
                <div class="card-value">+33 1 23 45 67 89</div>
              </div>
            </a>
            
            <a href="mailto:contact@hdesign.com" class="contact-card">
              <div class="card-icon">📧</div>
              <div class="card-content">
                <div class="card-label">Écrivez-nous</div>
                <div class="card-value">contact@hdesign.com</div>
              </div>
            </a>
            
            <div class="contact-card">
              <div class="card-icon">📍</div>
              <div class="card-content">
                <div class="card-label">Visitez-nous</div>
                <div class="card-value">123 Avenue des Champs-Élysées<br>75008 Paris, France</div>
              </div>
            </div>
            
            <div class="contact-card">
              <div class="card-icon">🕐</div>
              <div class="card-content">
                <div class="card-label">Disponibilité</div>
                <div class="card-value">Lun-Ven 9h-18h • Sam 10h-14h<br>Réponse sous 24h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="hero-shape"></div>
    </section>

    <section class="social-section">
      <div class="container">
        <div class="social-content">
          <h3>Suivez-nous</h3>
          <div class="social-buttons">
            <a href="#" class="social-button" aria-label="LinkedIn">
              <span>in</span>
            </a>
            <a href="#" class="social-button" aria-label="Facebook">
              <span>f</span>
            </a>
            <a href="#" class="social-button" aria-label="Instagram">
              <span>ig</span>
            </a>
            <a href="#" class="social-button" aria-label="Twitter">
              <span>X</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-cta">
      <div class="container">
        <div class="cta-card">
          <div class="cta-icon">📅</div>
          <div class="cta-text">
            <h2>Préférez un rendez-vous ?</h2>
            <p>Discutons de votre projet en personne ou en visioconférence</p>
          </div>
          <a href="tel:+33123456789" class="cta-button">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="content-header">
          <p class="section-label1">Restons connectés</p>
          <h2>Envoyez-nous un message</h2>
          <p class="section-description">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais</p>
        </div>

        <div class="form-container">
          <form @submit.prevent="contact.submitForm()" class="contact-form">
            <div v-if="contact.formSubmitted" class="form-success">
              <div class="success-icon">✓</div>
              <h3>Message envoyé !</h3>
              <p>Nous vous répondrons rapidement.</p>
            </div>

            <div class="form-group">
              <input v-model="contact.formData.name" type="text" placeholder="Votre nom *" required class="form-input"/>
            </div>

            <div class="form-group">
              <input v-model="contact.formData.email" type="email" placeholder="Votre email *" required class="form-input"/>
            </div>

            <div class="form-row">
              <div class="form-group">
                <input v-model="contact.formData.phone" type="tel" placeholder="Téléphone" class="form-input"/>
              </div>
              <div class="form-group">
                <select v-model="contact.formData.service" required class="form-input">
                  <option value="">Service concerné *</option>
                  <option value="construction">Construction</option>
                  <option value="design">Design Intérieur</option>
                  <option value="architecture">Architecture</option>
                  <option value="maconnerie">Maçonnerie</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <textarea v-model="contact.formData.message" placeholder="Décrivez votre projet *" rows="6" required class="form-input"></textarea>
            </div>

            <button type="submit" :disabled="contact.formLoading" class="form-button">
              {{ contact.formLoading ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>

            <p class="form-note">* Champs obligatoires</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useContactStore } from '../../stores/contactStore';

const contact = useContactStore();
</script>

<style scoped>
.contact-hero {
  background: linear-gradient(to bottom, #0f172a, #1e293b);
  color: var(--white);
  padding: 7.5rem 1rem 3rem;
  position: relative;
  overflow: hidden;
}

.hero-shape {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--white);
  clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
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

.contact-hero h1 {
  color: var(--white);
  font-size: 3.5rem;
  line-height: 1.2;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.gradient-text {
  background: var(--white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  color: #cbd5e1;
  font-size: var(--text-body-lg);
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 3rem;
}

.hero-contact-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  text-align: center;
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(96, 165, 250, 0.4);
  transform: translateY(-4px);
}

.card-icon {
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(96, 165, 250, 0.15);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-content {
  flex: 1;
}

.card-label {
  font-size: var(--text-body);
  color: #94a3b8;
  font-weight: 400;
  margin-bottom: 0.25rem;
}

.card-value {
  font-size: var(--text-body-sm);
  color: var(--white);
  font-weight: 500;
  line-height: 1.5;
}

.social-section {
  background: var(--white);
  padding: 3rem 1rem;
  border-bottom: 1px solid var(--border);
}

.social-content {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.social-content h3 {
  font-size: var(--text-body-lg);
  font-weight: 600;
  color: var(--text-dark);
  margin: 0;
}

.social-buttons {
  display: flex;
  gap: 0.75rem;
}

.social-button {
  width: 2.75rem;
  height: 2.75rem;
  background-color: var(--bg-lighter);
  color: var(--text-light);
  border-radius: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.social-button:hover {
  background-color: var(--primary);
  color: var(--white);
  transform: translateY(-2px);
}

.contact-cta {
  padding: 4rem 1rem;
  background-color: var(--bg-lighter);
}

.cta-card {
  max-width: 1000px;
  margin: 0 auto;
  background: var(--white);
  border-radius: var(--radius-2xl);
  padding: 2.5rem 3rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 2rem;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.cta-icon {
  font-size: 2.5rem;
  width: 4.5rem;
  height: 4.5rem;
  background: rgba(96, 165, 250, 0.1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.section-label1 {
  color: var(--secondary);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: inline-block;
}
.cta-text h2 {
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-size: var(--text-h2);
}

.cta-text p {
  color: var(--text-light);
  font-weight: 300;
  font-size: var(--text-body-lg);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary);
  color: var(--white);
   padding: var(--btn-padding-md);
  border-radius: var(--btn-radius);
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  white-space: nowrap;
}

.cta-button:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.4);
}

.contact-content {
  padding: 8rem 0rem 10rem;
  background-color: var(--white);
}

.content-header {
  max-width: 700px;
  margin: 0 auto 4rem;
  text-align: center;
}

.content-header h2 {
  color: var(--text-dark);
  font-size: var(--text-h1);
  margin-bottom: 1rem;
}

.section-description {
  color: var(--text-light);
  font-size: var(--text-body-lg);
  font-weight: 300;
  line-height: 1.6;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-form {
  width: 100%;
  background-color: var(--bg-lighter);
  padding: 3rem;
  border-radius: var(--radius-2xl);
  position: relative;
}

.form-success {
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.98);
  border-radius: var(--radius-2xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  text-align: center;
}

.success-icon {
  width: 4rem;
  height: 4rem;
  background-color: var(--success);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.875rem;
  margin-bottom: 1rem;
}

.form-success h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.form-success p {
  color: var(--text-light);
}

.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-input {
  background-color: var(--white);
  border: 1px solid var(--border);
  padding: 1rem;
  border-radius: var(--radius-lg);
  font-size: var(--text-body);
  font-family: inherit;
  transition: border-color 0.3s ease;
  color: var(--text-dark);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
}

.form-input::placeholder {
  color: var(--secondary);
}

textarea.form-input {
  resize: vertical;
  min-height: 150px;
}

.form-button {
  width: 100%;
  background-color: var(--primary);
  color: var(--white);
  padding: 1rem;
  border-radius: var(--btn-radius);
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: var(--text-body-lg);
}

.form-button:hover:not(:disabled) {
  background-color: var(--primary-dark);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
}

.form-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-note {
  font-size: var(--text-small);
  color: var(--secondary);
  text-align: center;
  margin-top: 1rem;
}

@media (max-width: 1024px) {
  .contact-hero {
    padding: 6rem 1rem 5rem;
  }

  .contact-hero h1 {
    font-size: 2.75rem;
  }

  .hero-contact-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-card {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }

  .cta-icon {
    margin: 0 auto;
  }

  .cta-button {
    justify-content: center;
  }

  .social-content {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 4rem 1rem;
  }

  .contact-hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-contact-cards {
    grid-template-columns: 1fr;
  }

  .contact-content {
    padding: 3rem 1rem 4rem;
  }

  .content-header h2 {
    font-size: 1.75rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 2rem;
  }

  .cta-card {
    padding: 2rem;
  }

  .cta-text h2 {
    font-size: 1.25rem;
  }
}
</style>