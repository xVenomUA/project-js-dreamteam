import { refs } from "./refs";

export function onChangeCount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
        refs.countHeader.textContent = `(${cart.length})`;
    } else {
        refs.countHeader.textContent = `(0)`;
    }
}
onChangeCount();