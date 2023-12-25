import { refs } from "./refs";

// /* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
//     Юлія Кривобоченко
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */

import axios from "axios";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getProductById } from './APIFoodBoutique';
import { FilterMarkUp } from './FilterMarkUp';

const modal = document.querySelector('.modal');

const btnAddToCard = document.querySelector(".filt-btn-card");
btnAddToCard.addEventListener('click', openModal);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

async function openModal(event) {
    event.preventDefault();
    try {
        if (event.target.className !== "filt-btn-card") return;

        const data = await getProductById(event.target.dataset.id);

        const id = btnAddToCard.getAttribute("id");
        data.push(id);

        const createMarkup = FilterMarkUp(data);
        const modalLightbox = lightbox.create(createMarkup);

        localStorage.setItem("productId", id);

        modalLightbox.show();
    } catch (error) {
        console.log(error.message);
    }
}






// function addToCart() {
//     const btnAddToCard = document.getElementById("filt-btn-card");
//     const id = btnAddToCard.getAttribute("id");

//     localStorage.setItem("productId", id);
// }



// window.addEventListener('keydown', closeModalKeyboard);


// function closeModalKeyboard(event) {
//     if (event.code === 'Escape') {
//         closeModal();
//         window.removeEventListener('keydown', closeModalKeyboard);
//     }
// }


// async function getProduct(id, btn) {
//     const modalContent = document.querySelector('.modal-content');
//     modalContent.innerHTML = '';
//     const product = await getProductById(id);
//     modalContent.innerHTML = renderModalContent(product, btn);
// }

// function renderModalContent(product, btn) {
//     return `
//     <div class="modal-product-img">
//       <img src="${product.img}" alt="${product.name}" />
//     </div>
//     <div class="modal-product-info">
//         <h4 class="modal-product-title">${product.name}</h4>
//       <div class="modal-product-characteristics">
//         <div>Category: <span>${product.category}</span></div>
//         <div>Size: <span>${product.size}</span></div>
//         <div>Popularity: <span>${product.popularity}</span></div>
//       </div>
//       <p class="modal-product-description">
//       ${product.desc}
//       </p>
//     </div>
//     <div class="modal-product-price">$${product.price.toFixed(2)}</div>
//     <button class="modal-product-button" data-productlist-id="${product._id
//         }"> ${btn}<svg class="modal-product-button-icon">
//     <use class="modal-product-button-icon" href="./icons.svg#icon-heroicons-solid_shopping-cart"></use>
//   </svg></button>
//     `;
// }

// const modal = document.querySelector('.modal');
// const closeButton = document.querySelector('.close-button');

// function openModal() {
//     modal.classList.add('show-modal');
//     document.body.style.overflow = 'hidden';
// }

// function closeModal() {
//     modal.classList.remove('show-modal');
//     document.body.style.overflow = 'auto';
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         closeModal();
//     }
// }







// document.addEventListener('click', function (event) {
//     if (!event.target.classList.contains('modal-product-button')) {
//         return;
//     }
//     const id = event.target.dataset.productlistId;

//     event.target.addEventListener('click', addToCart(id));
//     event.target.addEventListener('click', closeModal());
// });

// function waitForElements(selector) {
//     return new Promise((resolve, reject) => {
//         const elements = document.querySelectorAll(selector);

//         if (elements.length > 0) {
//             resolve(elements);
//         } else {
//             const observer = new MutationObserver(() => {
//                 const updatedElements = document.querySelectorAll(selector);
//                 if (updatedElements.length > 0) {
//                     observer.disconnect();
//                     resolve(updatedElements);
//                 }
//             });

//             observer.observe(document.documentElement, {
//                 childList: true,
//                 subtree: true,
//             });
//         }
//     });
// }


// waitForElements('.modalOn')
//     .then(elements => {
//         elements.forEach(element => {
//             element.addEventListener('click', e => {
//                 const id = event.currentTarget.dataset.productlistId;
//                 if (localStorage.getItem(id)) {
//                     getProduct(id, 'Remove from');
//                 } else {
//                     getProduct(id, 'Add to');
//                 }

//                 openModal();
//             });
//         });
//     })
//     .catch(error => {
//         console.error(error.message);
//     });

// waitForElements('.modalOndisc')
//     .then(elements => {
//         elements.forEach(element => {
//             element.addEventListener('click', event => {
//                 const id = event.currentTarget.dataset.productlistId;
//                 if (localStorage.getItem(id)) {
//                     getProduct(id, 'Remove from');
//                 } else {
//                     getProduct(id, 'Add to');
//                 }

//                 openModal();
//             });
//         });
//     })
//     .catch(error => {
//         console.error(error.message);
//     });

// waitForElements('.modalOpopul')
//     .then(elements => {
//         elements.forEach(element => {
//             element.addEventListener('click', event => {
//                 const id = event.currentTarget.dataset.productlistId;
//                 if (localStorage.getItem(id)) {
//                     getProduct(id, 'Remove from');
//                 } else {
//                     getProduct(id, 'Add to');
//                 }

//                 openModal();
//             });
//         });
//     })
//     .catch(error => {
//         console.error(error.message);
//     });
