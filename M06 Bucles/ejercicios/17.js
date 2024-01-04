function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let response;
  switch (color) {
    case 'blue':
      response = 'This is blue';
      break;
    case 'red':
      response = 'This is red';
      break;
    case 'green':
      response = 'This is green';
      break;
    case 'orange':
      response = 'This is orange';
      break;
    default:
      response = 'Color not found';
  }

  return response;
}

module.exports = colors;
