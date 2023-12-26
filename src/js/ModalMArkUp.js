import { refs } from '../js/refs';
import iconimg from '/img/icon.svg';
const backdropDiv = document.querySelector('.backdrop-div-card');
export function ModalMarkUP(productInfo) {
    const { _id, name, category, size, popularity, desc, price, img } = productInfo;
    const array =
        `<div class="shop-modal-backdrop">
    <div class="shop-div-card" data-idcarts="${_id}">
        <button class="shop-modal-close-btn">
            <svg class="svg-close" width="20" height="20">
                <use href="./img/icon.svg#icon-close"></use>
            </svg>
        </button>
        <div class="shop-div-info">
        
    <div class="shop-div-img">
        <img class="shop-img" src="${img}" alt="${name}" width="140">
    </div>
    <div class="shop-div-info-text">
        <h2 class="shop-h-name">${name}</h2>
        <div class="shop-div-text-discription">
            <div class="shop-div-text-new">
                <p class="shop-text">Category: <span class="shop-span">${category}</span></p>
                <p class="shop-text">Size: <span class="shop-span">${size}</span></p>
            </div>
            <div class="shop-div-text-second">
                <p class="shop-text">Popularity: <span class="shop-span">${popularity}</span></p>
            </div>
        </div>
        <p class="shop-text-discription">${desc}</p>
    </div>
    
</div>

        <div class="shop-div-price">
            <h2 class="shop-h-price">$${price}</h2>
            <button class="shop-btn-card" data-idcards="#${_id}" type="submit"> Add to
                <svg class="shop-card-icon" height="18" width="18">
                    <use href="${iconimg}#icon-shop"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
`;
    backdropDiv.innerHTML = array;
}
