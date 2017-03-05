var divs=document.getElementById("mostrar");
var labels= document.getElementsByTagName("input");
var span= document.getElementsByTagName("span");
var titulo= document.getElementById("form-signin-heading");
var boton= document. getElementsByClassName("btn");
function traducir (){
  titulo.innerHTML= "Por favor inicia sesion";
  labels[0].placeholder="Correo Electronico";
  labels[1].placeholder="Contraseña";
  span[0].innerHTML="Recordar Datos";
  boton[0].innerHTML="Iniciar Sesion";
}
function imprimir(){
  var h1=document.createElement("h2");
  h1.innerHTML=" Datos del Formulario ";
  divs.appendChild(h1);
  var span=document.createElement("span");
  span.innerHTML="El correo Electronico ingresado es : </br>"+ labels[0].value + "<br>La clave ingresada es : </br>"+ labels[1].value;
  divs.appendChild(span);
}

traducir();
