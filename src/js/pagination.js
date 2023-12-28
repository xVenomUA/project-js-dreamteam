import { refs } from './refs';
import { GetCards } from './filter';

export const ulTag = document.querySelector('.pagination-list');
const paginationFilt = document.querySelector('.pagination');
const lastTOtalpage = document.querySelector('.last-total-page');
const firstTotalPage = document.querySelector('.pag-first-page');
const prewBtn = document.querySelector('.prew-button');
const nextBtn = document.querySelector('.next-button');

export function element(totalPages, page) {
    let liTag = '';
    let thirdPagesAnd = totalPages - 2;
    let thirdPages = page - 2;
    let curentPage = page;
  lastTOtalpage.textContent = totalPages;
  if (totalPages === 1) {
    paginationFilt.style = 'display: none';
  } else {
    paginationFilt.style = 'display: flex';
  }
  if (page == 1) {
    prewBtn.setAttribute('disabled', true);
  } else {
    prewBtn.removeAttribute('disabled');
  }
  if (page == totalPages) {
    nextBtn.setAttribute('disabled', true);
  } else {
    nextBtn.removeAttribute('disabled');
  }

  if (totalPages > 6) {
      if (page > totalPages - 4) {
        page = totalPages - 4;
      }
      page === 1 ? (page = page + 1) : null;
      for (let i = page - 1; i <= page + 1; i++) {
        if (i == curentPage) {
          liTag += `<li class="pagination-item"><button class="pagination-number active" type="button">${i}</button></li>`;
        } else {
          liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
        }
      }
      liTag += `<li class="pagination-item dot-item"><span>...</span></li>`;
      for (let i = thirdPagesAnd; i <= totalPages; i++) {
        if (i == curentPage) {
          liTag += `<li class="pagination-item"><button class="pagination-number active" type="button">${i}</button></li>`;
        } else {
          liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
        }
      }
  } 
    ulTag.innerHTML = liTag;
  if (totalPages > 1 && totalPages < 7) {
    firstTotalPage.style = 'display: none';
    lastTOtalpage.style = 'display: none';
    for (let i = 1; i <= totalPages; i++) {
      liTag += `<li class="pagination-item"><button class="pagination-number" type="button">${i}</button></li>`;
    }
  } else {
    firstTotalPage.style = 'display: block';
    lastTOtalpage.style = 'display: block';
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
    filtersParce.page = parseInt(page);
    localStorage.setItem('filters', JSON.stringify(filtersParce));
    GetCards();
  } else {
    return;
  }
}
async function prewList(event) {
  const filtersParce = JSON.parse(localStorage.getItem('filters'));
   const totalP = filtersParce.totalPages;
  filtersParce.page = filtersParce.page - 1;
  localStorage.setItem('filters', JSON.stringify(filtersParce));
  GetCards();
}
async function nextList(event) {
  const filtersParce = JSON.parse(localStorage.getItem('filters'));
  const totalP = filtersParce.totalPages;
  filtersParce.page = Number(filtersParce.page)+ 1;
  localStorage.setItem('filters', JSON.stringify(filtersParce));
  GetCards();
}

async function firstPage(event) {
  const filtersParce = JSON.parse(localStorage.getItem('filters'));
  filtersParce.page = 1;
  localStorage.setItem('filters', JSON.stringify(filtersParce));
  GetCards();
}
async function lastPage(event) {
  const filtersParce = JSON.parse(localStorage.getItem('filters'));
  filtersParce.page = lastTOtalpage.textContent;
  localStorage.setItem('filters', JSON.stringify(filtersParce));
  GetCards();
}
ulTag.addEventListener('click', loadMor);

prewBtn.addEventListener('click', prewList);
nextBtn.addEventListener('click', nextList);

firstTotalPage.addEventListener('click', firstPage);
lastTOtalpage.addEventListener('click', lastPage);