function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  const months = ['Enero', 'Marzo', 'Noviembre'];

  const requires = array.filter(
    (el) => el === 'Enero' || el === 'Marzo' || el === 'Noviembre'
  );

  return requires.length === 3
    ? requires
    : 'No se encontraron los meses pedidos';
}

module.exports = mesesDelAño;
