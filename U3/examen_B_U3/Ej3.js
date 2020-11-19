/*
Un arquitecto de dudosa entereza moral, pretende vender parcelas comisionando a acaudalados
incautos. En la base de datos del arquitecto, las parcelas y sus compradores están codificadas
de la siguiente manera:

municipio:cod_parcela@nombre|apellido1|apellido2

Donde municipio es el municipio al que pertenece la parcela, cod_parcela es el código catastral 
de la parcela compuesto de 4 letras y 4 números (en ese orden), nombre es el nombre del comprador, 
apellido1 su primer apellido y apellido2 el segundo.

Elabora el código en JavaScript para obtener por separado el municipio, la parcela (dividido el 
código en las letras y los números correspondientes), el nombre, y los apellidos (los dos juntos
y en una única línea). Cada uno debe presentarse en un elemento (p o div, como quieras) de HTML.

MUNICIPIO: Tomares

PARCELA:
-Letras:
-Números:

NOMBRE COMPLETO: Juan González Cabezuelo

Tomares:abcd1234@Juan|González|Cabezuelo


*/
function dividir () {
    let secuence = document.getElementById("secuence").value;
    let div0 = secuence.split("@");
    let div1 = div0[0].split(":");
    let div2 = div0[1].split("|");

    document.getElementById("municipio").innerHTML += div1[0];

    /*-------------------------------------------------------------*/

    function comprobar(cad){
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let cadena = cad;
        var contador = 0;

        for (let i = 0; i<letters.length;i++){
            for (let j = 0; j<cadena.length;j++) {
                if (letters.charAt(i) == cadena.charAt(j)){
                    contador += 1
                }
            }
        }
        return contador;
    }

    if(div1[1].length == 8){
        if(comprobar(div1[1].substr(0,4))==4){
            if(comprobar(div1[1].substr(4,8))==0){
                document.getElementById("parcela").innerHTML += div1[1];
                document.getElementById("parcela").innerHTML += "<br>"+"- Letras: "+div1[1].substr(0,4)+"<br>"+"- Números: "+div1[1].substr(4,8);;
            }else{
                document.write("ERROR - Parcela Incorrecta (Revise los 4 últimos números)<br>") 
            }
        }else{
            document.write("ERROR - Parcela Incorrecta (Revise las 4 primeras letras)<br>")
        }
    }else{
        document.write("ERROR - Parcela Incorrecta (Revise la longitud)<br>") 
    }

    /*-------------------------------------------------------------*/
    
    document.getElementById("nombre").innerHTML += div2[0];
    document.getElementById("apellidos").innerHTML += div2[1] + " " + div2[2];
}

