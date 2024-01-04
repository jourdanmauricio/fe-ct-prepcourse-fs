const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  const props = Object.keys(objeto);
  return props.length;
};

module.exports = contarPropiedades;
