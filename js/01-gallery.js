import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const makeGalleryEl = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`).join('');

galleryEl.insertAdjacentHTML("beforeend", makeGalleryEl);

let openModalInstance = null;

function handleGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;

  const largeImageSrc = e.target.dataset.source;
  const largeImageAlt = e.target.getAttribute("alt");

  const instance = basicLightbox.create(
    `<img src="${largeImageSrc}" alt="${largeImageAlt}"/>`
  ); 

  openModalInstance = instance;
  
  instance.show();
}

function handleGalleryKeydown (e) {
  if (e.key === 'Escape' && openModalInstance !== null) {
    openModalInstance.close();
    openModalInstance = null; 
  }
}

galleryEl.addEventListener('click', handleGalleryClick);

document.addEventListener('keydown', handleGalleryKeydown);
