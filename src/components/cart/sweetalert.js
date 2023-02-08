//Creamos las funciónes que mostrarán las alertas de SweetAlert Js correspondientes a cada ocasión



//Al agregar un popducto al carrito de manera correcta
const swAlert = () => {

    Swal.fire({
    position: 'top',
    icon: 'success',
    title: '<p class="swalert-body">¡Producto agregado correctamente!</p>',
    showConfirmButton: false,
    timer: 1000,
    width: "400px",
    background: "#333"
          
})

};


//Avisando que el carrito fué vaciado con éxito
const swCartCleared = () => {

        Swal.fire({
        position: 'center',
        icon: 'success',
        title: '<p class="swalert-body">Carrito vaciado con éxito</p>',
        showConfirmButton: false,
        timer: 1500,
        width: "300px",
        background: "#333"
        
    })
    
};


//Alert para avisar que el carrito ya se encuentra vacío
const swCartError = () => {

    Swal.fire({
        position: 'center',
        icon: 'error',
        title: '<p class="swalert-body">Su carrito ya se encuentra vacío</p>',
        showConfirmButton: false,
        timer: 1500,
        width: "300px",
        background: "#333"
        
    })
};