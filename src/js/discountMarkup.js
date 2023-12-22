import iconimg from '/img/icon.svg';


// export function createDiscountCards(arr) {
//     return arr
//         .map(
//             ({ _id, name, img, price }) =>
//                 `<li class="discount__item cards__item" data-id="${_id}">
//                  <a class="discount__link cards__link" href="#">
//                   <div class="discount__image">
//             <img class="cards__image-photo-js" loading="lazy" src="${img}" alt="${name}" /> </div>
//             <div class="discount__descr">
//             <p class="cards__title">${name}</p>
//                     <div class="discount__price-container">
//                         <p class="cards__price">${price}</p>
//                         <button class="cards__button" type="button">
//                 <svg class="icon__cart">
//                     <use href="${iconimg}#icon-cart"></use>
//                 </svg>
//                 </button>
//                     </div>
                        
//             </div><svg class="icon__discount">
//                             <use href="${iconimg}#icon-discount"></use>
//                          </svg>  
//                  </a>
//                  </li>`
//         )
//         .join('');
// }

export function createDiscountCards(product) {
    return `
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="dicount-label-icon" width="60" height="60">
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