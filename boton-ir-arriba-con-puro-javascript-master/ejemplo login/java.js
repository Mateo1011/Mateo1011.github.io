var attempt =5; // Variable contador de intentos.

function validate(){

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var rol = document.getElementById("rol").value;


if(username=="")
    alert("Por favor, ingresa un nombre")
    
if(password=="")
    alert("Por favor, ingresa un ")

 if(rol=="")
        alert("Por favor, ingresa un rol")
if ( username == "LAURA" && password == "LAURA123" && rol == "v")
{
alert ("INGRESO EXITOSO");
window.location = "maquetacion.html"; // Redirecting to other page.
return true;
}
else{
attempt --;// decrementa el contador.
alert("Lo siento le quedan "+attempt+" intentos;");
// deshabilita cuando cumpla tres intentos es decir llegue a cero opciones
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("rol").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}


function validar(){

    var nombre = document.getElementById("nombre").value;
    var codigo = document.getElementById("codigo").value;
    
    
    
    if(nombre=="")
        alert("Por favor, ingresa un nombre")
        
        if(codigo=="")
        alert("Por favor, ingresa el sodigo")
    
    
    if( nombre == null || valor.length == 0 || /^\s+$/.test(valor) ) {
      return false;
    }
    
       }