import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const itemsGallery = createGalery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', itemsGallery);


function createGalery (items) {

    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href= ${original}>
                        <img
                            class="gallery__image"
                            src= ${preview}
                            data-source= ${original}
                            alt=${description}
                        />
                    </a>
                </li>`;
    }).join(''); 
};
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});