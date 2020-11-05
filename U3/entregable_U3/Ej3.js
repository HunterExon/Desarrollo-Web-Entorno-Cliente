/*Diseña una clase Aeropuerto. Tendrá como atributos nombre, ciudad y numero de vuelos diarios.

Cada vuelo diario se representará como un objeto de la clase Vuelo. En ella se guardarán los atributos “codigo”, “hora_llegada” y 
“hora_salida”.

Implementa métodos en aeropuerto y vuelo para modificar la hora de llegada, para modificar la hora de salida y para
 comprobar si la hora de salida es posterior a la hora de llegada.

Comprueba todos los métodos, creando un aeropuerto con 10 vuelos activos, todos saliendo 11 y llegando a las 12. Cambia
 la salida del primer vuelo a las 13 y comprueba las horas de salida y llegada. Cambia la de llegada a las 14 y vuelve a comprobar las horas.*/

function Aeropuerto() {
    let vuelos = [Vuelo];

    this.nombre = ""
    this.ciudad = ""
    this.num_vuelo = vuelos

    this.introducirAeropuerto = function(nombre, ciudad) {
        this.nombre = nombre
        this.ciudad = ciudad
        this.num_vuelo = this.num_vuelo
    }
}


function Vuelo() {
    this.codigo = ""
    this.hora_llegada = ""
    this.hora_salida = ""

    this.introducitVuelo(codigo, hora_llegada,hora_salida) {
      this.codigo = codigo;
      this.hora_llegada = hora_llegada;
      this.hora_salida=hora_salida;
    }

      this.setHora_llegada=function(hora_llegada){
        this.hora_llegada=hora_llegada;
      }

      this.setHora_Salida=function(hora_salida){
        this.hora_salida=hora_salida;
      }

      this.checkHoras=function(hora_salida,hora_llegada){
        if(hora_salida>hora_llegada){
            alert("La hora de salida es posterior");
        }else{
            alert("La hora de salida NO es posterior");
        }
      }
}



