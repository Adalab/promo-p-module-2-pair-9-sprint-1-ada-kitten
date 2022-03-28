//Utiliza la propiedad classList.remove("collapsed") para hacer visible el formulario;
"use strict"; 

const formElement = document.querySelector('.new-form');
 
if (formElement.classList.contains('collapsed')) {
  formElement.classList.remove('collapsed');
} else {
  formElement.classList.add('collapsed');
}