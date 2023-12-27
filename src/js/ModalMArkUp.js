import iconimg from '/img/icon.svg';
export function ModalMarkUP(productInfo) {
  const { _id, name, category, size, popularity, desc, price, img } =
    productInfo;
  const id = document.querySelector('.shop-btn-card');
  const nameCard = document.querySelector('.shop-h-name');
  const categoryCard = document.querySelector('.shop-span-category');
  const sizeCard = document.querySelector('.shop-span-size');
  const popularityCard = document.querySelector('.shop-span-popularity');
  const descCard = document.querySelector('.shop-text-discription');
  const priceCard = document.querySelector('.shop-h-price');
  const imgCard = document.querySelector('.shop-img');
  const localValue = JSON.parse(localStorage.getItem('cart'));
  let findProduct = {};
  if (localValue) {
    findProduct = localValue.find(product => product._id === _id) ?? false;
    // console.log(findProduct);
  }
  if (findProduct !== false) {
    id.innerHTML = `Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${iconimg}#icon-shop"></use>
        </svg>`;
    id.setAttribute('data-check', 'true');
    id.classList.add('shop-btn-card-active');
  } else {
    id.innerHTML = `Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${iconimg}#icon-shop"></use>
        </svg>`;
    id.setAttribute('data-check', 'false');
    id.classList.remove('shop-btn-card-active');  
  }
  id.dataset.idcards = _id;
  nameCard.textContent = name;
  categoryCard.textContent = category;
  sizeCard.textContent = size;
  popularityCard.textContent = popularity;
  descCard.textContent = desc;
  priceCard.textContent = `$${price}`;
  imgCard.src = img;
  imgCard.alt = name;

}

