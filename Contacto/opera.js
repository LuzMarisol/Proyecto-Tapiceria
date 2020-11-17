

var nombre = document.getElementById('nombre');
var telefono = document.getElementById('telefono');
var descripcion = document.getElementById('descripcion');
var fecha = document.getElementById('fecha');
var enviarData = document.getElementById('btnEnviar');

//se conectar con la BD de Firebase
var dataBD = firebase.database().ref('cita').push();
enviarData.addEventListener('click', cita);
function cita(){
    dataBD.set({
        nombre: nombre.value,
        telefono: telefono.value,
        descripcion: descripcion.value,
        fecha: fecha.value,
    })
}
