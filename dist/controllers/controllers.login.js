export const login = (req, res) => {
    res.render("views.login.ejs")
}
export const productos = (req, res) => {
    let datos = {}
    fetch("https://surprisebackend.onrender.com/productos")
    .then(res => res.json())
    .then(data => {
        datos = data
        res.render("views.productos.ejs", {
            producto: datos.producto })
    })
}
export const sobrenosotros = (req, res) => {
    res.render("views.sobrenosotros.ejs")
}