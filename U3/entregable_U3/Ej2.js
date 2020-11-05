//nombre:apellidos:telefono:email:codigopostal
//Juan:González Cabezuelo:123456789:alum.jgonzalezc@iesalixar.org:12345

/*Haz un programa que reciba cadenas del tipo:

“nombre:apellidos:telefono:email:codigopostal” y que te muestre:

El código postal.
Los apellidos
El email.
Suponiendo un formato de email “direccion@servidor” te muestre el servidor asociado.*/
    let cadena = prompt("Introduzca sus datos con el siguiente formato: 'nombre:apellidos:telefono:email:codigopostal'")

    let seccion = cadena.split(":");
    let servidor = seccion[3].split("@");

    alert("CP: "+seccion[4]+"\nApellidos: "+seccion[1]+"\nEmail: "+seccion[3]+"\nServidor del correo: "+servidor[1]);