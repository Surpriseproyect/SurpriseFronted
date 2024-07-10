document.addEventListener('DOMContentLoaded', async () => {
    const botonesGenerarPDF = document.querySelectorAll('.generar');

    botonesGenerarPDF.forEach(boton => {
        boton.addEventListener('click', async () => {
            const facturaContainer = boton.closest('.container');
            const facturaID = facturaContainer.querySelector('.id').textContent;

            // Crea un nuevo documento PDF
            const pdfDoc = await window.PDFLib.PDFDocument.create();
            const page = pdfDoc.addPage();

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
