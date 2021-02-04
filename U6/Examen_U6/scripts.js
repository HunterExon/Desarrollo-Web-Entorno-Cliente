window.addEventListener("load", iniciar);

var docJSON;

function iniciar() {
    document.getElementById("xml").addEventListener("click", mostrar_xml);
    document.getElementById("fetch").addEventListener("click", mostrar_fetch);
    document.getElementById("modificar_datos").addEventListener("click", modificar_datos);
}

function mostrar_xml() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            docJSON = JSON.parse(xhr.responseText);
            cargarJSON(docJSON);
        }
    }
    xhr.open("GET", "https://covid-vacuna.app/data/latest.json", true);
    xhr.send();
}

function mostrar_fetch() {
    fetch("https://covid-vacuna.app/data/latest.json")
        .then((response) => response.json())
        .then((data) => {
            docJSON = data;
            cargarJSON(data);
        })
        .catch((err) => console.log(err));
}

function cargarJSON(docJSON) {
    document.getElementById("resultado").innerHTML = "Datos cargados de la WEB";

    let comunidades_select = "";

    let table = "<table>";
    table += "<tr><th>Comunidad</th><th>D.Entregadas</th><th>D.Admin.</th><th>D.Completa</th><th>% Entregadas</th><th>% Pobl. Admin.</th><th>% Pobl. Completa</th></tr>";
    for (vacunacion of docJSON) {
        table += "<tr>";
        table += "<td>" + vacunacion.ccaa + "</td>";
        comunidades_select += "<option value='" + vacunacion.ccaa + "'>" + vacunacion.ccaa + "</option>";
        table += "<td>" + vacunacion.dosisEntregadas + "</td>";
        table += "<td>" + vacunacion.dosisAdministradas + "</td>";
        table += "<td>" + vacunacion.dosisPautaCompletada + "</td>";
        table += "<td>" + vacunacion.porcentajeEntregadas + "</td>";
        table += "<td>" + vacunacion.porcentajePoblacionAdministradas + "</td>";
        table += "<td>" + vacunacion.porcentajePoblacionCompletas + "</td>";
        table += "</tr>";
    }
    document.getElementById("tabla").innerHTML = table;
    document.getElementById("ccaa").innerHTML = comunidades_select;
}

function modificar_datos() {
    document.getElementById("resultado").innerHTML = "Comunidad actualizada";

    let ccaa = document.getElementById("ccaa").value;
    let dosisEntregadas = document.getElementById("dosisEntregadas").value;
    let dosisAdministradas = document.getElementById("dosisAdministradas").value;
    let dosisPautaCompletada = document.getElementById("dosisPautaCompletada").value;
    let porcentajeEntregadas = document.getElementById("porcentajeEntregadas").value;
    let porcentajePoblacionAdministradas = document.getElementById("porcentajePoblacionAdministradas").value;
    let porcentajePoblacionCompletas = document.getElementById("porcentajePoblacionCompletas").value;

    let object = {
        ccaa: ccaa,
        dosisEntregadas: dosisEntregadas,
        dosisAdministradas: dosisAdministradas,
        dosisPautaCompletada: dosisPautaCompletada,
        porcentajeEntregadas: porcentajeEntregadas,
        porcentajePoblacionAdministradas: porcentajePoblacionAdministradas,
        porcentajePoblacionCompletas: porcentajePoblacionCompletas,
    };

    let parametros = JSON.stringify(object);
    xhr.open("POST", "actualizar_comunidad.php", true);
    xhr.setRequestHeader(
        "application/json"
    );
    xhr.send("objeto=" + parametros);
}