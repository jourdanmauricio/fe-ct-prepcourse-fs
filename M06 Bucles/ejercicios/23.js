function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  let i = 0;
  let result = num;
  do {
    result = result + 5;
    i++;
  } while (i < 8);

  return result;
}

module.exports = doWhile;
