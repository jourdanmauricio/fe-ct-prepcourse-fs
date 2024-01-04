function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  // Si las longitudes de las cadenas son diferentes, no pueden ser anagramas
  if (str1.length !== str2.length) {
    return false;
  }

  // Creo dos arreglos para almacenar las letras de cada cadena en minúsculas y ordenadas
  const arrStr1 = str1.toLowerCase().split('').sort();
  const arrStr2 = str2.toLowerCase().split('').sort();

  // Comparo los dos arreglos
  for (let i = 0; i < 26; i++) {
    if (arrStr1[i] !== arrStr2[i]) {
      return false;
    }
  }

  return true;
}

module.exports = esAnagrama;
