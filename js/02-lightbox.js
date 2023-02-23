import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);
const itemsGallery = createGalery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', itemsGallery);
// console.log(itemsGallery);

galleryEl.addEventListener('click', modal);

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

function modal(event) {
    event.preventDefault();
    const datasetSource = event.target.dataset.source;
    document.addEventListener('keydown', keyEsc);
    
    if (!datasetSource) return;
    // const instance = basicLightbox.create(`<img src=${datasetSource}>`);  

    instance.show()

    function keyEsc(event) {
        if (event.code !== 'Escape') return;
        document.removeEventListener('keydown', keyEsc);

        instance.close();
    }
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});