document.addEventListener('DOMContentLoaded', () => {
  let generar = document.querySelectorAll(".generar");
  generar.forEach(btn => {
    btn.addEventListener("click", e => {
      const {
        jsPDF
      } = window.jspdf;
      const doc = new jsPDF();

      // Obtener el contenedor de la factura correspondiente
      const info = e.target.closest('.container');
      const id = info.querySelector('.id').innerText.trim();
      const contenido = info.innerText;

      // Agregar contenido al PDF
      doc.text(contenido, 10, 10);

      // Descargar el PDF con el nombre basado en la ID de la factura
      doc.save(`surprise_factura_${id}.pdf`);
    });
  });
});