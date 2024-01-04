function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:

  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
    //    console.log('input', n, 'result', result);
    if (result > 100) break;
  }

  return result;

  // De acuerdo a la siguiente definición el test utilizando el argumento con valor 15
  // debería parar (break) en 105

  // Si la suma supera a 100, detén el bucle usando break.

  // test('sumarHastaNConBreak of 15 should return 120', () => {
  //   expect(sumarHastaNConBreak(15)).toBe(120);
  // });
}

module.exports = sumarHastaNConBreak;
