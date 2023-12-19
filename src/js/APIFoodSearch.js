import axios from 'axios';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products?';
export async function APLProduct(q, category, byABC, byPrice, byPopularity, page) {
  const option = new URLSearchParams({
    q: q || false,
    category: category || "",
    byABC: byABC || false,
    byPrice: byPrice || false,
    byPopularity: byPopularity || false,
    page: page,
    limit: 6,
  });
  const response = await axios.get(
    `${BASE_URL}${option.toString()}`
  );
  return response.data;
}
