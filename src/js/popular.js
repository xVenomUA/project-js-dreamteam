/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Katherine
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */

import { refs } from '../js/refs';
import { getPopularProduct } from './APIFoodBoutique';
import { createPopularCards } from './popularMarkup';
import { onChangeCount } from './headerFunctionCount';
import iconimg from '/img/icon.svg';

function getRandomProducts(products, count) {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  }
  
  
  // Fetch discount products and render them
  getPopularProduct()
    .then(response => response.data)
    .then(products => {
      const randomProducts = getRandomProducts(products, 5);
      const popularContainer = document.getElementById('popularContainer');
  
      randomProducts.forEach(product => {
        popularContainer.append(createPopularCards(product));
      });
    })
    .catch(error => {
      console.error(error.message);
    });
  

  function OnAddCartShop(evt) {
  
    const { target } = evt;
    const parent = target.closest('.filt-btn-card');
    if (!parent) return;
    const useSvg = parent.querySelector('.filt-use');
    useSvg.setAttribute('href', `${iconimg}#icon-check`);
    parent.setAttribute('disabled', 'true');
    const id = parent.dataset.idcards;
    const cart = localStorage.getItem('cart');
    const parseCart = JSON.parse(cart);
    if (parseCart) {
      const findProduct = parseCart.find(product => product._id === id);
      if (findProduct) {
        findProduct.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(parseCart));
        return;
      }
      parseCart.push({ _id: id, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(parseCart));
      onChangeCount();
      return;
    }
    if (!parseCart) {
      const cartList = [];
      cartList.push({ _id: id, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(cartList));
      onChangeCount();
    }
      
  }
  refs.listCards.addEventListener('click', OnAddCartShop);