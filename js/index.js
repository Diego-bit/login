//declarar variables para vincular objetos
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//generando eventos
formulario.addEventListener('submit', login);

function login(e) {
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal= password.value;

    if (usuarioVal == '' || passwordVal == '') {
        crearMensaje('Completa todos los campos', 'alert-danger');
        return;
  
   }

   if (localStorage.getItem('usuario')) {
       let objeto = JSON.parse(localStorage.getItem('usuario'));

       if (usuarioVal == objeto.usuario && passwordVal == objeto.contraseña) {
        crearMensaje('Succes', 'alert-success');
        localStorage.setItem('sesion','activa');
        setTimeout(function(){
window.open('inicio.html', '_self');
        },2000)
       }else{
        crearMensaje('Usuario o Contraseñas incorrecto', 'alert-danger');    

       }
   }else{
    crearMensaje('No se encuentra ningun registro', 'alert-danger'); 
   }

}