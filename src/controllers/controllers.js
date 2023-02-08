//Declaramos la funcion asíncrona que nos permite obtener los productos del archivo "stock.json"
const stockController = async () => {
    const resp = await fetch("./src/data/stock.json")
    const data = await resp.json()
    return data

    }; 

stockController();
