import axios from "axios"

const BASE_URL = 'https://food-boutique.b.goit.study/api';

export async function APLCategories() { 
  try {
     const response = await axios.get(
       `${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
