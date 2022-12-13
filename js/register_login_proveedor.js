//VALIDACIÓN DE REGISTRAR

var attempt = 5; // Variable contador de intentos.

function validate2() {

    var nombre_empresa = document.getElementById("nombre_empresa").value;
    var tipo_identificacion = document.getElementById("tipo_identificacion").value;
    var numero_identificacion = document.getElementById("numero_identificacion").value;
    var nombre_representante = document.getElementById("nombre_representante").value;
    var apellido_representante = document.getElementById("apellido_representante").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var crear_usuario = document.getElementById("crear_usuario").value;
    var crear_contraseña = document.getElementById("crear_contraseña").value;
    var confirmar_contraseña = document.getElementById("confirmar_contraseña").value;



    if (nombre_empresa == "")
        alert("Por favor, ingresa el nombre de empresa")

    if (tipo_identificacion == "")
        alert("Por favor, ingresa el tipo de identificacion")

    if (numero_identificacion == "")
        alert("Por favor, ingresa el numero de identificacion")

    if (nombre_representante == "")
        alert("Por favor, ingresa el nombre de representante")

    if (apellido_representante == "")
        alert("Por favor, ingresa el apellido de representante")

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



    if (nombre_empresa  == "Carnes Finas" && tipo_identificacion == "Nit" && numero_identificacion == "901405281-5" && nombre_representante  == "Samuel" && apellido_representante  == "Rodriguez" && direccion == "Cll 66" && telefono == "3134679310" && correo == "carnesfinas@gmail.com" && crear_usuario == "CarnesFinas" && crear_contraseña == "gorillaz61" && confirmar_contraseña == "gorillaz61") {
        alert("REGISTRO EXITOSO");
        window.location = "login_proveedor.html"; // Redirecting to other page.
        return true;
    }
    else {
        attempt--;// decrementa el contador.
        alert("Lo siento le quedan " + attempt + " intentos;");
        // deshabilita cuando cumpla tres intentos es decir llegue a cero opciones
        if (attempt == 0) {
            document.getElementById("nombre_empresa ").disabled = true;
            document.getElementById("tipo_identificacion ").disabled = true;
            document.getElementById("numero_identificacion ").disabled = true;
            document.getElementById("nombre_representante ").disabled = true;
            document.getElementById("apellido_representante ").disabled = true;
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

var attempt = 5; // Variable contador de intentos.

function validate() {

    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;



    if (usuario == "")
        alert("Por favor, ingresa el Usuario")

    if (contraseña == "")
        alert("Por favor, ingresa la contraseña")

    if (usuario == "CarnesFinas" && contraseña == "gorillaz61") {
        alert("INGRESO EXITOSO");
        window.location = "perfil_provedor.html"; // Redirecting to other page.
        return true;
    }
    else {
        attempt--;// decrementa el contador.
        alert("Lo siento le quedan " + attempt + " intentos;");
        // deshabilita cuando cumpla tres intentos es decir llegue a cero opciones
        if (attempt == 0) {
            document.getElementById("usuario").disabled = true;
            document.getElementById("contraseña").disabled = true;
            document.getElementById("submit").disabled = true;
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