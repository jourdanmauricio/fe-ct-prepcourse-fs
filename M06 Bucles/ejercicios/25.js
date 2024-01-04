function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const text = string.replaceAll(' ', '').toLowerCase();

  console.log('TEXTO', text);

  let i = 0;
  let j = text.length - 1;

  while (i < j) {
    if (text[i] !== text[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = esPalindromo;
