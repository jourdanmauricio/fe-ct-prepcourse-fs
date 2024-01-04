function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  return arrayOfNums.reduce((act, curr) => (act = act + curr), 0);
}

module.exports = agregarNumeros;
