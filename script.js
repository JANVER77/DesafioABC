
    // Usamos delegación de eventos en el contenedor para máxima robustez
    document.addEventListener('DOMContentLoaded', () => {
      const grid = document.getElementById('grid');
      if (!grid) {
        console.error('No se encontró el contenedor .letters-grid (id="grid").');
        return;
      }

      // Maneja clics sobre imágenes dentro del grid
      grid.addEventListener('click', (ev) => {
        const clicked = ev.target;
        // si no es una imagen, ignoramos
        if (!clicked || clicked.tagName !== 'IMG') return;

        // debug en consola
        console.log('Imagen clickeada:', clicked.src, 'alt:', clicked.alt);

        // buscamos la tarjeta padre más cercana
        const card = clicked.closest('.letter-card');
        if (!card) {
          console.warn('No se encontró .letter-card padre para la imagen clickeada.');
          return;
        }

        // buscamos el span dentro de la misma tarjeta
        const span = card.querySelector('span');
        if (!span) {
          console.warn('No existe <span> dentro de la tarjeta:', card);
          return;
        }

        // texto a mostrar: el alt de la imagen
        const texto = clicked.alt ? clicked.alt.trim() : '';

        // Si alt está vacío, avisamos
        if (!texto) {
          console.warn('El atributo alt de la imagen está vacío. Rellénalo para que funcione.');
          return;
        }

        // Toggle: si ya está mostrado, lo vaciamos, si no, lo ponemos
        if (span.textContent === texto) {
          span.textContent = '';
          console.log('Ocultando texto en span (toggle).');
        } else {
          span.textContent = texto;
          console.log('Mostrando texto en span:', texto);
        }
      });
    });