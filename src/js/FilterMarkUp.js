import { refs } from "../js/refs";
import iconimg from '/img/icon.svg';
export function FilterMarkUp(filterinfo) {
  const array = filterinfo
    .map(({ _id, category, img, name, size, popularity, price }) => {
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
    <h2 class="filt-h-price">${price}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${iconimg}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`;
    })
        .join('');
    refs.filtercard.innerHTML = array;
}