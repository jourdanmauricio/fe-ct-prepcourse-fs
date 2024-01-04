function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let result;

  for (let i = 0; i < numeros.length; i++) {
    const index = numeros.findIndex(
      (el, index) => el === numeros[i] && i !== index
    );
    if (index !== -1) return numeros[i];
  }
}

module.exports = encontrarElementoRepetido;
