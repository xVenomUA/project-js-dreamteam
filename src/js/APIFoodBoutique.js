// Валентин Громадський  .запити на бекенд
import axios from 'axios';
const BASE_URL = 'https://food-boutique.b.goit.study/api';

// запит для рендеру списку категорій
export async function APICategories() {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//  запит для рендеру карток продуктів з фільтрацією
export async function APIProductSearch(
  word,
  category,
  byABC,
  byPrice,
  byPopularity,
  page
) {
  try {
    const option = new URLSearchParams({
      word: word || false,
      category: category || '',
      byABC: byABC || false,
      byPrice: byPrice || false,
      byPopularity: byPopularity || false,
      page: page,
      limit: 6,
    });
    const response = await axios.get(
      `${BASE_URL}/products?${option.toString()}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

// запит для детальної інформація про продукт ( пошук по id)
export async function getProductById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

// запити для рендеру карток популярних продуктів
export async function getPopularProduct() {
  try {
    const popularProducts = await axios.get(
      `${BASE_URL}/products/popular?limit=5`
    );
    console.log(popularProducts);
    return popularProducts;
  } catch (error) {
    console.log(error.message);
  }
}

// запити для рендеру карток продуктів з знижкою
export async function getDiskountProduct() {
  try {
    const diskountProduct = await axios.get(`${BASE_URL}/products/discount`);
    return diskountProduct;
  } catch (error) {
    console.log(error.message);
  }
}

// запит для підписки на розсилку нових продуків
export async function postSubscription(data) {
  const response = await axios.post(`${BASE_URL}/subscription`, data);
  return response.data;
}

// запит для оформлення замовлення продуктів
export async function postOrders(data) {
  const response = await axios.post(`${BASE_URL}/orders`, data);
  return response.data;
}
