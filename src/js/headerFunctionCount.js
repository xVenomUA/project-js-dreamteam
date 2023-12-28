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

export function OnSaveLocaleValue(){ 
    const localValue = { keyword: null, category: null, page: 1, limit: 6 };
    localStorage.setItem('filters', JSON.stringify(localValue));

};