'use strict'

console.log("Hola Mundo con NodeJs");

var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = `
  La Suma es: ${numero1 + numero2}
  La Resta es: ${numero1 - numero2}
  La Multiplicacion es: ${numero1 * numero2}
  La Division es: ${numero1 / numero2}
`;

console.log(plantilla);
