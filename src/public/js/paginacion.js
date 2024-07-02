// Paginación Usuarios
document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 6;
    const tableBody = document.getElementById('usuariosTableBody');
    const paginationControls = document.getElementById('paginationControls');
    const rows = tableBody.querySelectorAll('tr');

    function displayPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            row.style.display = (index >= start && index < end) ? '' : 'none';
        });

        paginationControls.innerHTML = '';
        for (let i = 1; i <= Math.ceil(rows.length / rowsPerPage); i++) {
            const link = document.createElement('a');
            link.href = '#';
            link.innerHTML = `${i}`;
            link.className = i === page ? 'active' : '';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                displayPage(i);
            });
            paginationControls.appendChild(link);
        }
    }

    displayPage(1);
});

// Paginación Productos
document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 6;
    const tableBody = document.getElementById('productosTableBody');
    const paginationControls = document.getElementById('paginacionProductos');
    const rows = tableBody.querySelectorAll('tr');

    function displayPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            row.style.display = (index >= start && index < end) ? '' : 'none';
        });

        paginationControls.innerHTML = '';
        for (let i = 1; i <= Math.ceil(rows.length / rowsPerPage); i++) {
            const link = document.createElement('a');
            link.href = '#';
            link.innerHTML = `${i}`;
            link.className = i === page ? 'active' : '';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                displayPage(i);
            });
            paginationControls.appendChild(link);
        }
    }

    displayPage(1);
});

// Paginación Fiados
document.addEventListener('DOMContentLoaded', function() {
    const rowsPerPage = 5;
    const tableBody = document.getElementById('fiadosTableBody');
    const paginationControls = document.getElementById('paginacionFiados');
    const rows = tableBody.querySelectorAll('tr');

    function displayPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            row.style.display = (index >= start && index < end) ? '' : 'none';
        });

        paginationControls.innerHTML = '';
        for (let i = 1; i <= Math.ceil(rows.length / rowsPerPage); i++) {
            const link = document.createElement('a');
            link.href = '#';
            link.innerHTML = `${i}`;
            link.className = i === page ? 'active' : '';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                displayPage(i);
            });
            paginationControls.appendChild(link);
        }
    }

    displayPage(1);
});