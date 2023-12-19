import SlimSelect from "slim-select";
import { APLCategories } from "./APIFoodBoutique";
import { APLProduct } from "./APIFoodSearch";
import { FilterMarkUp } from "./FilterMarkUp";
FilterMarkUp
export const refsfilt = {
  filtercard: document.querySelector('.filter-cards'),
};
const categResult = await APLCategories(); 
categResult.push('Show all');
const refs = {
  categor: document.querySelector('.filter-categories'),
};
const markUpCategories = categResult.map(data => `<option value="${data}">${data}</option>`).join('');
refs.categor.innerHTML += markUpCategories; 
const seacrhresult = await APLProduct('', '', '', '', '', 1);
console.log(seacrhresult);
const results = seacrhresult.results;
FilterMarkUp(results); 