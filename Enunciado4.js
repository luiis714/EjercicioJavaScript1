function muestraReverse(){

    var txt = document.getElementById("txt_entrada").value;
    //Convierto a array, le doy la vuelta y lo vuelvo a convertir a String
    alert(txt.split("").reverse().join(""));

}