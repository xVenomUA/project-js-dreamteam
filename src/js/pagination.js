import { refs } from './refs';
import { GetCards } from './filter';

export const ulTag = document.querySelector('.pagination-list');
const paginationFilt = document.querySelector('.pagination');
export function element(totalPages, page) {
   let liTag = '';
   let thirdPagesAnd = totalPages - 2;
   let thirdPages = page - 2;
   let curentPage = page;
    if (totalPages > 6) {
      if (page > totalPages - 3) {
        page = totalPages - 3;
        thirdPages = page - 2;
      } 
      for (let i = thirdPages; i <= page; i++) {
        if (i === curentPage) {
          liTag += `<li class="pagination-item"><button class="pagination-number back-btn-color" type="button">${i}</button></li>`;
        } else {
          liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
        }
      }
      liTag += `<li class="pagination-item dot-item"><span>...</span></li>`;
  }

  if (totalPages === 1) {
    paginationFilt.setAttribute('hidden', true);
  } else {
    paginationFilt.removeAttribute('hidden');
  }
  if (totalPages > 1 && totalPages < 7) {
    // створи кнопки з розміткою
    for (let i = 1; i <= totalPages; i++) {
      liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
    }
  } 
  ulTag.innerHTML = liTag; //add li tag inside ul tag
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
  } else {
    return;
  }
}

ulTag.addEventListener('click', loadMor);
