function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:

  for (prop in objeto) {
    if (prop === propiedad) return true;
  }

  return false;
}

module.exports = verificarPropiedad;
