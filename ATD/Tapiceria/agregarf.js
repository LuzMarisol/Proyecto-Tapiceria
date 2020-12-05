// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyA0vYkV2QjpIs5mASCFtT0E_a9Bd7R0si4",
    authDomain: "tapiaqua-c3b3e.firebaseapp.com",
    databaseURL: "https://tapiaqua-c3b3e.firebaseio.com",
    storageBucket: "tapiaqua-c3b3e.appspot.com",
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
storageRef = firebase.storage().ref();

imgDBRef = firebase.database().ref().child('UbiFTs');

function guardar() {
    var nombre = document.getElementById('nombre').value;
    var descripcion = document.getElementById('descripcion').value;
    var cantidad = document.getElementById('cantidad').value;
    var precio = document.getElementById('precio').value;
    foto = document.getElementById('foto');
    foto.addEventListener("change", subirFoto, false);

    firebase.database().ref('Producto/').push({
        Nombre: nombre,
        descripcion: descripcion,
        cantidad: cantidad,
        precio: precio
    }).then(function () {
        document.getElementById('nombre').value = '';
        document.getElementById('descripcion').value = '';
        document.getElementById('cantidad').value = '';
        document.getElementById('precio').value = '';
        subirFoto();
        window.alert('Completo');
    }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
}


function subirFoto() {
    var imgSub = foto.files[0];

    var uploadTask = storageRef.child('FTSFB/' + imgSub.name).put(imgSub);

    uploadTask.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
        }
    }, function (error) {
        window.alert('hubo un error');
    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL);
            agregarBD(imgSub.name, downloadURL);
        });
    });

    function agregarBD(nameImg, downloadURL) {
        imgDBRef.push({ nombre: nameImg, url: downloadURL });
    }
}