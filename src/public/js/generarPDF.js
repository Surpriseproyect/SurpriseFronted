document.addEventListener('DOMContentLoaded', async () => {
    const botonesGenerarPDF = document.querySelectorAll('.generar');

    botonesGenerarPDF.forEach(boton => {
        boton.addEventListener('click', async () => {
            const facturaContainer = boton.closest('.container');
            const facturaID = facturaContainer.querySelector('.id').textContent;

            // Crea un nuevo documento PDF
            const pdfDoc = await window.PDFLib.PDFDocument.create();
            
            // Crea una página con ancho de 105 mm (1 mm = 1/25.4 pulgadas)
            const page = pdfDoc.addPage([105 * 4.25, 792]); // 105 mm * 4.25 = ancho en puntos (1 punto = 1/72 pulgadas)

            // Agrega contenido al PDF
            page.drawText(`Factura ID: ${facturaID}`, { x: 50, y: 700 });

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

