function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  const newArr = arrayOfStrings.filter((el) => el.startsWith('a'));

  return newArr;
}

module.exports = filter;
