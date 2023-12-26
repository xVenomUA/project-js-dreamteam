import { getProductById } from "./APIFoodBoutique";


/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Ivan || Yulia 
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */
// common
const common = {
  FILTERS_KEY: 'filters',
  CART_KEY: 'cart',
};
const cardCounter = document.querySelector('span#cart-counter');
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
const cartArr = getDataLocalStorage('cart');
const id = cartArr.map(item => item._id);
console.log(id);

async function cardUse() {
  let cartArr = await getDataLocalStorage(common.CART_KEY);
  cardCounter.textContent = cartArr.length;

  if (cartArr.length === 0) {
    cartJsBlock.innerHTML = createMarkupCartEmpty();// createMarkup empty cart
    return;
  }
  renderCards(cartArr);
  // deleteAllBtn
}

async function renderCards() {
  cartListBlock.innerHTML = '';

  let cartArr = await getDataLocalStorage(common.CART_KEY);
  for (const cartArrItem of cartArr) {
    let id = cartArrItem.id;
    try {
      const resp = await getProductById(id);
      const cartId = renderProdCard(resp, id); // !!
      cartListBlock.innerHTML += cartId;
      // const deleteBtn = document.querySelector(`.js-cart-block .`);
      const cartList = document.querySelector(".js-cart-block .cart-list-block");
     
    } catch (e) {
      console.log(e);
    }
  }
}
// рендер доданої картки

function renderProdCard(product) {
  if (product.category.includes('_')) {
    product.category = product.category.replace(/_/g, ' ');
  }

    return `
        <div class="cart-card-container" data-productlist-id="${product._id}">
          <div class="cart-image-container">
            <img src="${product.img}" alt="${product.name}" class="">
          </div>
        
        <div class="cart-info">
          <div class="cart-descript-text">
            <p class="cart-prod-name">${product.name}</p>
          <div class="cart-frame">
  
          <div class="category-cont">
            <p class="cart-category-text">Category:
              <span class="cart-category-black">${product.category}</span></p>
              
              <ul class="cart-text-cat">
              <li class="cart-text-size">

            <p class="cart-size-text">Size:
              <span class="cart-size-black">${product.size}</span></p></li>
              
          </div>
  
            <div class="cart-price">
            <p class="cart-card-price">${product.price}</p>
          </div>
            <hr class="cart-line">
          </div>
        </div>
      </div>
    `;
}

function createMarkupCartEmpty() {
  return ` 
  <div class="js-cart-block">
  <div class="cart-empty-basket">
  <img class="cart-basket-img"
                src="../img/yellowBasket.png"
                alt="yellow basket"
                loading="lazy"
                width="132"
                height="114"
              />
  </div>
  <div class="cart-empty-desc">
              <ul class="cart-desc-ul">
                <li>
                  <p class="cart-empty-text">
                    Your basket is <span class="cart-text-span">
                    empty...</span>
                  </p>
                </li>
                <li>
                  <p class="cart-gray-text">
                    Go to the main page to select your favorite <br /> products and add
                    them to the cart.
                  </p>
                </li>
              </ul>
            </div>
  `;
}


{/* // TO BE continued...

 //  localStorage
function saveData(data, key) {
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
// } */}
