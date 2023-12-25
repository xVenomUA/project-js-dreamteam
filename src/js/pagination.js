/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Natalia
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */
// import { refs } from '../main';

async function getData() {
  const response = await fetch('https://food-boutique.b.goit.study/api/products?keyword=Ac&category=Fresh_Produce&page=1&limit=1');
  const data = await response.json();
  return data;
}

async function main() {
  let currentPage = 1;
  let rows = 6;
  const postsData = await getData();

  function displayList(arrData, rowPerPage, page) {
    const postsEl = document.querySelector('.posts');
    postsEl.innerHTML = "";
    page--;

    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);

    paginatedData.forEach((el) => {
      const postEl = document.createElement("div");
      postEl.classList.add("post");
      postEl.innerText = `${el.title}`;
      postsEl.appendChild(postEl);
    });
  }

  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector('.pagination');
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulEl = document.createElement("ul");
    ulEl.classList.add('pagination-list');

    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl);
    }
    paginationEl.innerHTML = "";
    paginationEl.appendChild(ulEl);
  }

  function displayPaginationBtn(page) {
    const liEl = document.createElement("li");
    liEl.classList.add('pagination-item');
    liEl.innerText = page;

    if (currentPage == page) liEl.classList.add('pagination-item--active');

    liEl.addEventListener('click', () => {
      currentPage = page;
      displayList(postsData.results, rows, currentPage); // Pass data.results
      let currentItemLi = document.querySelector('li.pagination-item--active');
      currentItemLi.classList.remove('pagination-item--active');
      liEl.classList.add('pagination-item--active');
    });

    return liEl;
  }

  displayList(postsData.results, rows, currentPage); // Pass data.results
  displayPagination(postsData.results, rows); // Pass data.results
}

main();





// async function getData() {
//     const response = await fetch('https://food-boutique.b.goit.study/api/products?keyword=Ac&category=Fresh_Produce&page=1&limit=1');
//     const data = await response.json();
//     return data;
//   }
  
//   async function main() {
//     const postsData = await getData();
//     let currentPage = 1;
//     let rows = 6;
  
//     function displayList(arrData, rowPerPage, page) {
//       const postsEl = document.querySelector('.posts');
//       postsEl.innerHTML = "";
//       page--;
  
//       const start = rowPerPage * page;
//       const end = start + rowPerPage;
//       const paginatedData = arrData.slice(start, end);
  
//       paginatedData.forEach((el) => {
//         const postEl = document.createElement("div");
//         postEl.classList.add("post");
//         postEl.innerText = `${el.title}`;
//         postsEl.appendChild(postEl);
//       });
//     }
  
//     function displayPagination(arrData, rowPerPage) {
//       const paginationEl = document.querySelector('.pagination');
//       const pagesCount = Math.ceil(arrData.length / rowPerPage);
//       const ulEl = document.createElement("ul");
//       ulEl.classList.add('pagination__list');
  
//       for (let i = 0; i < pagesCount; i++) {
//         const liEl = displayPaginationBtn(i + 1);
//         ulEl.appendChild(liEl);
//       }
//       paginationEl.appendChild(ulEl);
//     }
  
//     function displayPaginationBtn(page) {
//       const liEl = document.createElement("li");
//       liEl.classList.add('pagination__item');
//       liEl.innerText = page;
  
//       if (currentPage == page) liEl.classList.add('pagination__item--active');
  
//       liEl.addEventListener('click', () => {
//         currentPage = page;
//         displayList(postsData.results, rows, currentPage); // Pass data.results
//         let currentItemLi = document.querySelector('li.pagination__item--active');
//         currentItemLi.classList.remove('pagination__item--active');
//         liEl.classList.add('pagination__item--active');
//       });
  
//       return liEl;
//     }
  
//     displayList(postsData.results, rows, currentPage); // Pass data.results
//     displayPagination(postsData.results, rows); // Pass data.results
//   }
  
//   main();

  