document.getElementById('search-cliente').addEventListener('keyup', e =>{
    const query = e.target.value.toLowerCase();

    document.querySelectorAll('#usuariosTableBody tr').forEach(row => {
        const nombre = row.querySelector('.nombre').textContent.toLowerCase();

        if (nombre.includes(query)) {
            row.classList.remove('filtro')
        } else {
            row.classList.add('filtro')
        }
    })
})

document.getElementById('search-producto').addEventListener('keyup', e =>{
    const query = e.target.value.toLowerCase();

    document.querySelectorAll('#productosTableBody tr').forEach(row => {
        const nombre = row.querySelector('.nombreP').textContent.toLowerCase();

        if (nombre.includes(query)) {
            row.classList.remove('filtro')
        } else {
            row.classList.add('filtro')
        }
    })
})
const style = document.createElement('style');
style.innerHTML = `
    .filtro{
        display: none;
    }
`;
document.head.appendChild(style);