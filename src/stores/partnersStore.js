import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePartnersStore = defineStore('partners', () => {
  // État
  const partners = ref([
    'Groupe Immobilier XYZ',
    'Tech Startup Co.',
    'Cabinet Architectes +',
    'Constructeur Premier',
    'Design Innovation Lab',
    'Développeur Commercial',
    'Studio Design Pro',
    'Promoteur Urbain'
  ]);

  const config = ref({
    title: 'Ils nous font confiance',
    subtitle: 'Partenaires',
    description: '+50 clients nous font confiance pour transformer leurs espaces'
  });

  // Getters
  const getPartners = () => partners.value;
  const getConfig = () => config.value;
  const getPartnersCount = () => partners.value.length;

  // Actions
  const addPartner = (partnerName) => {
    if (partnerName && !partners.value.includes(partnerName)) {
      partners.value.push(partnerName);
    }
  };

  const removePartner = (partnerName) => {
    partners.value = partners.value.filter(p => p !== partnerName);
  };

  const updateConfig = (newConfig) => {
    config.value = { ...config.value, ...newConfig };
  };

  const setPartners = (newPartners) => {
    partners.value = newPartners;
  };

  return {
    partners,
    config,
    getPartners,
    getConfig,
    getPartnersCount,
    addPartner,
    removePartner,
    updateConfig,
    setPartners
  };
});
