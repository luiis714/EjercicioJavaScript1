function numeroPrimo(){
    var num = prompt("Escribe un número entero: ");

    //Si el resto de dividir entre 2 es 0, el número es PAR. Sino es IMPAR
    if((num%2) === 0){
        alert("El número introducido es PAR");
    }
    else{
        alert("El número introducido es IMPAR");
    }
}

function palindromo(){
    var frase = prompt("Escribe una frase: ");

    //Lo paso a minusculas y quito espacios y signos de puntuación con replace(/[\W_]/g,"")
    frase = frase.toLowerCase().replace(/[\W_]/g,"");

    //Convierto en array con split, le doy la vuelta y con join lo convierto a String
    var nuevaFrase = frase.split("").reverse().join("");

    //Compruebo si son iguales
    if(frase === nuevaFrase){
        alert("Es un palindromo");
    }
    else{
        alert("NO es un palindromo");
    }
}

function pulsaBtn(n){
    document.getElementById("muestra_resultado").innerHTML = "Se ha pulsado el botón " + n;
    /*//Este bloque por si quieres hacer diferentes funciones dependiendo del botón pulsado
    switch(n){
        case 1:
            document.getElementById("muestra_resultado").innerHTML = "Se ha pulsado el botón 1";
            //document.write("Se ha pulsado el botón 1");
        break;
        case 2:
            document.getElementById("muestra_resultado").innerHTML = "Se ha pulsado el botón 2";
            //document.write("Se ha pulsado el botón 2");
        break;
        case 3:
            document.getElementById("muestra_resultado").innerHTML = "Se ha pulsado el botón 3";
            //document.write("Se ha pulsado el botón 3");
        break;
        default:
            document.getElementById("muestra_resultado").innerHTML = "No se que botón se ha pulsado";
            //document.write("No se que botón se ha pulsado");
    }*/
}

function muestraReverse(){

    var txt = document.getElementById("txt_entrada").value;
    //Convierto a array, le doy la vuelta y lo vuelvo a convertir a String
    alert(txt.split("").reverse().join(""));

}