const btnCart = document.querySelector(".container-icon")
const containerCartProducts = document.querySelector(".container-cart-product")
btnCart.addEventListener("click",()=>{
    containerCartProducts.classList.toggle("hidden-cart")
})