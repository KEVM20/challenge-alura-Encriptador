//a -> ai
//e -> enter
//i -> imes
//o -> ober
//u -> ufat

function encriptar() {

    var texto = document.getElementById("ingresar-texto").value.toLowerCase();//convierte todo mensaje que se haya ingresa en mayusculas a minuscula

    var textoCifrado = texto.replace(/e/igm, "enter");
    var textoCifrado = textoCifrado .replace(/o/igm, "ober");
    var textoCifrado = textoCifrado .replace(/i/igm, "imes");
    var textoCifrado = textoCifrado .replace(/a/igm, "ai");
    var textoCifrado = textoCifrado .replace(/u/igm, "ufat");

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("aviso").style.display = "none";
    document.getElementById("instruccion").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}   

function desencriptar() {
        var texto = document.getElementById("ingresar-texto").value.toLowerCase();//convierte todo mensaje que se haya ingresa en mayusculas a minuscula

        var textoCifrado = texto.replace(/enter/igm, "e");
        var textoCifrado = textoCifrado .replace(/ober/igm,"o");
        var textoCifrado = textoCifrado .replace(/imes/igm, "i");
        var textoCifrado = textoCifrado .replace(/ai/igm, "a");
        var textoCifrado = textoCifrado .replace(/ufat/igm, "u");

        document.getElementById("muñeco").style.display = "none";
        document.getElementById("aviso").style.display = "none";
        document.getElementById("instruccion").innerHTML = textoCifrado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#instruccion");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado");

}

