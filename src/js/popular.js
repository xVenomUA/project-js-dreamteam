/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Katherine
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */

import { refs } from '../js/refs';
import { getPopularProduct, getProductById } from './APIFoodBoutique';
import { ModalMarkUP } from './ModalMArkUp';
import { GetCards } from './filter';
import { onChangeCount } from './headerFunctionCount';
import { createPopularCards } from './popularMarkup';
import iconimg from '/img/icon.svg';

getRenderPopularCard(); 


export async function getRenderPopularCard() {
  try {
    const response = await getPopularProduct(); 
    const product = response.data; 
    createPopularCards(product);
  } catch (error) {
    
  }
} 

refs.PopularDiv.addEventListener('click', OnClick);
// ВІДКРИТИ МОДАЛЬНЕ ВІКНО
async function OnClick(evt) {
  evt.preventDefault();
  const { target } = evt;
  //щоб всередині кнопки також працювало
  const parent = target.closest('.popular-card');
  if (!parent) return;
  const block = target.closest('.popular-icon-cont');
  if (block)  return;
  const id = parent.dataset.idcarts;
  try {
    const productInfo = await getProductById(id);
    ModalMarkUP(productInfo);
    refs.modalWindowId.classList.remove('is-hidden-card');
  } catch (error) {
    console.log(error);
  }
}


function OnAddCartShop(evt) {
  GetCards();
  const { target } = evt;
  const parent = target.closest('.popular-icon-cont');
  if (!parent) return;
  const useSvg = parent.querySelector('.filt-use');
  useSvg.setAttribute('href', `${iconimg}#icon-check`);
  parent.setAttribute('disabled', 'true');
  const SvgIconBack = parent.querySelector('.popular-icon');
  SvgIconBack.classList.add('popular-icon-back');  
  const id = parent.dataset.idcarts;
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
refs.PopularDiv.addEventListener('click', OnAddCartShop);


