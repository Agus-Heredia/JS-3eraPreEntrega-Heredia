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

        toastAlert()
        cart.push(product)
        printProducts(product)
        // console.log(cart)
        updateCart(cart)

    } else {
        toastAlert()
        repeatedProduct.quantity++
        const productQuantity = document.getElementById(`quantityCart${repeatedProduct.id}`)
        productQuantity.innerText = `Cantidad: ${repeatedProduct.quantity}`
        // console.log(cart);
        updateCart(cart)


    }

};

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


const updateCart = (cart) => {
    const totalProductsOnCart = cart.reduce ((acc, item) => acc + item.quantity, 0)
    const totalPrice = cart.reduce ((acc, item) => acc + (item.price * item.quantity), 0)

    printOnCart(totalProductsOnCart, totalPrice);
    saveCartStorage(cart);
};

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

const clearCart = (cart) => {
    cart.length = 0;
    updateCart(cart);
    finalCart(cart)
};





const saveCartStorage = (cart) => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
};

const getCartStorage = () => {
    const cartSorage = JSON.parse(localStorage.getItem("shoppingCart"))
    return cartSorage

};


const toastAlert = () => {
    
        Toastify({

            text: "Agregaste tu producto correctamente!",
            duration: 2000,
            style: {
                background: "#3CB371" 
            },
            offset: {
                x: "800",
                y: 7
              },
            
        }).showToast();

};