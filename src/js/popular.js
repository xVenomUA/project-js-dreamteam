/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Katherine
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */

import { refs } from '../js/refs';
import { getPopularProduct, getProductById } from './APIFoodBoutique';
import { ModalMarkUP } from './ModalMArkUp';
import { createPopularCards } from './popularMarkup';
  
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

