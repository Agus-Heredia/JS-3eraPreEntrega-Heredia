const toastAlert = document.querySelector(".addToCart")

toastAlert.addEventListener("click", () => {
    Toastify({

        text: "This is a toast",
        
        duration: 3000
        
        }).showToast();
})