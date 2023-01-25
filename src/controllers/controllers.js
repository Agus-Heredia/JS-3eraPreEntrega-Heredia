const stockController = async () => {
    const resp = await fetch("./src/data/stock.json")
    const data = await resp.json()
    return data

    }; 

stockController()
