window.addEventListener("load", iniciar);

var docJSON;

/* INICIAR TODO */ 
function iniciar() {
  document.getElementById("fetch").addEventListener("click", mostrar_fetch);
  document.getElementById("xml").addEventListener("click", mostrar_xml);
}
/* INICIAR TODO */ 

/* MOSTRAR CON EL XML */ 
function mostrar_xml() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      docJSON = JSON.parse(xhr.responseText);
      cargarJSON(docJSON);
    }
  }
  xhr.open("GET", "listar_armas.php", true);
  xhr.send();
}
/* MOSTRAR CON EL XML */ 

/* MOSTRAR CON EL FETCH */ 
function mostrar_fetch() {
  fetch("listar_armas.php")
    .then((response) => response.json())
    .then((data) => {
      docJSON = data;
      cargarJSON(data);
    })
    .catch((err) => console.log(err));
}
/* MOSTRAR CON EL FETCH */

/* MOSTRAR LA TABLA */
function cargarJSON(docJSON) {
  let table = "<table>";
  table += "<tr><th>NOMBRE</th><th>IMAGEN</th><th>DESCRIPCIÓN</th><th>BANDO</th></tr>";

  for (arma of docJSON) {
      table += "<tr><td>" + arma.nombre + "</td>";

      table += "<td>";
      if (arma.imagen == "springfield.jpg") {
        table += innerHTML = '<img src="springfield.jpg" />';
      } else if (arma.imagen == "browning.jpg") {
        table += innerHTML = '<img src="browning.jpg" />';
      } else if (arma.imagen == "mp40.jpg") {
        table += innerHTML = '<img src="mp40.jpg" />';
      } else if (arma.imagen == "mp42.jpg") {
        table += innerHTML = '<img src="mp42.jpg" />';
      } else if (arma.imagen == "m1garand.jpg") {
        table += innerHTML = '<img src="m1garand.jpg" />';
      } else if (arma.imagen == "panzerschreck.jpg") {
        table += innerHTML = '<img src="panzerschreck.jpg" />';
      }
      table += "</td>";
  
      table += "<td>" + arma.descripcion + "</td>";
  
      table += "<td>";
      if(arma.bando == "1"){
        table += innerHTML = 'Aliados';
      }else if(arma.bando=="2"){
        table += innerHTML = 'Eje';
      }
      table += "</td></tr>";
  }
  document.getElementById("tabla").innerHTML = table;
}
/* MOSTRAR LA TABLA */