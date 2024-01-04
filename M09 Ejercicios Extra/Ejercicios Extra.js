/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  const result = [];
  for (const [clave, valor] of Object.entries(objeto)) {
    result.push([clave, valor]);
  }
  return result;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  const frecuencias = {};
  for (const letra of string) {
    frecuencias[letra] = frecuencias[letra] ? frecuencias[letra] + 1 : 1;
  }

  Object.keys(frecuencias).sort();

  return frecuencias;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let upper = '';
  let lower = '';

  for (const letra of string) {
    if (letra === letra.toUpperCase()) {
      upper = upper + letra;
    } else {
      lower = lower + letra;
    }
  }

  return upper + lower;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  const palabras = frase.split(' ');
  const palabrasInvertidas = palabras.map((palabra) =>
    palabra.split('').reverse().join('')
  );

  const fraseInvertida = palabrasInvertidas.join(' ');

  return fraseInvertida;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  const digitos = numero.toString().split('');

  for (let i = 0; i < digitos.length / 2; i++) {
    if (digitos[i] !== digitos[digitos.length - 1 - i]) {
      return 'No es capicua';
    }
  }

  return 'Es capicua';
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let letras = string.toLowerCase().split('');

  letras = letras.filter(
    (letra) => letra !== 'a' && letra !== 'b' && letra !== 'c'
  );
  const stringSinLetras = letras.join('');
  return stringSinLetras;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  let arregloOrdenado = [];

  for (const string of arrayOfStrings) {
    arregloOrdenado.push({
      string: string,
      longitud: string.length,
    });
  }

  arregloOrdenado.sort((a, b) => a.longitud - b.longitud);
  arregloOrdenado = arregloOrdenado.map((par) => par.string);

  return arregloOrdenado;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  const result = [];

  for (const numero1 of array1) {
    for (const numero2 of array2) {
      if (numero1 === numero2) {
        result.push(numero1);
      }
    }
  }

  return result;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
