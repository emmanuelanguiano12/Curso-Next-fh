// cookie: cart

import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookieCart = ():{[id: string]:number } => {

    if(hasCookie('cart')){
        const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}');
        return cookieCart;
    }

    return {};
}

export const addProductToCart = (id: string) => {
    const cookieCart = getCookieCart();

    if(cookieCart[id]){
        cookieCart[id] = cookieCart[id] + 1;
    } else {
        cookieCart[id] = 1;
    }

    setCookie('cart', JSON.stringify(cookieCart))
}

export const deleteProductFromCart = (id: string) => {
    const cookieCart = getCookieCart();

    // if(cookieCart[id]){
    //     cookieCart[id] = cookieCart[id] = 0;
    // }

    delete cookieCart[id]
    setCookie('cart', JSON.stringify(cookieCart))
}

export const removeSingleItemFromCart = (id: string) => {
    const cookieCart = getCookieCart(); //Tomar el carrito de las cookies

    if(!cookieCart[id]) return

    // if(cookieCart[id]){
    //     cookieCart[id] = cookieCart[id] - 1;
    // }

    const itemsInCart = cookieCart[id] - 1;
    if(itemsInCart <= 0){
        delete cookieCart[id];
    } else {
        cookieCart[id] = itemsInCart;
    }

    setCookie('cart', JSON.stringify(cookieCart))
}