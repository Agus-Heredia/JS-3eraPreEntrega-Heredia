const cartModal = document.querySelector("#cartContainer")

cartModal.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target.classList.contains("deleteBtn")) {
        deleteProduct(e.target.value);
    }
})