console.log("hola");
//Inicializar la base de datos
var config = {
    apiKey: "AIzaSyCtJItBB0cj-9b0xPO6KdgoEPOZQwHaIpw",
    authDomain: "tapiceriaacuario-b469e.firebaseapp.com",
    databaseURL: "https://tapiceriaacuario-b469e.firebaseio.com",
    storageBucket: "tapiceriaacuario-b469e.appspot.com",
};

var nombre = document.getElementById('cliente');
var direccion = document.getElementById('direcc');
var email = document.getElementById('email');

firebase.initializeApp(config);
var database = firebase.database();
var referencia = database.ref("facturacion");
var data = sessionStorage.getItem('key');
var enlace = database.ref("productos");

firebase.database().ref("facturacion").child(data).once('value').then(function (snapshot) {
    var dato = snapshot.val();
    document.getElementById('cliente').innerHTML = "<span>CLIENTE</span>" + dato.nombre;
    document.getElementById('direcc').innerHTML = "<span>DIRECCION</span>" + dato.direccion;
    document.getElementById('email').innerHTML = "<span>EMAIL</span>" + dato.correo;
})

var data2 = sessionStorage.getItem('clavecarrito');


firebase.database().ref("productos").child(data2).child("carrito").once('value').then(function (snapshot) {
    var data = snapshot.val();
    var visualizarP;
    for (var k in data) {
        firebase.database().ref("Producto").child(data[k].clave).once('value').then(function (snapshot2) {
            var datt = snapshot2.val();
            var total = data[k].cantidad * datt.precio;
            var visualizarP = document.getElementById("datos").innerHTML;
            visualizarP += '<tr>';
            visualizarP += '<td>' + datt.nombre + '</td>';
            visualizarP += '<td>' + datt.descripcion + '</td>';
            visualizarP += '<td>' + datt.precio + '</td>';
            visualizarP += '<td>' + data[k].cantidad + '</td>';
            visualizarP += '<td>' + total + '</td>';
            visualizarP += '</tr>';
            document.getElementById("datos").innerHTML = visualizarP
        });
    }
});