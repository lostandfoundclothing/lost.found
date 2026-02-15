(() => {
  const initReveal = () => {
    const revealItems = document.querySelectorAll('.reveal');
    if (!revealItems.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));
  };

  document.addEventListener('DOMContentLoaded', initReveal);
})();
