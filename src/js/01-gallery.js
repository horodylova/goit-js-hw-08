// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.gallery');

  const markup = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
             <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
           </div>`;
  }).join('');

  container.insertAdjacentHTML('beforeend', markup);
  
  
  const lightbox = new SimpleLightbox('.gallery a', {
    showCounter: true,
    animationSpeed: 250,
    loop: true,
    
  });

  container.addEventListener('click', onClick);

  function onClick(e) {
    e.preventDefault();
    const target = e.target;

    if (target.nodeName === 'IMG') {
      const largeImageUrl = target.dataset.source;
      lightbox.open({ source: largeImageUrl });
    }

    document.addEventListener('keydown', onKeyPress);

    function onKeyPress(e) {
      if (e.code === 'Escape') {
        lightbox.close();
        document.removeEventListener('keydown', onKeyPress);
      }
    }
  }
});
