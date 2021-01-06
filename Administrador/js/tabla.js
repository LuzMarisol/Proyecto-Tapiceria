console.log("hola");
//Inicializar la base de datos
var config = {
    apiKey: "AIzaSyCtJItBB0cj-9b0xPO6KdgoEPOZQwHaIpw",
    authDomain: "tapiceriaacuario-b469e.firebaseapp.com",
    databaseURL: "https://tapiceriaacuario-b469e.firebaseio.com",
    projectId: "tapiceriaacuario-b469e",
    storageBucket: "tapiceriaacuario-b469e.appspot.com",
    messagingSenderId: "252601545447",
    appId: "1:252601545447:web:91f3d7ebc51758f671e842",
    measurementId: "G-WJ3XVBRTZP"
};
firebase.initializeApp(config);

var database = firebase.database();

var referencia = database.ref("cita");

var cita = {};
var arr = [];
var agenCitas = "";

firebase.database().ref("cita").once('value').then(function (snapshot) {
    var data = snapshot.val();
    for (var k in data) {
        console.log( data[k].nombre);
        agenCitas += ' <tr >'; //inicia una  fila
        agenCitas += ' <td >';
        agenCitas += data[k].nombre + '</td>';

        agenCitas += ' <td >';
        agenCitas += data[k].telefono + '</td>';

        agenCitas += '<td> ';
        agenCitas += data[k].descripcion + '</td>';

        agenCitas +=  '<td  >';
        agenCitas += data[k].fecha + '</td>';
        agenCitas += ' </tr >'; //termina la fila 
    }
    var table = document.getElementById("tabla").innerHTML = agenCitas;
});