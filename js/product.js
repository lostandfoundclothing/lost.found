(() => {
  const state = {
    size: '',
    color: ''
  };

  const setActive = (elements, nextElement) => {
    elements.forEach((element) => element.classList.remove('active'));
    nextElement.classList.add('active');
  };

  const initProductControls = () => {
    const productRoot = document.querySelector('[data-product-page]');
    if (!productRoot) {
      return;
    }

    const sizeButtons = productRoot.querySelectorAll('[data-size]');
    const colorButtons = productRoot.querySelectorAll('[data-color]');
    const addToCartButtons = productRoot.querySelectorAll('[data-add-cart]');
    const errorMessage = productRoot.querySelector('[data-selection-error]');
    const previewImages = productRoot.querySelectorAll('[data-preview-image]');

    productRoot.addEventListener('click', (event) => {
      const sizeButton = event.target.closest('[data-size]');
      if (sizeButton) {
        setActive(sizeButtons, sizeButton);
        state.size = sizeButton.dataset.size;
        if (errorMessage) {
          errorMessage.hidden = true;
        }
      }

      const colorButton = event.target.closest('[data-color]');
      if (colorButton) {
        setActive(colorButtons, colorButton);
        state.color = colorButton.dataset.color;

        if (previewImages.length) {
          previewImages.forEach((image) => {
            image.src = colorButton.dataset.preview;
          });
        }
      }
    });

    addToCartButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        if (!state.size) {
          event.preventDefault();
          if (errorMessage) {
            errorMessage.hidden = false;
          }
          return;
        }

        button.dataset.selectedSize = state.size;
        button.dataset.selectedColor = state.color || 'black';
      });
    });
  };

  document.addEventListener('DOMContentLoaded', initProductControls);
})();
