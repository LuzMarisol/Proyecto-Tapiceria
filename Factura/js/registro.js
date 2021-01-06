var asunto = document.getElementById('asunto');
var nombre = document.getElementById('nombre');
var direccion = document.getElementById('direccion');
var correo = document.getElementById('correo');
var enviarData = document.getElementById('btnregistrar');

//Guardar los datos del formulario en la base de datos
var dataBD = firebase.database().ref('facturacion').push();
enviarData.addEventListener('click', facturacion);
function facturacion() {
    dataBD.set({
        clave: dataBD.getKey(),
        nombre: nombre.value,
        direccion: direccion.value,
        correo: correo.value,
    })
    sessionStorage.setItem('key', dataBD.getKey());
    var data = sessionStorage.getItem('key');
    console.log("clave de registro " + data);

    alert("Datos registrados correctamente");
    location.href = "/Factura/index.html";
}

function setClave(clave) {
    console.log(clave);
    document.getElementById("clave").value;
}
