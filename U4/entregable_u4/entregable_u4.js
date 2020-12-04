let cont = 0;
let regex;


window.onload = start;

function start() {
    document.getElementById('enviar').addEventListener('click', (e) => {
        let check = confirm("¿Enviar Formulario?");
        cont++;

        set_cookie("intentos", intentos, 1);

        document.getElementById('intentos').innerHTML = "Intentos de envío: " + cont;

        if (check) {
            if (checkCompleteName() && checkAge() && checkNIF() && checkEmail() && checkState() && checkDate() && checkPhone() && checkHour()) {
                alert('Correct!');
            } else {
                alert('You may check Something!')
                e.preventDefault();
            }
        } else {
            e.preventDefault();
        }
    });

    let name = document.getElementById("nombre");
    let surname = document.getElementById("apellidos");

    name.addEventListener('blur', (e) => {
        let val = e.target.value;
        name.value = val.toUpperCase();
    })

    surname.addEventListener('blur', (e) => {
        let val = e.target.value;
        surname.value = val.toUpperCase();
    })
}

function checkCompleteName() {
    let name = document.getElementById("nombre");
    let surname = document.getElementById("apellidos");
    regex = /^[a-zA-Z \u00C0-\u00ff]+$/; //Esta expresión regular me permite introducir tanto mayúsculas, mínisculas y espacios para validar nombre y apellidos, pero no números.

    if (!regex.test(name.value)) {
        error(name);
        document.getElementById("errores").innerHTML = "|| ERROR || El campo nombre tiene un formato erróneo.";
        return false;
    } else {
        if (!regex.test(surname.value)) {
            error(surname);
            document.getElementById("errores").innerHTML = "|| ERROR || El campo apellidos tiene un formato erróneo.";
            return false;
        } else {
            clear(nombre);
            clear(apellidos);
            return true;
        }
    }
}

function checkAge() {
    let age = document.getElementById("edad");
    regex = /^([0-9]{1,2})$|^([1][0][0-5])$/; //Esta expresión regular solo me permite introducir dos tipos de formato de edad, o bien uno del 0 al 99 o bien del 100 al 105, cualquier otro número o letra no lo coge

    if (!regex.test(age.value)) {
        error(age);
        document.getElementById("errores").innerHTML = "|| ERROR || La edad debe ser un número entero positivo entre 0 y 105";
        return false;
    } else {
        clear(age);
        return true;
    }
}

function checkNIF() {
    let nif = document.getElementById("nif");
    regex = /(\d{8})([-])([A-Z]{1})/; //Esta expresión regular permite que el usuario solo pueda introducir 8 dígitos del 0 al 9 , un guión y una letra mayúscula. Cualquier otro formato no lo admite.

    if (!regex.test(nif.value)) {
        error(nif);
        document.getElementById("errores").innerHTML = "|| ERROR || El campo NIF tiene un formato erróneo.";
        return false;
    } else {
        clear(nif);
        return true;
    }
}

function checkEmail() {
    let email = document.getElementById("email");
    regex = /^([a-zA-Z0-9\.]+)([\@])([a-z]{1,50}[\.])([a-z]{2,3})$/; //Esta expresión regular es la típica para cualquier correo electrónico, teniendo sus caracteres delante del arroba, 
                                                                    //el arroba, un punto y 2 o 3 letras de la A a la Z

    if (!regex.test(email.value)) {
        error(email);
        document.getElementById("errores").innerHTML = "|| ERROR || El campo e-mail tiene un formato erróneo.";
        return false;
    } else {
        clear(email);
        return true;
    }
}

function checkState() {
    let select = document.getElementById("provincia");

    if (select.value == "0") {
        error(select);
        document.getElementById("errores").innerHTML = "|| ERROR || Debe seleccionar una provincia.";
        return false;
    } else {
        clear(select);
        return true;
    }
}

function checkDate() {
    let date = document.getElementById("fecha");
    regex = /^([0-3][0-9])[-/]([0-1][0-9])[-/]([0-9]{4})$/; //Aquí solo permite introducir el formato con: 1 numero del 0 al 3 + un número del 0 al 9 + un guión o una barra 
                                                            //+ un número del 0 al 1 + un número del 0 al 9 + un guión o una barra + 4 números del 0 al 9

    if (!regex.test(date.value)) {
        error(date);
        document.getElementById("errores").innerHTML = "|| ERROR || El campo fecha tiene un formato erróneo.";
        return false;
    } else {
        clear(date);
        return true;
    }
}

function checkPhone() {
    let phone = document.getElementById("telefono");
    regex = /^(\d{9})$/; // Este es muy simple, lo único que acepta son 9 dígitos del 0 al 9

    if (!regex.test(phone.value)) {
        error(phone);
        document.getElementById("errores").innerHTML = "|| ERROR || El campo teléfono tiene un formato erróneo.";
        return false;
    } else {
        clear(phone);
        return true;
    }
}

function checkHour() {
    let hour = document.getElementById("hora");
    regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; //Con esta expresión podemos representar la hora desde las 00:00 hasta las 23:59

    if (!regex.test(hour.value)) {
        error(hour);
        document.getElementById("errores").innerHTML = "|| ERROR || El campo hora tiene un formato erróneo.";
        return false;
    } else {
        clear(hour);
        return true;
    }
}

function error(element) {
    element.className = "error";
    element.focus();
}

function clear(element) {
    element.className = "";
}

function get_cookie(nombre) {
    let nom = nombre + "=";
    let array = document.cookie.split(";");

    for (let i = 0; i < array.length; i++) {
      let c = array[i];
      console.log(c);
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(nom) == 0) {
        return c.substring(nom.length);
      }
    }
    return "";
  }

let set_cookie = (nombre, valor, expiracion) => {
    if (get_cookie("contador") == "") {
        let d = new Date();
        d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
        expiracion = "expires=" + d.toUTCString();
        document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
    } else {
        let d = new Date();
        d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
        expiracion = "expires=" + d.toUTCString();
        document.cookie = nombre + "=" + (Number(get_cookie("contador"))+1) + ";" + expiracion + ";path=/";
    }
}
