import { onMounted, onUnmounted } from 'vue';
import { useNavigationStore } from '../stores/navigationStore';

export function useScroll() {
  const nav = useNavigationStore();

  const handleScroll = () => {
    nav.setScrollY(window.scrollY);
  };

  onMounted(() => window.addEventListener('scroll', handleScroll));
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));

  return { scrollY: nav.scrollY };
}