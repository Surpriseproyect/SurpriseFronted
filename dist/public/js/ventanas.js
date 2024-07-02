// Editar usuario
let editar1 = document.querySelectorAll(".editarUsuario");

editar1.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const usuarioLista = e.target.closest(".user-list-item");
        if (!usuarioLista) {
            console.log("User list item not found.");
            return;
        }

        const idElement = usuarioLista.querySelector(".id");
        if (!idElement) {
            console.log("ID element not found.");
            return;
        }
        const id = idElement.innerHTML.trim();
        console.log("Producto ID:", id);

        const identificacion = document.querySelector(".identificacionEdit");
        const nombres = document.querySelector(".nombreEdit");
        const telefono = document.querySelector(".telefonoEdit");
        const correo = document.querySelector(".correoEdit");
        const contrasena = document.querySelector(".contrasenaEdit");
        const rol = document.querySelector(".select");
        const estado = document.querySelector(".estado1");


        if (!identificacion || !nombres || !telefono || !correo || !contrasena || !rol || !estado) {
            console.log("One or more input elements not found.");
            return;
        }

        console.log("Fetching user data...");
        fetch(`http://localhost:3000/usuario/${id}`)
            .then(response => {
                console.log("Response received:", response);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(usuarioEncontrado => {
                console.log("User data found:", usuarioEncontrado);
                if (usuarioEncontrado.length > 0) {
                    const usuario = usuarioEncontrado[0];
                    identificacion.value = usuario.identificacion || '';
                    nombres.value = usuario.nombres || '';
                    telefono.value = usuario.telefono || '';
                    correo.value = usuario.correo || '';
                    contrasena.value = usuario.contrasena || '';
                    rol.value = usuario.rol || '';
                    estado.value = usuario.estado || '';

                    editarUsuario();
                } else {
                    console.log("No user found with the given ID.");
                }
            })
            .catch(error => console.error("Fetch error:", error));
            document.getElementById("confirmarBtn").addEventListener("click", (e) => {
                e.preventDefault();
            
                const identificacion = document.querySelector(".identificacionEdit").value;
                const nombres = document.querySelector(".nombreEdit").value;
                const telefono = document.querySelector(".telefonoEdit").value;
                const correo = document.querySelector(".correoEdit").value;
                const contrasena = document.querySelector(".contrasenaEdit").value;
                const rol = document.querySelector(".select").value;
                const estado = document.querySelector(".estado1").value;
            
                const datosProducto = {
                    identificacion: identificacion,
                    nombres: nombres,
                    telefono: telefono,
                    correo: correo,
                    contrasena: contrasena,
                    rol: rol,
                    estado: estado
                };
                fetch(`http://localhost:3000/usuario/usuario/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datosProducto)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Usuario actualizado:", data);
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                });
            location.reload()
            });
    });
});

// Crear Usuarios

document.getElementById("crearUsuario").addEventListener("click", (e) => {
    e.preventDefault();

    const identificacion = document.querySelector(".identificacionCrear").value;
    const nombres = document.querySelector(".nombreCrear").value;
    const telefono = document.querySelector(".telefonoCrear").value;
    const correo = document.querySelector(".correoCrear").value;
    const contrasena = document.querySelector(".contrasenaCrear").value;
    const rol = document.querySelector(".selectCrear").value;
    const estado = document.querySelector(".estado1Crear").value;

    const datosProducto = {
        identificacion: identificacion,
        nombres: nombres,
        telefono: telefono,
        correo: correo,
        contrasena: contrasena,
        rol: rol,
        estado: estado
    };
    fetch(`http://localhost:3000/usuario/usuario`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosProducto)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Producto agregado:", data);
        ocultarC();
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
});

// Eliminar Usuarios
let elimina = document.querySelectorAll(".eliminarUsuario")
elimina.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let ventana = document.getElementById("eliminar");
        ventana.style.display = "flex";
        let usuario = e.target.closest(".user-list-item");
        let nombre = usuario.querySelector(".nombre").innerHTML;
        let aceptar = document.querySelector(".aceptar");
        let textoVentana = document.querySelector(".texto")
        textoVentana.innerHTML = `¿Seguro que quieres eliminar la cuenta de ${nombre}?`
        let id = usuario.querySelector(".id").innerHTML
        aceptar.addEventListener("click", () => {
        fetch(`http://localhost:3000/usuario/usuario/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.ok) {
                usuario.remove();
                ventana.style.display= "none"
            } 
        })
        .catch(error => console.log(error))
        })
        console.log(usuario);
    })
})

// Editar producto
let editar2 = document.querySelectorAll(".editarProducto");

editar2.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const productoLista = e.target.closest(".user-list-item");
        if (!productoLista) {
            console.log("User list item not found.");
            return;
        }

        const idElement = productoLista.querySelector(".id");
        if (!idElement) {
            console.log("ID element not found.");
            return;
        }
        const id = idElement.innerHTML.trim();
        console.log("Producto ID:", id);

        const producto = document.querySelector(".productoEdit");
        const categoria = document.querySelector(".categoriaEdit");
        const precio = document.querySelector(".precioEdit");
        const imagen = document.querySelector(".urlEdit");
        const descripcion = document.querySelector(".descripcionEdit");
        const stock = document.querySelector(".stockEdit");
        if (!producto || !categoria || !precio || !descripcion || !imagen || !stock) {
            console.log("One or more input elements not found.");
            return;
        }
        console.log("Fetching user data...");
        fetch(`http://localhost:3000/producto/producto/${id}`)
            .then(response => {
                console.log("Response received:", response);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(productoEncontrado => {
                console.log("User data found:", productoEncontrado);
                if (productoEncontrado.length > 0) {
                    const productos = productoEncontrado[0][0];
                    producto.value = productos.producto || '';
                    categoria.value = productos.categoria || '';
                    precio.value = productos.preciou || '';
                    descripcion.value = productos.descripcion || '';
                    imagen.value = productos.imagen || '';
                    stock.value = productos.stock || '';
                    
                    editarProducto();
                } else {
                    console.log("No user found with the given ID.");
                }
            })
            .catch(error => console.error("Fetch error:", error));
            document.getElementById("confirmarBtnn").addEventListener("click", (e) => {
                e.preventDefault();
            
                const producto = document.querySelector(".productoEdit").value;
                const categoria = document.querySelector(".categoriaEdit").value;
                const precio = document.querySelector(".precioEdit").value;
                const descripcion = document.querySelector(".descripcionEdit").value;
                const imagen = document.querySelector(".urlEdit").value;
                const stock = document.querySelector(".stockEdit").value;
            
                const datosProducto = {
                    producto: producto,
                    categoria: categoria,
                    preciou: precio,
                    descripcion: descripcion,
                    imagen: imagen,
                    stock: stock
                };
                fetch(`http://localhost:3000/producto/producto/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datosProducto)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Producto actualizado:", data);
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                });
            location.reload()
            });
    });
});

// Crear producto
document.getElementById("crearProducto").addEventListener("click", (e) => {
    e.preventDefault();

    const producto = document.querySelector(".productoCrear").value;
    const categoria = document.querySelector(".categoriaCrear").value;
    const precio = document.querySelector(".precioCrear").value;
    const descripcion = document.querySelector(".descripcionCrear").value;
    const imagen = document.querySelector(".urlCrear").value;
    const stock = document.querySelector(".stockCrear").value;

    const datosProducto = {
        producto: producto,
        categoria: categoria,
        preciou: precio,
        descripcion: descripcion,
        imagen: imagen,
        stock: stock
    };
    fetch(`http://localhost:3000/producto/producto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosProducto)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Producto agregado:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
    location.reload()
});

// Eliminar producto
let eliminarProducto = document.querySelectorAll(".eliminarProducto")
eliminarProducto.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let ventana = document.getElementById("eliminar")
        ventana.style.display = "flex"
        let producto = e.target.closest(".user-list-item")
        let nombre = producto.querySelector(".nombreP").innerHTML;
        let aceptar = document.querySelector(".aceptar");
        let textoVentana = document.querySelector(".texto")
        let cancelar = ventana.querySelector(".cancelar")
        cancelar.addEventListener("click", () => {
            location.reload()
        })
        textoVentana.innerHTML = `¿Seguro que quieres eliminar el producto ${nombre}?`
        let id = producto.querySelector(".id").innerHTML
        aceptar.addEventListener("click", () => {
        fetch(`http://localhost:3000/producto/producto/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.ok) {
                producto.remove();
                ventana.style.display= "none"
            } 
        })
        .catch(error => console.log(error))
        })
        console.log(producto);
    })
})

//Actualizar estado factura
let pagado = document.querySelectorAll(".pagado");
pagado.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let estado = e.target.closest(".user-list-item");
        let id = estado.querySelector(".id").innerHTML
        let pagado = document.querySelector(".pagado").innerHTML;
        fetch(`http://localhost:3000/pedido/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                estado: "Pagado"
            })
        })
        .then(res => res.json())
        .then(esneider => console.log(esneider))
        .catch(error => console.log(error))
        fetch(`http://localhost:3000/factura/factura/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: id })
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                throw new Error('Something went wrong');
            }
        })
        .then(data => {
            console.log(data.respuesta);
            estado.remove();

        })
        .catch(error => console.log(error));
       
    });
});

// Eliminar metodo de pago
let eliminarMetodo = document.querySelectorAll(".eliminarMetodo")
eliminarMetodo.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let ventana = document.getElementById("eliminar")
        ventana.style.display = "flex"
        let metopago = e.target.closest(".user-list-item")
        let nombre = metopago.querySelector(".nombreTipo").innerHTML;
        let aceptar = document.querySelector(".aceptar");
        let textoVentana = document.querySelector(".texto")
        textoVentana.innerHTML = `¿Seguro que quieres eliminar el metodo de pago ${nombre}?`
        let id = metopago.querySelector(".id").innerHTML
        aceptar.addEventListener("click", () => {
        fetch(`http://localhost:3000/metopago/metopago/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.ok) {
                metopago.remove();
                ventana.style.display= "none"
            } 
        })
        .catch(error => console.log(error))
        })
        console.log(metopago);
    })
})

