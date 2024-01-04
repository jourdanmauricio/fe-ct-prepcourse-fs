function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:

  let result;
  for (let i = 0; i < secuencia.length; i++) {
    if (n % secuencia[i] === 0 && secuencia[i] !== 1) {
      result = secuencia[i];
      break;
    }
  }

  return result;
}

module.exports = encontrarPrimerMultiploDeN;
