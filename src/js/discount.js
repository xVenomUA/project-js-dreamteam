/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Katherine
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */
// import { refs } from '../main';

import { refs } from '../js/refs';
import { getDiskountProduct, getProductById } from './APIFoodBoutique';
import { ModalMarkUP } from './ModalMArkUp';
import { GetCards } from './filter';
import { onChangeCount } from './headerFunctionCount';
import { createDiscountCards } from './discountMarkup';
import iconimg from '/img/icon.svg';

// function getRandomProducts(products, count) {
//   const shuffledProducts = products.sort(() => 0.5 - Math.random());
//   return shuffledProducts.slice(0, count);
// }

// getDiskountProduct()
//   .then(response => response.data)
//   .then(products => {
//     const randomProducts = getRandomProducts(products, 2);
//     const discountContainer = document.getElementById('discountContainer');

//     randomProducts.forEach(product => {
//       discountContainer.appendChild(createDiscountCards(product));
//     });
//   })
//   .catch(error => {
//     console.error(error.message);
//   });

getRenderDiscountCard();

export async function getRenderDiscountCard() {
  try {
    const response = await getDiskountProduct();
    const product = response.data;
    createDiscountCards(product);
    const randomProducts = getRandomProducts(product, 2);
    createDiscountCards(randomProducts);
  } catch (error) {

  }
  function getRandomProducts(products, count) {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  }
}

refs.DiscountDiv.addEventListener('click', OnClick);
async function OnClick(evt) {
  evt.preventDefault()
  document.body.style.overflow = "hidden";
  const { target } = evt;

  const parent = target.closest('.product-card');
  if (!parent) return;
  const block = target.closest('.discount-icon-cont');
  if (block) return;
  const id = parent.dataset.idcarts;
  try {
    const productInfo = await getProductById(id);
    ModalMarkUP(productInfo);
    refs.modalWindowId.classList.remove('is-hidden-card');
  } catch (error) {
    console.log(error);
  }
}


async function OnAddCartShop(evt) {
  try {
    const { target } = evt;
    const parent = target.closest('.discount-icon-cont');
    if (!parent) return;

    const useSvg = parent.querySelector('.filt-use');
    useSvg.setAttribute('href', `${iconimg}#icon-check`);
    parent.setAttribute('disabled', 'true');

    const id = parent.dataset.idcarts;
    const cart = localStorage.getItem('cart');
    const parseCart = JSON.parse(cart) || [];

    const findProduct = parseCart.find(product => product._id === id);
    if (findProduct) {
      findProduct.quantity += 1;
    } else {
      parseCart.push({ _id: id, quantity: 1 });
      onChangeCount();
    }

    localStorage.setItem('cart', JSON.stringify(parseCart));
  } catch (error) {

  }
  document.body.style.overflow = "scroll";
}
refs.DiscountDiv.addEventListener('click', OnAddCartShop);

// function OnAddCartShop(evt) {
//   GetCards();
//   const { target } = evt;
//   const parent = target.closest('.discount-icon-cont');
//   if (!parent) return;
//   const useSvg = parent.querySelector('.filt-use');
//   useSvg.setAttribute('href', `${iconimg}#icon-check`);
//   parent.setAttribute('disabled', 'true');
//   const id = parent.dataset.idcarts;
//   const cart = localStorage.getItem('cart');
//   const parseCart = JSON.parse(cart);
//   if (parseCart) {
//     const findProduct = parseCart.find(product => product._id === id);
//     if (findProduct) {
//       findProduct.quantity += 1;
//       localStorage.setItem('cart', JSON.stringify(parseCart));
//       return;
//     }
//     parseCart.push({ _id: id, quantity: 1 });
//     localStorage.setItem('cart', JSON.stringify(parseCart));
//     onChangeCount();
//     return;
//   }
//   if (!parseCart) {
//     const cartList = [];
//     cartList.push({ _id: id, quantity: 1 });
//     localStorage.setItem('cart', JSON.stringify(cartList));
//     onChangeCount();
//   }
// }
// refs.DiscountDiv.addEventListener('click', OnAddCartShop);
