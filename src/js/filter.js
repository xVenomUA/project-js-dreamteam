import throttle from 'lodash.throttle';
import { refs } from '../js/refs';
import { APIProductSearch, APICategories } from './APIFoodBoutique';
import { FilterMarkUp } from './FilterMarkUp';
import { onChangeCount } from './headerFunctionCount';
import iconimg from '/img/icon.svg';
import { element } from './pagination';
import { getRenderPopularCard } from './popular';
import { updateAllProductIcons } from './FilterMarkUp';
const localValueChange = { keyword: null };
const localValue = {
  keyword: null,
  category: null,
  page: 1,
  limit: getLimit(),
};
const select = document.querySelector('.filter-categories');
if (!localStorage.getItem('filters')) {
  localStorage.setItem('filters', JSON.stringify(localValue));
}
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// відслідковування зміни ширини вікна
window.addEventListener('resize', throttle(GetCards, 1000));
let totalPageSSS = 0;
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// РЕНДЕР КАТЕГОРІЙ В СЕЛЕКТІ
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
// ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
async function GetCategories() {
  try {
    const categResult = await APICategories();
    const markUpCategories = categResult
      .map(data => {
        let replacedata;
        if (data.includes('_')) {
          replacedata = data.replace(/_/g, ' ');
        } else {
          replacedata = data;
        }
        return `<li role="option">
        <label value="${data}">${replacedata}</label>
      </li>`;
      })
      .join('');
    refs.categor.innerHTML += markUpCategories;
    const elShowall = `<li role="option"><label value="Show all">Show all</label></li>`;
    refs.categor.insertAdjacentHTML('afterbegin', elShowall);
  } catch (error) {
    console.log(error);
  }
}

// eeeee

const customSelect = document.querySelector('.custom-select');
const selectBtn = document.querySelector('.select-button');

const selectedValue = document.querySelector('.selected-value');
const optionsList = document.querySelector('.select-dropdown');

// add click event to select button
selectBtn.addEventListener('click', (e) => {
  // add/remove active class on the container element
  customSelect.classList.toggle('active');
  // update the aria-expanded attribute based on the current state
  selectBtn.setAttribute(
    'aria-expanded',
    selectBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
  );

  const parent = e.target.closest('.select-button');
  const spanValue = parent.querySelector('.selected-value').textContent;
  const selectDropdown = document.querySelectorAll('.select-dropdown li label');
  selectDropdown.forEach((el) => {
    if (el.textContent == spanValue || (el.textContent == 'Show all' && spanValue == 'Categories')) {
      el.classList.add('selectedCat');
    } else {
      el.classList.remove('selectedCat');
    }
  });
});

optionsList.addEventListener('click', e => {
  if (e.target.tagName === 'LABEL' || e.target.tagName === 'INPUT') {
    selectedValue.textContent = e.target.textContent;
    selectedValue.value = e.target.getAttribute('value');
    customSelect.classList.remove('active');
  }
});

// РЕНДЕР КАРТОК В СЕЛЕКТІ з врахуванням вибраних фільтрів
export async function GetCards() {
  const limit = getLimit();
  localValue.limit = limit;
  const filtersParce = JSON.parse(localStorage.getItem('filters'));
  if (filtersParce) {
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
    localStorage.setItem('totalPage', JSON.stringify(seacrhresult.totalPages));
    const results = seacrhresult.results;
    totalPageSSS = seacrhresult.totalPages; //загальна кількість сторінок
    element(totalPageSSS, localValue.page); // рендер пагінації;
    //записуємо все в локал сторедж
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
  const filtersCatValue = document.querySelector('.selected-value').value;
  localValue.category = filtersCatValue;
  if (filtersCatValue === '') {
    localValue.category = null;
  }
  if (filtersCatValue === 'Show all') {
    localValue.category = null;
  }
  localValue.page = 1;
  localStorage.setItem('filters', JSON.stringify(localValue));
  GetCards();
  evt.target.reset();
}

// функція запису ключового слова з локал сторидж  в INPUT при перезавантаженні сторінки.
function changeForm() {
  try {
    const filtersCatValue = document.querySelector('.selected-value');
    const filtersCatValueParce = JSON.parse(localStorage.getItem('filters'));
    if(filtersCatValueParce.category !== null){
      const filtervalue = filtersCatValueParce.category.replace(/_/g, ' ');
      filtersCatValue.textContent = filtervalue;
      filtersCatValue.value = filtersCatValueParce.category;
    }
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

function OnAddCartShop(evt) {
  getRenderPopularCard();
  const { target } = evt;
  const parent = target.closest('.filt-btn-card');
  if (!parent) return;
  const useSvg = parent.querySelector('.filt-use');
  useSvg.setAttribute('href', `${iconimg}#icon-check`);
  parent.setAttribute('disabled', 'true');
  const id = parent.dataset.idcards;
  const cart = localStorage.getItem('cart');
  const parseCart = JSON.parse(cart);
  if (parseCart) {
    const findProduct = parseCart.find(product => product._id === id);
    if (findProduct) {
      findProduct.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(parseCart));
      return;
    }
    parseCart.push({ _id: id, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(parseCart));
    updateAllProductIcons(id, `${iconimg}#icon-check`);
    onChangeCount();
    return;
  }
  if (!parseCart) {
    const cartList = [];
    cartList.push({ _id: id, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cartList));
    onChangeCount();
  }
}
refs.listCards.addEventListener('click', OnAddCartShop);

function change() {
  const filtersCatValue = document.querySelector('.selected-value').value;
  localValue.category = filtersCatValue;
  localValue.page = 1;
  if (filtersCatValue === '') {
    localValue.category = null;
  }
  if (filtersCatValue === 'Show all') {
    localValue.category = null;
  }

  localStorage.setItem('filters', JSON.stringify(localValue));
  GetCards();
}
const onChange = document.querySelector('.select-dropdown');
onChange.addEventListener('click', change);
