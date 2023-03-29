// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { onMarkupGallery, refs } from './01-markup.js';
import { galleryItems } from './gallery-items';

refs.gallery.insertAdjacentHTML('beforeend', onMarkupGallery(galleryItems));

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  scrollZoom: false,
});
// Change code below this line
