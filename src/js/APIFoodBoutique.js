import axios from "axios"

export async function APLCategories() { 
    const response = await axios.get(
      `https://food-boutique.b.goit.study/api/products/categories`
    );
    return response.data; 
}
