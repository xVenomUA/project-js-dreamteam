
import { APLCategories } from "./APIFoodBoutique";
// import { APLProduct } from "./APIFoodSearch";
export const refsfilt = {
  filtercard: document.querySelector('.filter-cards'),
};
const refs = {
  categor: document.querySelector('.filter-categories'),
};
// GetCategories()


// async function GetCategories(){
try {
  const categResult = await APLCategories(); 
categResult.push('Show all');
const markUpCategories = categResult.map(data => `<option value="${data}">${data}</option>`).join('');
refs.categor.innerHTML += markUpCategories; 
} catch (error) {
  console.log(error);
  }
// }



// const seacrhresult = await APLProduct('', '', '', '', '', 1);
// console.log(seacrhresult);
// const results = seacrhresult.results;
// FilterMarkUp(results); 