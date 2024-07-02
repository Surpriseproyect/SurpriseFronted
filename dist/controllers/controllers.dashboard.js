export const dashboard = (req, res) => {
    let datos = {}
    fetch("https://surprisebackend.onrender.com/dashboard")
    .then(res => res.json())
    .then(data => {
        datos = data
        res.render("views.dashboard.ejs", {
            usuarios: datos.usuarios, 
            producto: datos.producto,
            fiado: datos.fiado,
            factura: datos.factura,
            pedido: datos.pedido,
            metopago: datos.metopago,
            proveedor: datos.proveedor,
            ventas: datos.ventas,
            total: datos.total,
            pedidos: datos.pedidos })
    })
}