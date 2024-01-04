function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  const result = [];

  array.forEach((el) => {
    const index = result.findIndex((res) => res === el);
    if (index === -1) result.push(el);
  });

  return result.length === 1;
}

module.exports = todosIguales;
