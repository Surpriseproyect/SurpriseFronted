const menu = document.querySelector(".menu");
const showcase = document.querySelector(".showcase");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    showcase.classList.toggle("active");
})

function abrir(){
    let ventana = document.getElementById("info")
    ventana.style.display = "flex"
}

function cerrar(){
    let ventana = document.getElementById("info")
    if (event.target.id === "info") {
        ventana.style.display = "none";
    }
}