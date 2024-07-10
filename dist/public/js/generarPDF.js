// Crea un archivo JavaScript (por ejemplo, main.js) y agrégalo a tu página HTML usando un elemento <script type="module">
// main.js


document.addEventListener('DOMContentLoaded', async () => {
    const pdfDoc = await window.PDFLib.PDFDocument.create();
    const botonesGenerarPDF = document.querySelectorAll('.generar');

  botonesGenerarPDF.forEach(boton => {
    boton.addEventListener('click', async () => {
      const facturaContainer = boton.closest('.container');
      const facturaID = facturaContainer.querySelector('.id').textContent;

      const pdfDoc = await PDFDocument.create();
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
