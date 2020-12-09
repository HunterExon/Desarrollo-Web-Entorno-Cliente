let dice = 0;
let regex;

window.onload = start;

function start() {
    document.getElementById('send').addEventListener('click', (e) => {
        let check = confirm("¿Seguro que has terminado?");

        dice = checkCookie();
        
        document.getElementById('last_dice').innerHTML = "Tirada: " + cont;
        clearAll();

        if (check) {
            if (checkName() && checkAge() && checkSkill() && checkWound() && checkRol() && checkPass()) {
                alert('¡Correcto!');
            } else {
                alert('Hay algo que revisar')
                e.preventDefault();
            }
        } else {
            e.preventDefault();
        }
    });
}

function checkName() {
    let name = document.getElementById("name");

    regex = /^[a-zA-Z \u00C0-\u00ff]+$/;

    if (!regex.test(name.value)) {
        error(name);
        document.getElementById("error").innerHTML = "|| ERROR || El campo nombre tiene un formato erróneo.";
        return false;
    } else {
        correct(name);
        return true;
    }
}

function checkAge() {
    let age = document.getElementById("age");
    regex = /^([1-7]{1}[0-9]{3})$|^([7-9][0-9][0-9])$|^([8][0][0][0])$/;

    if (!regex.test(age.value)) {
        error(age);
        document.getElementById("error").innerHTML = "|| ERROR || La edad debe ser un número entre 700 y 8000";
        return false;
    } else {
        correct(age);
        return true;
    }
}

function checkSkill() {
    let skill = document.getElementById("skill");
    regex = /^([MSTWA])$|^([WB][S])$|^([L][d])$|^([S][v])/;

    if (!regex.test(skill.value)) {
        error(skill);
        document.getElementById("error").innerHTML = "|| ERROR || El campo Habilidad debe ser una de estas opciones: M WS BS S T W A Ld Sv.";
        return false;
    } else {
        correct(skill);
        return true;
    }
}

function checkWound() {
    let wound = document.getElementById("wound");
    regex = /^([F]([>=<]|[x][2])[R][\d][\d])$/;

    if (!regex.test(wound.value)) {
        error(wound);
        document.getElementById("error").innerHTML = "|| ERROR || El campo Tirada para Herir debe tener este formato: F('x2' '>' '=' '<')R(00-99)";
        return false;
    } else {
        correct(wound);
        return true;
    }
}

function checkRol() {
    let rol = document.getElementById("rol");

    if (rol.value == "0") {
        error(rol);
        document.getElementById("errores").innerHTML = "|| ERROR || Debe seleccionar un rol.";
        return false;
    } else {
        correct(rol);
        return true;
    }
}

function checkPass() {
    let pass = document.getElementById("pass");
    regex = /^(^([A-Z]{2})([^a-zA-Z\d:])([a-zA-Z]{8,})([#])[\d{2}])$/;

    if (!regex.test(pass.value)) {
        error(pass);
        document.getElementById("error").innerHTML = "|| ERROR || La contraseña debe ";
        return false;
    } else {
        clearAll(pass);
        return true;
    }
}

function correct(element) {
    element.className = "correct";
    element.focus();
}

function error(element) {
    element.className = "error";
    element.focus();
}

function clearAll() {
    inputfocused.value = "";
}

function setCookie(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    var name = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var number = getCookie("number");
    if (number == "") {
        number = Math.floor(Math.random() * (1 - 6));
        if (number != "" && number != null) {
            setCookie("number", number, 365);
        }
    }
    return number;
}

function clearAll() {
    var focus = "";

    var elements = document.querySelectorAll("input");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("focus", function () {
            focus = this;
        });
    }
}