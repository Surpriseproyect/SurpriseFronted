const loginsec = document.querySelector('.login-section');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', () => {
    loginsec.classList.add('active');
});

loginlink.addEventListener('click', () => {
    loginsec.classList.remove('active');
});


// Registro de usuario
document.getElementById("registrar").addEventListener("click", async (e) => {

    const correoRegister = document.getElementById('correoregister').value.trim().toLowerCase();
    const gmail = correoRegister.endsWith('@gmail.com');
    const hotmail = correoRegister.endsWith('@hotmail.com');

    if (gmail || hotmail) {
        const identificacion = document.querySelector(".identificacion").value.trim();
        const nombres = document.querySelector(".nombre").value.trim();
        const telefono = document.querySelector(".telefono").value.trim();
        const correo = document.querySelector(".correo").value.trim();
        const contrasena = document.querySelector(".contrasena").value.trim();
        const rol = document.querySelector(".roles").value.trim();
        const terminos = document.querySelector(".terminosycondiciones").checked;
        const estado = "Pagado";
    
        if (!terminos) {
            return;
        }
    
        const datosUsuario = {
            identificacion,
            nombres,
            telefono,
            correo,
            contrasena,
            rol,
            estado
        };
    
        try {
            const response = await fetch(`https://surprisebackend.onrender.com/usuario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosUsuario)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("Usuario registrado:", data);
            location.reload(); // Recargar la página después de registrar
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Ocurrió un error al registrar al usuario. Por favor, inténtelo nuevamente.");
        }
    } else {
        alertify.alert('Error', 'Correo Incorrecto');
        e.preventDefault(); // Evitar que el formulario se envíe
        return false; // Asegurar que el formulario no se envíe
    }
});


// Función para iniciar sesión
const loguear = async () => {
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const url = document.getElementById("url").value;

    sessionStorage.setItem("urlSurprise", "https://surprisebackend.onrender.com");
    const urlSurprise = sessionStorage.getItem("urlSurprise") + "/usuario/loginusuario";

    const options = {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            correo,
            contrasena: password
        })
    };

    try {
        const response = await fetch(urlSurprise, options);
        const data = await response.json();

        if (data.error) {
            alertify.error('Correo o Contraseña Incorrecta');
        } else {
            sessionStorage.setItem("token", data.body.token);
            sessionStorage.setItem("rol", data.body.rol);
            window.location.href = sessionStorage.getItem("rol");
        }
    } catch (err) {
        console.error("Se presentó un problema:", err);
    }
};
