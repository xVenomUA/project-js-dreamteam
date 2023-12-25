// import { refs } from "./refs";
import { getProductById } from './APIFoodBoutique';
import iconimg from '/img/icon.svg';
const listCards = document.querySelector('.filter-cards');
listCards.addEventListener('click', OnClick);
const IDCards = []; 
async function OnClick(evt) {
    evt.preventDefault();
    const { target } = evt;
    //щоб всередині кнопки також працювало 
    const parent = target.closest('.filt-btn-card');
    if (!parent) return;
    const id = parent.dataset.idcards;
    try {
        const productInfo = await getProductById(id);
        console.log(productInfo);
    } catch (error) {
        console.log(error);
        
    }
} 







// const modalWindow = document.querySelector('.modal-backdrop');
// shopBtn.addEventListener('click', GetModalShop); 
// function GetModalShop(evt) {
//     evt.preventDefault();
//     modalWindow.classList.remove('is-hidden');
// }
