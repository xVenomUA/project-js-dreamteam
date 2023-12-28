import iconimg from '/img/icon.svg';
import { refs } from './refs';

export function createDiscountCards(product) {
  const DiscountProduct = product
  .map(({ _id, img, name, price }) => {
    let btnChange = '';
    let iconChange = 'shop';
    const localValue = JSON.parse(localStorage.getItem('cart'));
    if (localValue) {
      const findProduct = localValue.find(product => product._id === _id);
      if (findProduct) {
        iconChange = 'check';
        btnChange = 'disabled';
      }
    }
    return `
    <div class="product-card" data-idcarts="${_id}">
  <div class="product-background">
    <div class="discount-label">
      <svg class="discount-label-icon" width="60" height="60">
        <use href="${iconimg}#icon-discount"></use>
      </svg>
    </div>

    <img src="${img}" alt="${name}" class="product-image">
  </div>

  <div class="product-details">
    <div class="details-text">
      <h2 class="product-name">${name}</h2>

      <div class="price-icon">
        <p class="product-price">$${price}</p>

        <button data-idcarts="${_id}" class="discount-icon-cont">
          <svg class="discount-icon" width="18" height="18">
            <use href="${iconimg}#icon-${iconChange}" class="filt-use"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

`;
    })
    .join('');
  refs.DiscountDiv.innerHTML = DiscountProduct;
}