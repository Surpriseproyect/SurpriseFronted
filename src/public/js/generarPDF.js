document.addEventListener('DOMContentLoaded', async () => {
    const botonesGenerarPDF = document.querySelectorAll('.generar');

    botonesGenerarPDF.forEach(boton => {
        boton.addEventListener('click', async () => {
            const facturaContainer = boton.closest('.container');
            const facturaID = facturaContainer.querySelector('.id').textContent;
            const nombreCliente = facturaContainer.querySelector('.detail-nombre').textContent;
            const producto = facturaContainer.querySelector('.detail-producto').textContent;
            const fecha = facturaContainer.querySelector('.detail-fecha').textContent;
            const metodoPago = facturaContainer.querySelector('.detail-metodo').textContent;
            const total = facturaContainer.querySelector('.detail-total').textContent;
            const estado = facturaContainer.querySelector('.detail-estado').textContent;
            const footer = facturaContainer.querySelector('.footer').textContent;

            // Crea un nuevo documento PDF usando jsPDF
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: [80, 792], // Tamaño personalizado para papel térmico de 80 mm de ancho
            });

            // Agrega contenido al PDF
            const fontSize = 12;
            doc.setFontSize(fontSize);

            // Título
            doc.text('Factura', 10, 10);

            // Datos de la factura en tabla invisible
            const data = [
                [facturaID],
                [nombreCliente],
                [producto],
                [fecha],
                [metodoPago],
                [total],
                [estado],
                [footer]
            ];

            doc.autoTable({
                startY: 20,
                head: [['Detalle', 'Valor']],
                body: data,
                theme: 'grid',
                margin: { top: 15 },
                styles: { fontSize: fontSize },
            });

            // Guarda el PDF y descárgalo
            doc.save(`factura_${facturaID}.pdf`);
        });
    });
});
