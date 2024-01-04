function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let result = [];
  for (let i = 0; i <= 10; i++) {
    result.push(6 * i);
  }

  return result;
}

module.exports = tablaDelSeis;
