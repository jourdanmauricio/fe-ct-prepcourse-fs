function esPositivoOInferiorA10(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si es positivo o menor que 10.
  // Retorna false en caso contrario.
  // Tu código:

  return a >= 0 && a < 10;

  /////////////////////////////////
  // Entiendo que los siguientes //
  // Test se contradicen         //
  /////////////////////////////////

  // returns true for positive numbers
  // - expect(esPositivoOInferiorA10(100)).toBe(true);
  // returns false for numbers greater than or equal to 10
  // - expect(esPositivoOInferiorA10(100)).toBe(false);
}

module.exports = esPositivoOInferiorA10;
