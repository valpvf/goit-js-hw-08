export const refs = {
  gallery: document.querySelector('.gallery'),
};

function onCreateImg({ preview, original, description }) {
  return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `;
}

export function onMarkupGallery(galleryItems) {
  return galleryItems.map(onCreateImg).join('');
}
