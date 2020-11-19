/*
Crea un tipo de objetos que sirvan para representar una Carta. Estos objetos tendrán dos propiedades:
-    palo. Que será un número de 1 a 4 (donde 1 significa Oros, 2 Copas, 3 Espadas y 4 bastos)
-    valor. Un número del 1 al 10 (8 = sota, 9 = caballo, 10 = rey).

Los objetos de este tipo se construyen indicando el palo y el valor. Si hay fallos en los datos 
se devuelve un objeto nulo en la creación.

Las cartas tendrán estos métodos:
-    darValor. Que recibe un número de palo y un valor para la carta para, con ellos, modificar 
la carta. Ante datos incorrectos no cambia nada en la carta.
-    toString. Método habitual (y estándar) para devoler en forma de texto entendible el valor de
 la carta. Por ejemplo: As de Oros.

Además, habrá otro tipo de objeto: Baraja. La idea es que represente ua baraja de cartas españolas. 
Tendrá los siguientes detalles:
-    La baraja la forman 40 cartas. Para ello tendrá la propiedad cartas que será un array de 40 
cartas.
-    Al construir la Baraja se rellenan las cartas en el siguiente orden: por palos y cada palo con 
las cartas del 1 al 10. No se podrá acceder directamente al array fuera de la función constructura.
-    El método barajar permite barajar las cartas. Es decir, desodernarlas de forma aleatoria.
-    El método toString permite obtener la baraja en forma de texto para saber cómo están ordenadas 
las cartas.

Simula la construcción de una baraja, muéstrala en un elemento HTML (p o div, como quieras), y luego 
muéstrala barajada en otro elemento HTML.
*/

function carta() {
  this.palo = "";
  this.valor = "";

  this.constructor = function (palo,valor) {
    if(palo==1 || palo == 2 || palo == 3 || palo == 4){
      this.palo = palo;
    }
    if(valor==1 || valor ==2 || valor ==3 || valor ==4 || valor ==5 || valor ==6 || valor ==7 || valor ==8 || valor ==9 || valor ==10){
      this.valor=valor
    }
  };

  this.dar_valor = function (nuevo_palo, nuevo_valor) {
    if(nuevo_palo==1 || nuevo_palo == 2 || nuevo_palo == 3 || nuevo_palo == 4){
      this.palo= nuevo_palo;
    }
    if(nuevo_valor==1 || nuevo_valor ==2 || nuevo_valor ==3 || nuevo_valor ==4 || nuevo_valor ==5 || nuevo_valor ==6 || nuevo_valor ==7 || nuevo_valor ==8 || nuevo_valor ==9 || nuevo_valor ==10){
      this.valor= nuevo_valor;
    }
  };
  this.toString = function () {
    let palo = "";
    let valor = "";

    switch (this.palo) {
      case 1:
        palo = " de Oros"      
      break;
      case 2:
        palo = " de Copas"      
      break;
      case 3:
        palo = " de Espadas"      
      break;
      case 4:
        palo = " de Bastos"      
      break;
    }
    switch (this.valor) {
      case 1:
        valor = "As"      
      break;
      case 2:
        valor = "Dos"      
      break;
      case 3:
        valor = "Tres"      
      break;
      case 4:
        valor = "Cuatro"      
      break;
      case 5:
        valor = "Cinco"      
      break;
      case 6:
        valor = "Seis"      
      break;
      case 7:
        valor = "Siete"      
      break;
      case 8:
        valor = "Sota"      
      break;
      case 9:
        valor = "Caballo"      
      break;
      case 10:
        valor = "Rey"      
      break;
    }
    let cadena = valor + palo + "<br>";
    return cadena;
  };
}

function baraja() {
  this.cartas = [40];

  /*Generar Baraja aleatoria*/
  this.barajar = function (){
    for (i = 0; i < 40; i++) {
      this.cartas[i] = new carta.constructor((Math.floor(Math.random()*5+1)),(Math.floor(Math.random()*11+1)));
    }
    for (i = 0; i < 40; i++){
      this.cartas[i].toString
    }
  }
  /*Mostrar Baraja*/
  this.mostrar = function (){
    for (i = 0; i < 40; i++){
      this.cartas[i].toString
    }
  }
}