// Eliminar metodo de pago
let eliminarProveedor = document.querySelectorAll(".eliminarProveedor")
eliminarProveedor.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let ventana = document.getElementById("eliminar")
        ventana.style.display = "flex"
        let proveedor = e.target.closest(".user-list-item")
        let nombre = proveedor.querySelector(".nombreProveedor").innerHTML;
        let aceptar = document.querySelector(".aceptar");
        let textoVentana = document.querySelector(".texto")
        textoVentana.innerHTML = `¿Seguro que quieres eliminar al proveedor ${nombre}?`
        let id = proveedor.querySelector(".id").innerHTML
        aceptar.addEventListener("click", () => {
        fetch(`http://localhost:3000/proveedor/proveedor/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.ok) {
                proveedor.remove();
                ventana.style.display= "none"
            } 
        })
        .catch(error => console.log(error))
        })
        console.log(proveedor);
    })
})

// Crear Metodo de Pago
document.getElementById("crearMPago").addEventListener("click", (e) => {
    e.preventDefault();

    const tipopago = document.querySelector(".metodo").value;

    const datosMetodo = {
        tipopago: tipopago
    };
    fetch(`http://localhost:3000/metopago/metopago`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosMetodo)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Metodo agregado:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
    location.reload()
});

// Crear Proveedor
document.getElementById("crearPr").addEventListener("click", (e) => {
    e.preventDefault();

    const proveedor = document.querySelector(".nombrePr").value;

    const datosProveedor = {
        proveedor: proveedor
    };
    fetch(`http://localhost:3000/proveedor/proveedor`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosProveedor)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Metodo agregado:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
    location.reload()
});

//Actualizar estado Usuario
let estadoUsuario = document.querySelectorAll(".estado");
estadoUsuario.forEach(btn => {
    btn.addEventListener("change", (e) => {
        let proveedor = e.target.closest(".user-list-item")
        let aceptar = document.querySelector(".act");
        let id = proveedor.querySelector(".id").innerHTML
        let estado = proveedor.querySelector(".estado").value; 
        aceptar.addEventListener("click", () => {
            const datosEstado = {
                estado: estado
            };
            console.log(datosEstado);
        fetch(`http://localhost:3000/usuario/estado/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosEstado)
        })
        .then(res => {
            if(res.ok) {
                proveedor.remove();
            } 
        })
        .catch(error => console.log(error))
        })
        console.log(proveedor);
    })
});

// Eliminar Usuarios
let eliminaPedido = document.querySelectorAll(".cancelarP")
eliminaPedido.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let ventana = document.getElementById("eliminar");
        ventana.style.display = "flex";
        let pedido = e.target.closest(".user-list-item");
        let nombre = pedido.querySelector(".nombre").innerHTML;
        let aceptar = document.querySelector(".aceptar");
        let textoVentana = document.querySelector(".texto")
        textoVentana.innerHTML = `¿Seguro que quieres eliminar el pedido ${nombre}?`
        let id = pedido.querySelector(".id").innerHTML
        aceptar.addEventListener("click", () => {
        fetch(`http://localhost:3000/pedido/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.ok) {
                pedido.remove();
                ventana.style.display= "none"
            } 
        })
        .catch(error => console.log(error))
        })
        console.log(pedido);
    })
})

