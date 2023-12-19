// import { refsfilt } from './filter';

// export function FilterMarkUp(filterinfo) {
//   const array = filterinfo
//     .map(({ category, img, name, size, popularity, price }) => {
//         return `<div class="filt-div-card">
//       <div class="filt-div-img">
//   <img class="filt-img" src="${img}" alt="${name}" width="140">
//   </div>
//   <h2 class="filt-h-name">${name}</h2>
//   <div class="filt-div-text">
//     <p class="filt-text">Category: <span class="filt-span">${category}</span></p>
//     <p class="filt-text">Size: <span class="filt-span">${size}</span></p>
//     <p class="filt-text">Popularity: <span class="filt-span">${popularity}</span></p>
//   </div>
//   <div class="filt-div-price"> 
//     <h2 class="filt-h-price">${price}</h2>
//     <button class="filt-btn-card" type="submit">
//       <svg class="filt-card-icon" height="18" width="18">
//         <use href="./img/icon.svg#icon-shop"></use>
//       </svg>
//     </button>
//   </div>
// </div>
// `;
//     })
//         .join('');
//     refsfilt.filtercard.innerHTML = array;
// }
