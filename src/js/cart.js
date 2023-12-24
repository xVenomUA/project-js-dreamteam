/* <!-- ₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
    Ivan || Yulia 
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴
₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴₴ --> */
import { refs } from '../main';

import yellowBasket from '../img/yellowBasket.png';
import yellowBasket2x from '../img/yellowBasket2x.png' 

export const cartMarkupEmpty =
    `<div class="cart-empty-basket">
    <picture>
    <source class="cart-basket-img"
     srcset="${yellowBasket} 1x, ${yellowBasket2x} 2x />
     <img  src="${yellowBasket}"
     class="cart-basket-img"
     alt="yellow basket"
     loading="lazy" />
    </picture>
    <div class="cart-empty-desc">
    <ul class="cart-desc-ul">
        <li>
        <p>
        Your basket is <a href="../index.html" class="cart-link">empty...</a>
        </p>
        </li>
        <li>
        <p class="cart-gray-text">
        Go to the main page to select your favorite products and add them to the cart.
        </p>
        </li>
        </ul>
        </div>             
`

