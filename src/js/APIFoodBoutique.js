import axios from "axios"

const BASE_URL = 'https://food-boutique.b.goit.study/api';

// ~~~~~~~~~~~~~~~~~~~~~
//   ~~~~~~~~~~~~~~~~~~~~~
//   ДЛЯ РЕНДЕРУ КАТЕГОРІЙ
//  ~~~~~~~~~~~~~~~~~~~~~
//   ~~~~~~~~~~~~~~~~~~~~~

export async function APICategories() { 
  try {
     const response = await axios.get(
       `${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// ~~~~~~~~~~~~~~~~~~~~~
//   ~~~~~~~~~~~~~~~~~~~~~
//   ДЛЯ ПОШУКУ ПРОДУКТІВ 
//  ~~~~~~~~~~~~~~~~~~~~~
//   ~~~~~~~~~~~~~~~~~~~~~
export async function APIProductSearch(
  q,
  category,
  byABC,
  byPrice,
  byPopularity,
  page
) {
  const option = new URLSearchParams({
    q: q || false,
    category: category || '',
    byABC: byABC || false,
    byPrice: byPrice || false,
    byPopularity: byPopularity || false,
    page: page,
    limit: 6,
  });
  const response = await axios.get(`${BASE_URL}/products?${option.toString()}`);
  return response.data;
}
