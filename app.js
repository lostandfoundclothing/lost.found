const particlesContainer = document.querySelector('.particles');
if (particlesContainer) {
  for (let i = 0; i < 45; i += 1) {
    const dot = document.createElement('span');
    dot.className = 'particle';
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${60 + Math.random() * 50}%`;
    dot.style.setProperty('--duration', `${22 + Math.random() * 28}s`);
    dot.style.animationDelay = `${Math.random() * 22}s`;
    particlesContainer.appendChild(dot);
  }
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

revealItems.forEach((el) => observer.observe(el));
