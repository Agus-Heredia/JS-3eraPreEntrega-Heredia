document.addEventListener("DOMContentLoaded", () => {
    printStock();

    if (localStorage.getItem("shoppingCart")) {
        cart = getCartStorage();
        updateCart(cart);
        finalCart(cart);
    }
})