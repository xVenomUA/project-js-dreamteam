import iconimg from '/img/icon.svg';

export function createDiscountCards(product) {
    return `
      <div class="product-card">
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

        <div class="name-price">
          <h2 class="product-name">${product.name}</h2>
          <p class="product-price">$${product.price.toFixed(2)}</p>
        </div>
          
        <div id="${product._id}" class="discount-icon-cont inBascet">
          <svg class="discount-icon" width="18" height="18">
            <use href="${iconimg}#icon-shop"></use>
          </svg>
        </div>

        </div>
      </div>
    `;
  }