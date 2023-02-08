//Declaramos "cart" como un array que empieza vacío
let cart = [];


const containerListener = document.querySelector("#cards-container")
containerListener.addEventListener("click", (e) => {

    if (e.target.classList.contains("addToCart")) {
        validateProduct(e.target.id)
    }
});


//Función que valida los productos que intenemos agregar al carrito
const validateProduct = (productId) => {
    const repeatedProduct = cart.find(product => product.id == productId)

    if (!repeatedProduct) {
        const product = products.find(product => product.id == productId)

        swAlert()
        cart.push(product)
        printProducts(product)
        updateCart(cart)

    } else {

        swAlert()
        repeatedProduct.quantity++
        const productQuantity = document.getElementById(`quantityCart${repeatedProduct.id}`)
        productQuantity.innerText = `Cantidad: ${repeatedProduct.quantity}`
        updateCart(cart)

    }

};


//Función que pinta los productos en el carrito
const printProducts = (product) => {
    const container = document.getElementById("cartContainer")
    const div = document.createElement("div")
    div.classList.add("cartContent")
    div.innerHTML = `
    <p><i><strong>${product.name}</strong></i></p> 
    <p>Precio: USD $${product.price}</p> 
    <p id=quantityCart${product.id}>Cantidad: ${product.quantity}</p>
    <button type="button" class="btn deleteBtn btn-outline-danger" value=${product.id}>X</button>
    `
    container.appendChild(div);
};


//Ésta función nos muestra la cantidad de cada productos en el carrito y el precio total de la compra actualizado de forma instantánea
const updateCart = (cart) => {
    const totalProductsOnCart = cart.reduce ((acc, item) => acc + item.quantity, 0)
    const totalPrice = cart.reduce ((acc, item) => acc + (item.price * item.quantity), 0)

    printOnCart(totalProductsOnCart, totalPrice);
    saveCartStorage(cart);
};


//Función que modifica el número que se encuentra al lado del icono del carrito y tambien el precio total dentro del modal
const printOnCart = (totalProductsOnCart, totalPrice) => {
    const cartCounter = document.querySelector("#cartNumber")
    const totalCartPrice = document.querySelector("#totalPrice")

    cartCounter.innerText = totalProductsOnCart;
    totalCartPrice.innerText = totalPrice;
};



const deleteProduct = (productId) => {
    const productIndex = cart.findIndex(product => product.id == productId)
    cart.splice(productIndex, 1)
    finalCart(cart);
    updateCart(cart);
};


const finalCart = (cart) => {
    const container = document.getElementById("cartContainer")
    container.innerHTML = "";

    cart.forEach(product => {
    const div = document.createElement("div")
    div.classList.add("cartContent")
    div.innerHTML = `
    <p><i><strong>${product.name}</strong></i></p> 
    <p>Precio: $${product.price}</p> 
    <p id=quantityCart${product.id}>Cantidad: ${product.quantity}</p>
    <button type="button" class="btn deleteBtn btn-outline-danger" value=${product.id}>X</button>
    `
    container.appendChild(div)
    });

};


//Función para vaciar el carrito y validarlo, así poder mostrar una alerta de éxito al vaciarlo o una de error en caso de que el carrito se encuentre vacío
const clearCart = (cart) => {
    
    if (cart.length != 0) {
        cart.length = 0;
        swCartCleared();
        updateCart(cart);
        finalCart(cart);
    } else {
        swCartError();
    }

};


const saveCartStorage = (cart) => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
};


const getCartStorage = () => {
    const cartSorage = JSON.parse(localStorage.getItem("shoppingCart"))
    return cartSorage

};
