import iconimg from '/img/icon.svg';

export function createPopularCards(product) {
  if (product.category.includes('_')) {
    product.category = product.category.replace(/_/g, ' ');
  }
    return `
        <div class="popular-card" data-productlist-id="${product._id}">
          <div class="popular-background">
            <img src="${product.img}" alt="${product.name}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${product.name}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${product.category}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${product.size}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${product.popularity}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
            <div id="${product._id}" class="popular-icon-cont">
              <svg class="popular-icon" width="20" height="20">
                <use href="${iconimg}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `;
  }