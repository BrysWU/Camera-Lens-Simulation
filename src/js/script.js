document.addEventListener('DOMContentLoaded', () => {
  const lensSelect = document.getElementById('lens-select');
  const sampleImage = document.getElementById('sample-image');

  const lensEffects = {
    '18': 'scale(1.2)', // Slight zoom-out
    '24': 'scale(1.1)',
    '35': 'scale(1)',
    '50': 'scale(0.9)',
    '85': 'scale(0.8)',
    '135': 'scale(0.7)', // Zoom-in effect
  };

  lensSelect.addEventListener('change', () => {
    const lens = lensSelect.value;
    sampleImage.style.transform = lensEffects[lens];
  });
});
