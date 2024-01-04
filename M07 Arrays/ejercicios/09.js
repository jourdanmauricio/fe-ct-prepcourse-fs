function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  const greaterTen = array.filter((el) => el > 10);
  return greaterTen.length;
}

module.exports = contarElementosMayoresA10;
