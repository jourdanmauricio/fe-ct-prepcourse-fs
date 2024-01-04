function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  let result = 1;
  for (let i = a; i <= b; i++) {
    result = result * i;
  }

  return result === -0 ? 0 : result;
}

module.exports = productoEntreNúmeros;
