//Pintamos el DOM con el stock guardado en un array de objetos, obtenido mediante una función asincrónica y Fetch, de la carpeta local creada en formato JSON
const printStock = async () => {
    const container = document.getElementById("cards-container")

    const controllerData = await stockController()

    controllerData.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML += `
                            <img src="${product.img}" class="card-img-top img-fluid" style="height: 17em; width: 16em;">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                                <p>USD $${product.price}</p>
                                <a id=${product.id} class="btn btn-cart btn-primary addToCart">Agregar al carrito</a>
                            </div>
                         `

        container.appendChild(div)

    })
};


