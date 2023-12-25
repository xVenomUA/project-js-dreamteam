/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Ондрій + Andrian Pohrebniak + Pasha + Валентин
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */

import { refs } from '../js/refs';
import { APIProductSearch, APICategories } from './APIFoodBoutique';
import { FilterMarkUp } from './FilterMarkUp';
const localValueChange = { keyword: null };
const localValue = { keyword: null, category: null, page: 1, limit: 6 };
// відслідковування зміни ширини вікна
window.addEventListener('resize', GetCards);

// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// РЕНДЕР КАТЕГОРІЙ В СЕЛЕКТІ
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
async function GetCategories() {
  try {
    const categResult = await APICategories();
    const markUpCategories = categResult.map(data => {
      let replacedata
      if (data.includes('_')) { 
      replacedata = data.replace(/_/g, ' '); 
      }
      else {
        replacedata = data
      }
      return `<option value="${data}">${replacedata}</option>`;
    }).join('');
    refs.categor.innerHTML += markUpCategories;
     const option = document.createElement('option');
     option.value = 'Show all';
     option.textContent = 'Show all';
     refs.categor.prepend(option);
  } catch (error) {
    console.log(error);
  }
}

// РЕНДЕР КАРТОК В СЕЛЕКТІ з врахуванням вибраних фільтрів
export async function GetCards() { 
  const limit = getLimit();
  localValue.limit = limit;
  const filtersParce = JSON.parse(localStorage.getItem('filters'));
  if(filtersParce){
  localValue.keyword = filtersParce.keyword;
  localValue.category = filtersParce.category;
  localValue.page = filtersParce.page;
  localStorage.setItem('filters', JSON.stringify(localValue));
  changeForm();
  }
  try {
    const seacrhresult = await APIProductSearch(
      localValue.keyword,
      localValue.category,
      '',
      '',
      '',
      localValue.page,
      limit
    );
    const results = seacrhresult.results;
    FilterMarkUp(results);
  } catch (error) {
    console.log(error);
  }
}
GetCategories();
GetCards();
if (refs.form) {
  refs.form.addEventListener('input', handleFiltersInput);
  refs.form.addEventListener('submit', handleFiltersSubmit);
}

// функція запису в локалсторидж при введенні тексту в INPUT
async function handleFiltersInput() {
  const filtersValue = refs.filtersInput.value;
  localValueChange.keyword = filtersValue;
  if (filtersValue === '') {
    localValueChange.keyword = null;
  }

  localStorage.setItem('keyword', JSON.stringify(localValueChange));
}

// функція запису значень ключового слова і категорії в локалсторидж при нажатті на кнопку
async function handleFiltersSubmit(evt) {
  evt.preventDefault();
  const filtersValue = refs.filtersInput.value;
  localValue.keyword = filtersValue;
  if (filtersValue === '') {
    localValue.keyword = null;
  }
  const filtersCatValue = refs.filtersCategories.value;
  localValue.category = filtersCatValue;
  if (filtersCatValue === '') {
    localValue.category = null;
  }
  if (filtersCatValue === 'Show all') {
    localValue.category = null;
  }

  localStorage.setItem('filters', JSON.stringify(localValue));
  GetCards();
  evt.target.reset();
}

// функція запису ключового слова з локал сторидж  в INPUT при перезавантаженні сторінки.
function changeForm() {
  try {
    const keywordParce = JSON.parse(localStorage.getItem('keyword'));
    if (refs.filtersInput) {
      refs.filtersInput.value = keywordParce.keyword || '';
    }
  } catch (error) {
    return;
  }
}
changeForm();

// Функція для визначення ліміту в залежності від розміру екрану
function getLimit() {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth >= 1440) {
    return 9;
  } else if (screenWidth >= 768) {
    return 8;
  } else {
    return 6; // значення за замовчуванням
  }
}
