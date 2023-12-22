import { refs } from "../js/refs";

/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Katherine
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */
import { refs } from '../main';
import { getDiskountProduct } from "./APIFoodBoutique";
import renderDiscountProductCard from "./discountMarkup";

function getRandomProducts(products, count) {
  const shuffledProducts = products.sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, count);
}
  
async function renderDiscountProducts() {
  try {
    const products = await getDiskountProduct();

    // Перевірте, чи products - це масив
    if (!Array.isArray(products)) {
      console.error("Невірний формат даних: Очікувався масив.");
      return;
    }

    // Перевірте, чи масив products не порожній
    if (products.length === 0) {
      console.warn("Немає доступних товарів зі знижкою.");
      return;
    }

    const randomProducts = getRandomProducts(products, 2);
    const discountContainer = document.getElementById('discountContainer');

    const fragment = document.createDocumentFragment();
    randomProducts.forEach(product => {
      fragment.appendChild(renderDiscountProductCard(product));
    });

    discountContainer.appendChild(fragment);
  } catch (error) {
    console.error(error.message);
  }
}

// Fetch discount products and render them
getDiskountProduct()
  .then(response => response.data)
  .then(products => {
    const randomProducts = getRandomProducts(products, 2);
    const discountContainer = document.getElementById('discountContainer');

    randomProducts.forEach(product => {
      discountContainer.innerHTML += renderDiscountProductCard(product);
    });
  })
  .catch(error => {
    console.error(error.message);
  });
