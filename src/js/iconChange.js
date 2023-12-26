import { refs } from "./refs";


function checkAndChangeIcons() {
    const cart = localStorage.getItem('cart');
    const parseCart = JSON.parse(cart);
    console.log(parseCart);
    if (!parseCart) return;
    if (parseCart.length === 0) return;

    // popular products
    const popularProducts = document.querySelectorAll('.popular');
    
}
checkAndChangeIcons();