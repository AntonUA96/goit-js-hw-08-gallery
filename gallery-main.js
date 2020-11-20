import galleryItems from "./gallery-items.js";


const ul = document.querySelector('ul');
const modalDiv = document.querySelector('.lightbox');
const imgOriginal = document.querySelector('.lightbox__image');
const buttonClose = document.querySelector('.lightbox__button');
const overlayClose = document.querySelector('.lightbox__overlay');


galleryItems.map(e => {

    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    li.classList.add('gallery__item');
    a.classList.add('gallery__link');
    img.classList.add('gallery__image');

    a.href = e.original;
    img.src = e.preview;
    img.dataset.source = e.original;
    img.alt = e.description;
    
    a.appendChild(img);
    li.appendChild(a);
    ul.prepend(li);
});



ul.addEventListener('click', onUlClick);
buttonClose.addEventListener('click', onButtonCloseClick);
overlayClose.addEventListener('click', onButtonCloseClick);


function onUlClick(event) {

    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {

        return
    };

    modalDiv.classList.add('is-open');
    imgOriginal.src = event.target.dataset.source;
    window.addEventListener('keydown', handleKeyDown);
};


function onButtonCloseClick(event) {

    modalDiv.classList.remove('is-open');
    imgOriginal.src = '';

};


function handleKeyDown(event) {

  if(event.code === 'Escape') {
    onButtonCloseClick();
  }
};