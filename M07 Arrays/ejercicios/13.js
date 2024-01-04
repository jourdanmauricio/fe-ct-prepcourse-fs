function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  const sumValues = resultadosTest.reduce((act, curr) => (act = act + curr), 0);

  return sumValues / resultadosTest.length;
}

module.exports = promedioResultadosTest;
