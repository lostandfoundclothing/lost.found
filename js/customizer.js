(() => {
  const initCustomizerTools = () => {
    const customizer = document.querySelector('[data-customizer]');
    if (!customizer) {
      return;
    }

    customizer.addEventListener('click', (event) => {
      const tool = event.target.closest('[data-tool]');
      if (!tool) {
        return;
      }

      customizer.querySelectorAll('[data-tool]').forEach((item) => item.classList.remove('active'));
      tool.classList.add('active');
    });
  };

  document.addEventListener('DOMContentLoaded', initCustomizerTools);
})();
