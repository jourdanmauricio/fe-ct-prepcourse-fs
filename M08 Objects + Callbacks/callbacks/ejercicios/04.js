function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:

  let total = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0);

  cb(total);
}

module.exports = sumarArray;
