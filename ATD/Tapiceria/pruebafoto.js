// Set the configuration for your app
// TODO: Replace with your app's config object
var firebaseConfig = {
    apiKey: "AIzaSyA0vYkV2QjpIs5mASCFtT0E_a9Bd7R0si4",
    authDomain: "tapiaqua-c3b3e.firebaseapp.com",
    databaseURL: "https://tapiaqua-c3b3e.firebaseio.com",
    storageBucket: "tapiaqua-c3b3e.appspot.com",
    projectId: "tapiaqua-c3b3e"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
//var storage = firebase.storage();

window.onload = inicializar;
var foto;
var storageRef;
var imgDBRef;


function inicializar() {
    foto = document.getElementById('foto');
    foto.addEventListener("change", subirFoto, false);

    storageRef = firebase.storage().ref();

    imgDBRef = firebase.database().ref().child('UbiFTs');

    mostrarFotos();
}

function mostrarFotos(){
    imgDBRef.on('value', function(snapshot){
        var datos = snapshot.val();
        for(var key in datos){
            result += '<img width="200" class="img-thumbnail" src="' + datos[key].url + '"/>';
        }
        document.getElementById("ffb").innerHTML = result;
    })
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

    function agregarBD(nameImg, downloadURL){
        imgDBRef.push({ nombre: nameImg, url: downloadURL });
    }
}