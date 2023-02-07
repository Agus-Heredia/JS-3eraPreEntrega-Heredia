const cartModal = document.querySelector("#cartContainer")
const clearModal = document.querySelector(".clearCartBtn")

cartModal.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target.classList.contains("deleteBtn")) {
        deleteProduct(e.target.value);
    }
})

clearModal.addEventListener("click", (e) => {
    clearCart(cart);
})