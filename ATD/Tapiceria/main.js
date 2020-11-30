const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = document.querySelector('#reg-email').value;
    const pass = document.querySelector('#reg-pass').value;

    console.log(email, pass)
 
    console.log('subiendo')

    auth
        .createUserWithEmailAndPassword(email, pass)
        .then(userCreditial =>{
            //Limpia formulario
            signupForm.reset();

            //Cerrar la ventana
            $('#LoginModal').modal('hide')
            console.log('Creando usuario...')
        })
})

const singinFOrm = document.querySelector('#signin-form');

singinFOrm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const pass = document.querySelector('#login-pass').value;

    auth
        .signInWithEmailAndPassword(email, pass)
        .then(userCreditial =>{
            //Limpia formulario
            signupForm.reset();

            //Cerrar la ventana
            $('#LoginModal').modal('hide')
            console.log('Iniciando sesion...')
        })
})

const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('Cesion finalizada, vuelva pronto')
    })
})