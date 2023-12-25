/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Ivan || Yulia 
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */
import { refs } from '../main';
import { getProductById } from '../js/APIFoodBoutique';

// common
const common = {
    FILTERS_KEY: "filters",
    CART_KEY: "cart"
}
const cardCounter = document.querySelector('span#cart-counter')
const cartJsBlock = document.querySelector('.js-cart-block');
const cartListBlock = document.querySelector('.cart-list-block');

function getDataLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.log(error.message);
    }
}

function cardUse() {
    let cartArr = await getDataLocalStorage(common.CART_KEY);
    cardCounter.textContent = cartArr.length;

    if (cartArr.length === 0) {
        // createMarkup empty cart
    
    }
    renderCards(cartArr);
    // deleteAllBtn
}

async function renderCards() {
    cartListBlock.innerHTML = "";

    let cartArr = await getDataLocalStorage(common.CART_KEY);
    for (const cartArrItem of cartArr) {
        let id = cartArrItem.id;

        try {
            const resp = await getProductById(id);
            const cartId = renderProdCard(resp, id); // !!
            cartListBlock.innerHTML += cartId;

            const deleteBtn = document.querySelector(`.`)

        }
    }
}
// TO BE continued...



// // localStorage
// function saveData(data, key) {
//     localStorage.setItem(key, JSON.stringify(data))
// }

//  function getData(key) {
//     const data = localStorage.getItem(key);

//     return data ? JSON.parse(data) : []
// }

// // addProducts

// export function addProducts() {
//     const cartArr = getData(common.CART_KEY);

//     cartArr.forEach(_id => {
//         const products = document.querySelectorAll(`[data-idcards="${_id}]`);

//         products.forEach(product => {
//             const productBtn = // знайти кнопку, яка додає товар
//                 productBtn.innerHTML = `<svg class="_item-checked"><use href=""></></svg>`;
//         }
//             )
//     })
// }

// export function removeProducts() {
//     const cartArr = getData(common.CART_KEY);

//     cartArr.forEach(_id => {
//         const products = document.querySelectorAll(`[data-idcards="${_id}]`);


//     }
//     )
// }