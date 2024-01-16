import AOS from 'aos';
import 'aos/dist/aos.css';
import 'modern-normalize';

import './open-close-menu';

AOS.init({
  offset: 0,
  delay: 50,
  duration: 1000,
  easing: 'ease-in-out',
  once: 'true',
});
