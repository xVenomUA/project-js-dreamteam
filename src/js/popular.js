/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Katherine
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */

import { refs } from '../js/refs';
import { getPopularProduct } from './APIFoodBoutique';
import { createPopularCards } from './popularMarkup';

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
        popularContainer.innerHTML += createPopularCards(product);
      });
    })
    .catch(error => {
      console.error(error.message);
    });
  
