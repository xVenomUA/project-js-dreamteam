
import { getProductById } from './APIFoodBoutique';
import { ModalMarkUP } from './ModalMArkUp';
import { GetCards } from './filter';
import { onChangeCount } from './headerFunctionCount';
import { getRenderPopularCard } from './popular';
import { refs } from './refs';
const closeModalBtn = document.querySelector('.shop-modal-close-btn');

// const modalCard = document.querySelector('.shop-div-card');
refs.listCards.addEventListener('click', OnClick);
// ВІДКРИТИ МОДАЛЬНЕ ВІКНО
async function OnClick(evt) {
    evt.preventDefault();
    const { target } = evt;
    //щоб всередині кнопки також працювало 
    const parent = target.closest('.filt-div-card');
    if (!parent) return;
    const block = target.closest('.filt-btn-card');
    if (block) return;
    const id = parent.dataset.idcarts;
    try {
        const productInfo = await getProductById(id);
        ModalMarkUP(productInfo);
        refs.modalWindowId.classList.remove('is-hidden-card');
    } catch (error) {
        console.log(error);
    }
}

closeModalBtn.addEventListener('click', OnCloseModal);
export function OnCloseModal() {
    refs.modalWindowId.classList.add('is-hidden-card');
    
}

//ДЛЯ КНОПКИ ДОДАТИ В КОШИК
function OnAddCart(evt) {
    const { target } = evt;
    const parent = target.closest('.shop-btn-card');
    GetCards();
    getRenderPopularCard();
    if (!parent) return;
    const id = parent.dataset.idcards;
    const dataCheck = parent.dataset.check;
    console.log(dataCheck);
    OnCloseModal();
    const cart = localStorage.getItem('cart');
    const parseCart = JSON.parse(cart);
    if (dataCheck === 'false') { 
        if (parseCart) {
          const findProduct = parseCart.find(product => product._id === id);
          if (findProduct) {
            findProduct.quantity += 1;
            localStorage.setItem('cart', JSON.stringify(parseCart));
            return;
          }
          parseCart.push({ _id: id, quantity: 1 });
          localStorage.setItem('cart', JSON.stringify(parseCart));
          onChangeCount();
          return;
        }
        const cartList = [];
        cartList.push({ _id: id, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cartList));
        onChangeCount();
    } else {
        if (parseCart) {
            const findProduct = parseCart.find(product => product._id === id);
            if (findProduct) {
                    const cartList = parseCart.filter(product => product._id !== id);
                    localStorage.setItem('cart', JSON.stringify(cartList));
                    onChangeCount();
                return;
            }
        }
    }
    
}
refs.addCartBtn.addEventListener('click', OnAddCart);

