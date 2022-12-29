let cart = [];

const containerListener = document.querySelector("#cards-container")

containerListener.addEventListener("click", (e) => {

    if (e.target.classList.contains("addToCart")) {
        validateProduct(e.target.id)
    }
});

const validateProduct = (productId) => {
    const repeatedProduct = cart.find(product => product.id == productId)

    if (!repeatedProduct) {
        const product = products.find(product => product.id == productId)

        cart.push(product)
        printProducts(product)
        saveCartStorage(cart)
        // console.log(cart)

    } else {
        repeatedProduct.quantity++
    }

};

const printProducts = (product) => {
    const container = document.getElementById("cartContainer")
    const div = document.createElement("div")
    div.classList.add("cartContent")
    div.innerHTML = `
    <p><i> ${product.name}</i></p> 
    <p>Precio: $<strong>${product.price}</strong></p> 
    <p>Cantidad:${product.quantity}</p>
    `
    container.appendChild(div)
    saveCartStorage(cart)
};

const saveCartStorage = (cart) => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart) )
};

const getCartStorage = () => {
    const cartSorage = JSON.parse(localStorage.getItem("shoppingCart"))
    return cartSorage

};
