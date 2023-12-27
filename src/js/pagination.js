import { refs } from './refs';
import { GetCards } from './filter';

export const ulTag = document.querySelector('.pagination-list');
export const totalPage = JSON.parse(localStorage.getItem('totalPage'));
export const page = JSON.parse(localStorage.getItem('filters')).page;
const paginationFilt = document.querySelector('.pagination');
export function element(totalPages, page) {
  let liTag = '';
  let thirdPagesAnd = totalPages - 2;
  let thirdPages = page - 2;
  let curentPage = page;
  if (totalPages < 5) {
    for (let i = 1; i <= totalPages; i++) {
      liTag += `<li class="pagination-item"><button class="pagination-number ${
        i === curentPage ? 'active' : ''
      }">${i}</button></li>`;
    }
  } else {
    if (page > 3) {
      for (let i = thirdPages; i <= thirdPagesAnd; i++) {
        liTag += `<li class="pagination-item"><button class="pagination-number ${
          i === curentPage ? 'active' : ''
        }">${i}</button></li>`;
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        liTag += `<li class="pagination-item"><button class="pagination-number ${
          i === curentPage ? 'active' : ''
        }">${i}</button></li>`;
      }
    }
  }
  ulTag.innerHTML = liTag;
}
// =============================================================================
// =============================================================================
// =============================================================================
//взяти тотал пейдж з локал сторедж

async function loadMor(event) {
  if (
    event.target.classList.contains('pagination-arrow') ||
    event.target.classList.contains('pagination-number')
  ) {
    const page = event.target.textContent;
    const filtersParce = JSON.parse(localStorage.getItem('filters'));
    filtersParce.page = page;
    localStorage.setItem('filters', JSON.stringify(filtersParce));
    GetCards();
    element(totalPage, page);
  } else {
    return;
  }
}

ulTag.addEventListener('click', loadMor);
