// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {};

objetoAnidado.name = 'Mauricio';
objetoAnidado.lastName = 'Jourdan';
objetoAnidado.address = {
  city: 'La Plata',
  state: 'Buenos Aires',
  street: 'Diagonal 74 nro 3530',
  cp: 1900,
};
objetoAnidado.fullName = () => {
  return `${this.name} ${this.fullName}`;
};

module.exports = objetoAnidado;
