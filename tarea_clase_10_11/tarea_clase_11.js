// ejercicio 1 - heladeria

let topping = ["Oreo", "KitKat", "Kinder"];
let precio = 0;
let helado = 30;
let precioFinal = 0;

if(topping[0]) {
  precio = 10;
} else if(topping[1]) {
  precio = 15;
} else if(topping[2]) { 
  precio = 25;
} else {
  precio = "No tenemos ese topping"
}

if precio != "No tenemos ese topping") {
  precioFinal = helado + precio;
  console.log("El helado cuesta $" + precioFinal);
} else {
  console.log("precio")
}

// ejercicio 2 - pedido

let pedido = "";

switch (pedido) {
  case carne:
    console.log("Le recomendamos acompañar su plato con vino tinto")
    break;
  case pescado:
    console.log("Le recomendamos acompañar su plato con vino blanco")
  break;
  case verdura:
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

let n = 0

while (n < 11) {
  let n = n++
  console.log(n " es más chico que 11");
}
