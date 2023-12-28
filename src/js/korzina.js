import { getProductById } from './APIFoodBoutique';
import { postOrders } from './APIFoodBoutique';
import { onChangeCount } from './headerFunctionCount';
import iconimg from '/img/icon.svg';
import basket from '/img/yellowBasket.png';
/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Ivan || Yulia || Valentyn
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
const cartDeleteBtn = document.querySelector('.cart-delete-btn');
const cartForm = document.querySelector('.cart-form')
const modalBasket = document.querySelector('.modal-backdrop-two');

cartDeleteBtn.addEventListener('click', onClick);

function onClick() {
  localStorage.removeItem('cart');
  cardUse();
}

function getDataLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
  }
}

async function cardUse() {
  let cartArr = await getDataLocalStorage(common.CART_KEY);

  cardCounter.textContent = cartArr.length;

  if (cartArr.length === 0) {
    cartJsBlock.innerHTML = createMarkupCartEmpty(); // createMarkup empty cart
    return;
  }
  renderCards(cartArr);
  // deleteAllBtn
}
cardUse();

async function renderCards() {
  const cartArr = getDataLocalStorage('cart');
  const id = cartArr.map(item => item._id);
  cartListBlock.innerHTML = '';

  try {
    let total = 0;
    let prices = [];
    let cartList = [];
    let listArr = []; // елементи в корзині
    for (let i = 0; i < id.length; i += 1) {
      const resp = await getProductById(id[i]);
      const cartId = renderProdCard(resp, id[i]);
      cartListBlock.innerHTML += cartId;

      const cartParce = JSON.parse(localStorage.getItem('cart'));
      total += resp.price;
      prices.push(resp.price);
      spanYourOrderPrice.textContent = `${Number(total.toFixed(2))}`;

      waitForElements('.cart-close')
        .then(elements => {
          listArr.push(cartParce[i]._id);

          localStorage.setItem('cart1', JSON.stringify(cartList));
          elements.forEach(element => {
            element.addEventListener('click', e => {
              const id = e.currentTarget.id;

              listArr = listArr.filter(item => item !== id);

              cartList = [];
              for (let j = 0; j < listArr.length; j += 1) {
                cartList.push({ _id: listArr[j], quantity: 1 });
              }

              localStorage.setItem('cart', JSON.stringify(cartList));
              cardUse();
            });
          });
        })

        .catch(error => {
          console.error(error.message);
        });
    }
  } catch (e) {
    console.log(e);
  }
}

function waitForElements(selector) {
  return new Promise((resolve, reject) => {
    const elements = document.querySelectorAll(selector);

    if (elements.length > 0) {
      resolve(elements);
    } else {
      const observer = new MutationObserver(() => {
        const updatedElements = document.querySelectorAll(selector);
        if (updatedElements.length > 0) {
          observer.disconnect();
          resolve(updatedElements);
        }
      });

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    }
  });
}
//скрол для корзини
document.addEventListener("DOMContentLoaded", function () {
  const cart = document.getElementById("cart");
  const scrollThreshold = 100;

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
  });
});
// рендер доданої картки

function renderProdCard(product) {
  if (product.category.includes('_')) {
    product.category = product.category.replace(/_/g, ' ');
  }

  return `
        <li class="cart-card-container" data-productlist-id="${product._id}">
          <div class="cart-image-container">
            <img src="${product.img}" alt="${product.name}" class="">
          </div>
        
        <div class="cart-info">
          <div class="cart-descript-text">
          <div class="cart-div-new">
            <p class="cart-prod-name">${product.name}</p>
            <button type="button" id="${product._id}" class="cart-close">
              <svg class="cart-close-icon" width="10.125" height="10.125">
                <use href="${iconimg}#icon-close"></use>
              </svg>
            </button>
            </div>
          <div class="cart-frame">
  
          <div class="category-cont">
              <ul class="cart-text-cat">
              <li>
              <p class="cart-category-text">Category:
              <span class=" cart-category-black">${product.category}</span></p>
              </li>
              <li class="cart-text-size">

            <p class="cart-size-text">Size:
              <span class="cart-size-black">${product.size}</span></p></li>
              
          </div>
  
            <div class="cart-price">
            <p class="cart-card-price">$${product.price}</p>
          </div>
          </div>
        </div>
      </div>
      </li>
      <hr class="cart-line">
    `;
}

function createMarkupCartEmpty() {
  return ` 
  <div class="js-cart-block">
  <div class="cart-empty-new">
  <div class="cart-empty-basket">
  <img class="cart-basket-img"
                src="${basket}"
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
            </div>
  `;
}

const spanYourOrderPrice = document.querySelector(
  'span#your-order-total-price'
);

cartForm.addEventListener('submit', onCheckout)

async function onCheckout(event) {
  event.preventDefault();
  const cardError = document.querySelector('.error-message')
  const email = document.querySelector('.cart-email-input').value;
  onChangeCount();
  const cartItems = getDataLocalStorage('cart');
  const orderData = createOrderObject(email, cartItems);

  try {
    const response = await postOrders(orderData);

    toggleModal(true);
    document.body.style.overflow = "hidden";
    localStorage.removeItem('cart');
    cardUse();
  } catch (error) {
    cardError.style.display = 'block'
    setTimeout(() => cardError.style.display = 'none', 2000);
  }
};

function createOrderObject(email, cartItems) {
  return {
    email: email,
    products: cartItems.map(item => ({
      productId: item._id,
      amount: item.quantity
    }))
  };
}

function toggleModal(show = true) {
  modalBasket.classList.toggle('is-hidden-basket', !show);
  if (show) {
    setupModalCloseEvents();
  }
  document.body.style.overflow = "scroll";
}

function setupModalCloseEvents() {
  const closeModalBtn = document.querySelector('.modal-close-btn-basket');
  closeModalBtn.addEventListener('click', () => toggleModal(false));
  modalBasket.addEventListener('click', event => {
    if (event.target === modalBasket) {
      toggleModal(false);
    }
  });

}