/*
Realiza un script que pida una cadena de texto (mediante input o prompt) y la muestre en un elemento 
HTML (p o div, como quieras). 

En otro elemento HTML deberá mostrarla convirtiendo los caracteres en mayúscula o minúscula de manera 
completamente aleatoria, y, además, entre carácter y carácter, imprima un guión, y además elimine todos
los espacios posibles (internos y externos). 

Por ejemplo:
“Si quiere vivir, venga conmigo”
“s-I-q-U-I-e-r-e-v-I-v-I-R-,-V-e-N-G-a-c-O-N-m-i-G-O”
*/

function check() {
    let secuence = document.getElementById("secuence").value.trim();

    for (let i = 0; i<secuence.length;i++) {
        if (secuence.charAt(i) != " "){
            if(Math.floor(Math.random()*3+1)%2==0){
                document.getElementById("data").innerHTML += secuence.charAt(i).toLowerCase();
            }else{
                document.getElementById("data").innerHTML += secuence.charAt(i).toUpperCase();
            }
            if(i<secuence.length-1){
                document.getElementById("data").innerHTML +="-";
            }
        }
    }
}

