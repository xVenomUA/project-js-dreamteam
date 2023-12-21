
import { refs } from "../main";
import { APIProductSearch, APICategories } from './APIFoodBoutique';
import { FilterMarkUp } from "./FilterMarkUp";


// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// РЕНДЕР КАТЕГОРІЙ В СЕЛЕКТІ
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
async function GetCategories(){
try {
  const categResult = await APICategories(); 
categResult.push('Show all');
const markUpCategories = categResult.map(data => `<option value="${data}">${data}</option>`).join('');
refs.categor.innerHTML += markUpCategories; 
} catch (error) {
  console.log(error);
  }
}

// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// РЕНДЕР КАРТОК В СЕЛЕКТІ
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
async function GetCards() { 
  try {
    const seacrhresult = await APIProductSearch('', '', '', '', '', 1);
    const results = seacrhresult.results;
    console.log(results);
    FilterMarkUp(results); 
  } catch (error) {
    console.log(error);
  }
}

GetCategories();
GetCards();