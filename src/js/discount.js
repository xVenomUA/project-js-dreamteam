/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Katherine
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */
// import { refs } from '../main';

import { refs } from '../js/refs';
import { getDiskountProduct } from './APIFoodBoutique';
import { createDiscountCards } from './discountMarkup';

function getRandomProducts(products, count) {
  const shuffledProducts = products.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, count);
}

// Fetch discount products and render them

getDiskountProduct()
  .then(response => response.data)
  .then(products => {
    const randomProducts = getRandomProducts(products, 2);
    const discountContainer = document.getElementById('discountContainer');

    randomProducts.forEach(product => {
      discountContainer.appendChild(createDiscountCards(product));
    });
  })
  .catch(error => {
    console.error(error.message);
  });
