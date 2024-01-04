function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  // Comprueba el formato de la fecha
  // if (!fecha instanceof Date) return false;
  if (typeof fecha === 'string') return false;

  if (fecha.toString() === 'Invalid Date') return false;

  // Comprueba el día
  const dia = fecha.getDate();
  if (dia < 1 || dia > 31) {
    return false;
  }

  // Comprueba el mes
  const mes = fecha.getMonth() + 1;
  if (mes < 1 || mes > 12) {
    return false;
  }

  // Comprueba el año
  const anio = fecha.getFullYear();
  if (anio < 1000 || anio > 9999) {
    return false;
  }

  // Comprueba el día bisiesto
  if (mes === 2 && dia === 29 && anio % 4 !== 0) {
    return false;
  }

  return true;
}
module.exports = esFechaValida;
