
const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("name");
let divErrorNombre = document.getElementById("msjErrorNombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
let menu__categoria = document.getElementById("menu__categorias");

/*const quitarClaseError = () => {
    let listaNodos = document.querySelectorAll('.form-control');
    for (let i=0; i < listaNodos.length; i++){
        listaNodos[i].classList.remove('is-invalid');
    }
    /*let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    for (let i=0; i < listaNodosdiv.length; i++){
        listaNodosdiv[i].classList.remove('is-invalid');
    }}*/


/*const totalAPagar = () => {

    quitarClaseError();

    if (nombre.value === ""){
        alert("agrega nombre")
        //nombre.classList.add("is-invalid");
        //divErrorNombre.classList.add("propia");

        nombre.focus()
        return;
    }

}*/

const btnEnviar = document.getElementById('boton__resumen');

const validate = () => {
  
  //e.preventDefault();
  
  //const nombre = document.getElementById('usuario');
  //const direcciónEmail = document.getElementById('email');
  //quitarClaseError();
  if (nombre.value === "") {
    //alert("Por favor, escribe tu nombre de usuario.");
    const coso = document.getElementById('classnombre');
    const mensajeNombre = document.createElement('div');
    mensajeNombre.classList.add('mensajeestilo');
    mensajeNombre.innerText = '* Ingrese nombre';
    coso.append(mensajeNombre);

    nombre.focus();
    return false;
  }
  if (apellido.value === "") {
    //alert("Por favor, escribe tu correo electrónico");
    const coso = document.getElementById('classapellido');
    const mensajeApellido = document.createElement('div');
    mensajeApellido.classList.add('mensajeestilo');
    mensajeApellido.innerText = '* Ingrese apellido';
    coso.append(mensajeApellido);
    apellido.focus();
    return false;
  }
  //funcion para validar email
  const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  if (!emailValido(email.value)) {
    const coso = document.getElementById('correo');
    const mensajeCorreo = document.createElement('div');
    mensajeCorreo.classList.add('mensajeestilo');
    mensajeCorreo.innerText = '* Ingrese correo valido';
    coso.append(mensajeCorreo);
    
    email.focus();
    return false;
  }
  if ((cantidad.value == 0) || (isNaN(cantidad.value))) {
    const coso = document.getElementById('cantidad_div');
    const mensajeCantidad = document.createElement('div');
    mensajeCantidad.classList.add('mensajeestilo');
    mensajeCantidad.innerText = '* Ingrese cantidad';
    coso.append(mensajeCantidad);
    
    cantidad.focus();
    return false;
  }
  if (menu__categoria.value === 0) {
    const coso = document.getElementById('precio__categoria');
    const mensajeCategoria = document.createElement('div');
    mensajeCategoria.classList.add('mensajeestilo');
    mensajeCategoria.innerText = '* Ingrese cantidad';
    coso.append(mensajeCategoria);
   
    menu__categoria.focus();
    return false;
  }

  return true;
}

btnEnviar.addEventListener('click', validate);

