function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  let result = null;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] !== numeros[i - 1] + 1 && i > 0) {
      result = numeros[i - 1] + 1;
      break;
    }
  }
  return result;
}

module.exports = encontrarNumeroFaltante;
