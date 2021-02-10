var info1 ="";
var info2 ="";
var st_slc = document.getElementById('st_slc');


document.getElementById('sv_btn').addEventListener("click", () => {
    let pk_input = document.getElementById('pk_input').value;
    let vl_input = document.getElementById('vl_input').value;
    let st_slc_op = st_slc.options[st_slc.selectedIndex].value;

    if (pk_input == "" || vl_input == "") {
        if (pk_input == "" && vl_input != "") {
            window.alert("Debe rellenar el campo CLAVE");
        } else if (pk_input != "" && vl_input == "") {
            window.alert("Debe rellenar el campo VALOR");
        } else {
            window.alert("Debe rellenar el campo CLAVE y VALOR");
        }
    } else {
        let pk2 = document.getElementById('pk_input').value;
        let vl2 = document.getElementById('vl_input').value;

        if (st_slc_op == "LOCAL") {
            localStorage.setItem(pk2, vl2);
            info1 = "CLAVE: " + pk2 + " | VALOR: " + localStorage.getItem(pk2);
            document.getElementById('lc_area').innerHTML = info1;

        } else if (st_slc_op == "SESIÓN") {
            sessionStorage.setItem(pk2, vl2);
            info2 = "CLAVE: " + pk2 + " | VALOR: " + sessionStorage.getItem(pk2);
            document.getElementById('ss_area').innerHTML = info2;
        }
    }
});

document.getElementById('rf_btn').addEventListener("click", () => {
    let st_slc_op = st_slc.options[st_slc.selectedIndex].value;

    if (st_slc_op == "LOCAL") {
        document.getElementById('lc_area').innerHTML = info1;
    } else if (st_slc_op == "SESIÓN") {
        document.getElementById('ss_area').innerHTML = info2;
    }
});

document.getElementById('dlt_btn').addEventListener("click", () => {
    let st_slc_op = st_slc.options[st_slc.selectedIndex].value;

    if (st_slc_op == "LOCAL") {
        if(document.getElementById('lc_area').innerHTML==""){
            window.alert("No hay ningún dato en el almacenamiento de LOCAL, por favor, introduzca un par CLAVE/VALOR");
        }else{
            document.getElementById('pk_input').value = "";
            document.getElementById('vl_input').value = "";
            document.getElementById('lc_area').innerHTML = "";
        }
    } else if (st_slc_op == "SESIÓN") {
        if(document.getElementById('ss_area').innerHTML==""){
            window.alert("No hay ningún dato en el almacenamiento de SESIÓN, por favor, introduzca un par CLAVE/VALOR");
        }else{
            document.getElementById('pk_input').value = "";
            document.getElementById('vl_input').value = "";
            document.getElementById('ss_area').innerHTML = "";
        }
    }
});

document.getElementById('cpt_btn').addEventListener("click", () => {
    if (typeof (Storage) !== "undefined") {
        document.getElementById('show_all').innerHTML = "Este navegador acepta el almacenamiento local o por sesión";
    } else {
        document.getElementById('show_all').innerHTML = "Este navegador no acepta el almacenamiento local o por sesión";
    }
});