// Usuario
function editarUsuario(){
    let ventana = document.getElementById("editarUsuario")
    ventana.style.display = "flex"
}
function ocultarE(){
    let ventana = document.getElementById("editarUsuario")
    ventana.style.display = "none"
}
// Crear Usuario
function crear(){
    let ventana = document.getElementById("crear")
    ventana.style.display = "flex"
}
function ocultarC(){
    let ventana = document.getElementById("crear")
    ventana.style.display = "none"
}
// Eliminar Usuario
function eliminar() {
    let ventana = document.getElementById("eliminar")
    ventana.style.display = "flex"
}
function ocultarEliminar() {
    let ventana = document.getElementById("eliminar")
    ventana.style.display = "none"
}

// Producto
function editarProducto(){
    let ventana = document.getElementById("editarProducto")
    ventana.style.display = "flex"
}
function ocultarProducto(){
    let ventana = document.getElementById("editarProducto")
    ventana.style.display = "none"
}

// Crear Producto
function crearProducto(){
    let ventana = document.getElementById("crearP")
    ventana.style.display = "flex"
}
function ocultarCrearProducto(){
    let ventana = document.getElementById("crearP")
    ventana.style.display = "none"
}

// Crear Metodo Pago
function crearMetodo(){
    let ventana = document.getElementById("crearMetodo")
    ventana.style.display = "flex"
}
function ocultarMetodo(){
    let ventana = document.getElementById("crearMetodo")
    ventana.style.display = "none"
}

// Crear Proveedor
function crearProveedor(){
    let ventana = document.getElementById("crearProveedor")
    ventana.style.display = "flex"
}
function ocultarProveedor(){
    let ventana = document.getElementById("crearProveedor")
    ventana.style.display = "none"
}
