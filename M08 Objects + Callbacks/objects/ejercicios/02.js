function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:

  const newObj = Object.assign({}, objeto);
  newObj[propiedad] = valor;
  return newObj;
}

module.exports = actualizarValorPropiedad;
