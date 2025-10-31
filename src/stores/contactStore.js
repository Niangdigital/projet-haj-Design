import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useContactStore = defineStore('contact', () => {
  const formData = reactive({ name: '', email: '', phone: '', service: '', message: '' });
  const formSubmitted = ref(false);
  const formLoading = ref(false);

  return {
    formData,
    formSubmitted,
    formLoading,
    updateForm: (field, value) => { formData[field] = value; },
    submitForm: async () => {
      formLoading.value = true;
      await new Promise(r => setTimeout(r, 1500));
      formSubmitted.value = true;
      setTimeout(() => { formSubmitted.value = false; }, 3000);
      Object.keys(formData).forEach(k => formData[k] = '');
      formLoading.value = false;
    },
    resetForm: () => {
      Object.keys(formData).forEach(k => formData[k] = '');
    }
  };
});