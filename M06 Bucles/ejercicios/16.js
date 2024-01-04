function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:

  let response;
  switch (idioma) {
    case 'aleman':
      response = 'Guten Tag!';
      break;
    case 'mandarin':
      response = 'Ni Hao!';
      break;
    case 'ingles':
      response = 'Hello!';
      break;
    default:
      response = 'Hola!';
  }

  return response;
}

module.exports = saludo;
