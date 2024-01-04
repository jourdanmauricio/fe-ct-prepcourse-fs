function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  // Si no se pasaron argumentos, retornamos 0
  if (arguments.length === 0) {
    return 0;
  }

  // Si se pasó un argumento, simplemente lo retornamos
  if (arguments.length === 1) {
    return arguments[0];
  }

  // Inicializamos el producto como 1
  let product = 1;

  // Recorremos los argumentos y multiplicamos el producto por cada uno
  for (let i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }

  // Devolvemos el producto
  return product;
}

module.exports = multiplicarArgumentos;
