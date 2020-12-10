// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyA0vYkV2QjpIs5mASCFtT0E_a9Bd7R0si4",
    authDomain: "tapiaqua-c3b3e.firebaseapp.com",
    databaseURL: "https://tapiaqua-c3b3e.firebaseio.com",
    storageBucket: "tapiaqua-c3b3e.appspot.com",
    projectId: "tapiaqua-c3b3e"
  });
  
  var db = firebase.firestore();

//agregar datos

function guardar(){
    var nombre = document.getElementById('nombre').value;
    var descripcion = document.getElementById('descripcion').value;
    var cantidad = document.getElementById('cantidad').value;
    var precio = document.getElementById('precio').value;

    db.collection("Producto").add({
        nombre: nombre,
        descripcion: descripcion,
        cantidad: cantidad,
        precio: precio
    })
    .then(function() {
        document.getElementById('nombre').value = '';
        document.getElementById('descripcion').value = '';
        document.getElementById('cantidad').value = '';
        document.getElementById('precio').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


//Leer Datos
var tabla = document.getElementById('tabla');
db.collection("Producto").get().then((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().descripcion}</td>
        <td>${doc.data().cantidad}</td>
        <td>${doc.data().precio}</td>
        </tr>
        `
        
        
             
    });
});