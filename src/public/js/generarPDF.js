// Importar pdf-lib si estás usando Node.js
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

// Función para manejar la descarga del PDF
async function descargarFactura(event) {
  // Obtener la ID de la factura desde el atributo data-id del botón
  const idFactura = event.target.dataset.id;

  // Aquí deberías tener el código para obtener los datos de la factura según la ID
  // Por simplicidad, asumiremos que ya tienes los datos de la factura en alguna estructura

  // Crear un nuevo documento PDF
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  // Añadir contenido a la página
  page.drawText(`Factura ID: ${idFactura}`, { x: 50, y: 700 });

  // Guardar el PDF y descargarlo
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = `factura_${idFactura}.pdf`;
  link.click();
}

// Agregar un evento de clic a todos los botones con clase 'pdf'
const botonesPDF = document.querySelectorAll('.generar');
botonesPDF.forEach(boton => {
  boton.addEventListener('click', descargarFactura);
});
