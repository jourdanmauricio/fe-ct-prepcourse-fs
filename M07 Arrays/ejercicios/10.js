function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  return array.reduce((act, curr, i) => (curr > array[act] ? i : act), 0);
}

module.exports = encontrarIndiceMayor;
