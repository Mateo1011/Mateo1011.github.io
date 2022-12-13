//VALIDACIÓN DE REGISTRAR

var attempt = 5; // Variable contador de intentos.

function validate2() {

    var primer_nombre = document.getElementById("primer_nombre").value;
    var segundo_nombre = document.getElementById("segundo_nombre").value;
    var primer_apellido = document.getElementById("primer_apellido").value;
    var segundo_apellido = document.getElementById("segundo_apellido").value;
    var tipo_identificacion = document.getElementById("tipo_identificacion").value;
    var numero_identificacion = document.getElementById("numero_identificacion").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var crear_usuario = document.getElementById("crear_usuario").value;
    var crear_contraseña = document.getElementById("crear_contraseña").value;
    var confirmar_contraseña = document.getElementById("confirmar_contraseña").value;



    if (primer_nombre == "")
        alert("Por favor, ingresa el primer nombre")

    if (segundo_nombre == "")
        alert("Por favor, ingresa el segundo nombre")

    if (primer_apellido == "")
        alert("Por favor, ingresa el primer apellido")

    if (segundo_apellido == "")
        alert("Por favor, ingresa el segundo apellido")

    if (tipo_identificacion == "")
        alert("Por favor, ingresa el tipo de identificacion")

    if (numero_identificacion == "")
        alert("Por favor, ingresa el numero de identificacion")

    if (direccion == "")
        alert("Por favor, ingresa la dirección")

    if (telefono == "")
        alert("Por favor, ingresa el telefono")

    if (correo == "")
        alert("Por favor, ingresa el correo electronico")

    if (crear_usuario == "")
        alert("Por favor,  crea un usuario")

    if (crear_contraseña == "")
        alert("Por favor, crea una contraseña")

    if (confirmar_contraseña == "")
        alert("Por favor, confirma la contraseña")



    if (primer_nombre == "Carlos" && segundo_nombre == "Mario" && primer_apellido  == "Franco" && segundo_apellido == "Meneses" && tipo_identificacion == "Cedula" && numero_identificacion == "1015992141" && direccion == "Cll 22" && telefono == "3134679310" && correo == "carlosfranco@gmail.com" && crear_usuario == "CarlosFranco" && crear_contraseña == "gorillaz00" && confirmar_contraseña == "gorillaz00") {
        alert("REGISTRO EXITOSO");
        window.location = "login_inventario.html"; // Redirecting to other page.
        return true;
    }
    else {
        attempt--;// decrementa el contador.
        alert("Lo siento le quedan " + attempt + " intentos;");
        // deshabilita cuando cumpla tres intentos es decir llegue a cero opciones
        if (attempt == 0) {
            document.getElementById("primer_nombre").disabled = true;
            document.getElementById("segundo_nombre").disabled = true;
            document.getElementById("primer_apellido").disabled = true;
            document.getElementById("segundo_apellido").disabled = true;
            document.getElementById("tipo_identificacion").disabled = true;
            document.getElementById("numero_identificacion").disabled = true;
            document.getElementById("direccion").disabled = true;
            document.getElementById("telefono").disabled = true;
            document.getElementById("correo").disabled = true;
            document.getElementById("crear_usuario").disabled = true;
            document.getElementById("crear_contraseña").disabled = true;
            document.getElementById("confirmar_contraseña").disabled = true;
            document.getElementById("register1").disabled = true;
            return false;
        }
    }
}


function validar() {

    var nombre = document.getElementById("nombre").value;
    var codigo = document.getElementById("codigo").value;



    if (nombre == "")
        alert("Por favor, ingresa un nombre")

    if (codigo == "")
        alert("Por favor, ingresa el sodigo")


    if (nombre == null || valor.length == 0 || /^\s+$/.test(valor)) {
        return false;
    }
}

//VALIDACIÓN DE INICIO SESIÓN

var attempt =5; // Variable contador de intentos.

function validate(){

var usuario = document.getElementById("usuario").value;
var contraseña = document.getElementById("contraseña").value;



if(usuario=="")
    alert("Por favor, ingresa el Usuario")
    
if(contraseña=="")
    alert("Por favor, ingresa la contraseña")


if ( usuario == "CarlosFranco" && contraseña == "gorillaz00" )
{
alert ("INGRESO EXITOSO");
window.location = "perfil_inventario.html"; // Redirecting to other page.
return true;
}
else{
attempt --;// decrementa el contador.
alert("Lo siento le quedan "+attempt+" intentos;");
// deshabilita cuando cumpla tres intentos es decir llegue a cero opciones
if( attempt == 0){
document.getElementById("usuario").disabled = true;
document.getElementById("contraseña").disabled = true;
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