import iconimg from '/img/icon.svg';
import { ModalMarkUP } from './ModalMArkUp';

const modalWindowId = document.getElementById('id-modal-card');

export function createDiscountCards(product) {
  const card = document.createElement("div")
  card.classList.add("product-card")
  card.dataset.idcarts = product._id
  card.addEventListener("click", () => {
    ModalMarkUP(product)
    modalWindowId.classList.remove('is-hidden-card')
    document.body.style.overflow = "hidden";
  })
  card.innerHTML = `
  <div class="product-background">
        
  <div class="discount-label">
  <svg class="discount-label-icon" width="60" height="60">
    <use href="${iconimg}#icon-discount"></use>
  </svg>
  </div>
    <img src="${product.img}" alt="${product.name}" class="product-image">
  </div>
  <div class="product-details">
  <div class="details-text">

    <h2 class="product-name">${product.name}</h2>
    
    <div class="price-icon">
    <p class="product-price">$${product.price.toFixed(2)}</p>
  <div id="${product._id}" class="discount-icon-cont">
    <svg class="discount-icon" width="18" height="18">
      <use href="${iconimg}#icon-shop"></use>
    </svg>
  </div>
  </div>
  </div>
  `;
  return card;
}

