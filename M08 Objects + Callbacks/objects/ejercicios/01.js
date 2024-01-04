const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  const anidados = propiedad
    .replaceAll('[', '.')
    .replaceAll(']', '')
    .replaceAll('"', '')
    .replaceAll("'", '');

  if (!anidados.includes('.')) {
    const res = objeto[propiedad];
    return res;
  }

  const anidadosArr = anidados.split('.');
  result = objeto[anidadosArr[0]];
  for (let i = 1; i < anidadosArr.length; i++) {
    result = result[anidadosArr[i]];
  }

  return result;
};

module.exports = obtenerValorPropiedad;
