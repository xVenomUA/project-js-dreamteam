import { refs } from "../js/refs";
import iconimg from '/img/icon.svg';
export function FilterMarkUp(filterinfo) {
  const array = filterinfo.map(({ _id, category, img, name, size, popularity, price }) => {
    if (category.includes('_')) {
      category = category.replace(/_/g, ' ');
    }
    let btnChange = ''; 
    let iconChange = 'shop';
    const localValue = JSON.parse(localStorage.getItem('cart'));
    if (localValue) {
      const findProduct = localValue.find(product => product._id === _id);
      if (findProduct) {
        iconChange = 'check';
        btnChange = 'disabled'
      }
    }
        return `<div class="filt-div-card" data-idcarts="${_id}">
      <div class="filt-div-img">
  <img class="filt-img" src="${img}" alt="${name}" width="140">
  </div>
  <h2 class="filt-h-name">${name}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${category}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${size}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${popularity}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${price}</h2>
    <button class="filt-btn-card" data-idcards="${_id}" type="submit" ${btnChange}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${iconimg}#icon-${iconChange}"></use>
        </svg>
    </button>
  </div>
</div>
`;
    })
        .join('');
  refs.filtercard.innerHTML = array;
  if (refs.filtercard.innerHTML === '') {
    refs.filtercard.innerHTML = `<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`;
  }
}