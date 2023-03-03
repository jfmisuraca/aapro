// ejercicio 1 - heladeria

let topping = prompt ('¿Querés topping de Oreo, KitKat o Kinder?');
let precio;
let helado = 30;
let precioFinal;

if ( topping == "Oreo" || topping == "oreo" ) {
  precio = 10 ;
  precioFinal = helado + precio;
  console.log( "El helado cuesta $" + precioFinal ) ;
} else if ( topping == "KitKat" || topping == "kitkat" || topping == "Kitkat" || topping == "kitKat" )  {
  precio = 15 ;
  precioFinal = helado + precio ;
  console.log( "El helado cuesta $" + precioFinal ) ;
} else if ( topping == "Kinder" || topping == "kinder" ) {
  precio = 25 ;
  precioFinal = helado + precio;
  console.log( "El helado cuesta $" + precioFinal ) ;
} else {
  precio = "No tenemos ese topping";
}

// ejercicio 2 - pedido

let pedido = prompt('¿Qué le gustaría cenar?');

switch (pedido) {
  case 'carne':
    console.log("Le recomendamos acompañar su plato con vino tinto")
    break;
  case 'pescado':
    console.log("Le recomendamos acompañar su plato con vino blanco")
    break;
  case 'verdura':
    console.log("Le recomendamos acompañar su plato con agua")
    break;
  default:
    console.log("Le solicitamos elija entre carne, pescado o verdura")
    break;
}

// ejercicio 3 - FOR

let variableConArray = ["dato 1", "dato 2", "dato 3", "dato 4"];

for (let index = 0; index < variableConArray.length; index++) {
  console.log("El dato es " + variableConArray[index]);
}

// ejercicio 4 - WHILE

let numero = 0;

while (numero < 11) {
  console.log(numero + ' es mas chico que 11');
  numero = numero + 1 ;
}
