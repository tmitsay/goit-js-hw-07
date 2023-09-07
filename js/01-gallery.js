import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

list.addEventListener("click", onImgElement);

function onImgElement(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}" />`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onKeyEsc);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onKeyEsc);
      },
    }
  );

  instance.show();

  function onKeyEsc(event) {
    if (event.code === "Escape") {
      return instance.close();
    }
  }
  // console.dir(event.target);
}

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
    <a class='gallery__link' href="${original}">

    <img class="gallery__image"
    src="${preview}" alt="${description}" 
    data-source="${original}"/>

    </a>
      </li>`
    )
    .join("");
}
