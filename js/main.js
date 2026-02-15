(() => {
  const initParticles = () => {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) {
      return;
    }

    const fragment = document.createDocumentFragment();
    const particleCount = window.matchMedia('(max-width: 640px)').matches ? 22 : 45;

    for (let i = 0; i < particleCount; i += 1) {
      const particle = document.createElement('span');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${60 + Math.random() * 50}%`;
      particle.style.setProperty('--duration', `${22 + Math.random() * 28}s`);
      particle.style.animationDelay = `${Math.random() * 22}s`;
      fragment.appendChild(particle);
    }

    particlesContainer.appendChild(fragment);
  };

  const initHeroParallax = () => {
    const hero = document.querySelector('.hero');
    const bg = document.querySelector('.hero-bg');
    if (!hero || !bg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let rafId = null;
    let x = 0;
    let y = 0;

    const update = () => {
      bg.style.transform = `translate3d(${x * 8}px, ${y * 8}px, 0)`;
      rafId = null;
    };

    hero.addEventListener('pointermove', (event) => {
      const bounds = hero.getBoundingClientRect();
      x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.12;
      y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.12;
      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initHeroParallax();
  });
})();
