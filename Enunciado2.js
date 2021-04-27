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