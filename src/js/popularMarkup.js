import { refs } from '../js/refs';
import iconimg from '/img/icon.svg';
export function createPopularCards(product) {
  const PopulaProduct = product
    .map(({ _id, category, img, name, size, popularity }) => {
      if (category.includes('_')) {
        category = category.replace(/_/g, ' ');
      }
      let btnChange = '';
      let iconChange = 'shop';
      let backHover = '';
      const localValue = JSON.parse(localStorage.getItem('cart'));
      if (localValue) {
        const findProduct = localValue.find(product => product._id === _id);
        if (findProduct) {
          iconChange = 'check';
          btnChange = 'disabled';
          backHover = 'popular-icon-back';
        }
      }
      return `
      <div class="popular-card" data-idcarts="${_id}">
      <div class="popular-background">
            <img src="${img}" alt="${name}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${name}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${category}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${size}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${popularity}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button  class="popular-buton" data-idcarts="${_id}" class="popular-icon-cont">
              <svg class="popular-icon ${backHover}" width="20" height="20">
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
  refs.PopularDiv.innerHTML = PopulaProduct;
}
