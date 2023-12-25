// import { refs } from "./refs";
import { getProductById } from './APIFoodBoutique';
import { ModalMarkUP } from './ModalMArkUp';
const listCards = document.querySelector('.filter-cards');
const modalWindowId = document.getElementById('id-modal-card');
const closeModalBtn = document.querySelector('.shop-modal-close-btn');
const addCartBtn = document.querySelector('.shop-btn-card');
// const modalCard = document.querySelector('.shop-div-card');
listCards.addEventListener('click', OnClick);
async function OnClick(evt) {
    evt.preventDefault();
    const { target } = evt;
    //щоб всередині кнопки також працювало 
    const parent = target.closest('.filt-btn-card');
    if (!parent) return;
    const id = parent.dataset.idcards;
    try {
        const productInfo = await getProductById(id);
        ModalMarkUP(productInfo);
        modalWindowId.classList.remove('is-hidden-card');
    } catch (error) {
        console.log(error);
    }
}

closeModalBtn.addEventListener('click', OnCloseModal);
function OnCloseModal() {
    modalWindowId.classList.add('is-hidden-card');
}


function OnAddCart(evt) {
    const { target } = evt;
    const parent = target.closest('.shop-btn-card');
    if (!parent) return;
    const id = parent.dataset.idcards;
    OnCloseModal();
    //запишемо в локалсторедж
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
        return;
    }
    const cartList = [];
    cartList.push({ _id: id, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cartList));
    
}
addCartBtn.addEventListener('click', OnAddCart);
