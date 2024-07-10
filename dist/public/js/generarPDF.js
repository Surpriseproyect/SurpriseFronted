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

            // Crea un nuevo documento PDF
            const pdfDoc = await window.PDFLib.PDFDocument.create();
            
            // Ajusta las dimensiones de la página para papel térmico de 80 mm de ancho
            const pageWidth = 80 * 4.25; // 80 mm * 4.25 puntos por milímetro
            const pageHeight = 792; // 11 pulgadas de alto (792 puntos)

            const page = pdfDoc.addPage([pageWidth, pageHeight]);

            // Agrega contenido al PDF
            const fontSize = 12;
            const textOptions = { size: fontSize };

            // Título
            page.drawText('Factura', { x: 50, y: 750, ...textOptions });

            // Datos de la factura en tabla invisible
            const table = [
                [{ text: facturaID }],
                [{ text: nombreCliente }],
                [{ text: producto }],
                [{ text: fecha }],
                [{ text: metodoPago }],
                [{ text: total }],
                [{ text: estado }],
                [{ text: estado }],
                [{ text: footer }]
            ];

            const tableOptions = {
                x: 50,
                y: 700,
                width: 400,
                drawHorizontalLine: () => false, // No dibujar líneas horizontales
                fontSize: 12,
            };

            pdfDoc.autoTable(table, tableOptions);

            // Guarda el PDF y descárgalo
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `factura_${facturaID}.pdf`;
            link.click();
        });
    });
});
