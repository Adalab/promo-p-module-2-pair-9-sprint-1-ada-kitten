'use strict'
//Agrega un evento para cuando damos click en el icono "+"
//Agrega dentro de este evento el código que muestra u oculta el formulario dependiendo de su estado actual.

item.addEventListener("click", (event) =>{
  event.preventDefault();
  formElement.classList.toggle('collapsed');
}); //toggle cuando la das la pone o la quita (como add / remove) 


//En este ejercicio vamos a validar el caso de que la usuaria le dé clic al botón Añadir y no haya rellenado lo valores de la foto, nombre y descripción de manera obligatoria, la raza no es un campo obligatorio a insertar

const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const labelMesageError = document.querySelector(".js-label-error");


const button = document.querySelector('.js-btn-add');
button.addEventListener("click", (event) =>{
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

//Dentro del evento click del botón Añadir obtén los valores almacenados en los inputs y verifica si esos valores son distintos de ""; a. Si son distintos de "" no hacéis nada. b. Si los valores son "" entonces mostrar el mensaje "Debe rellenar todos los valores"

  if (valueDesc === "" && valuePhoto === "" && valueName === "") {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
    console.log('Debe rellenar todos los valores');
  } else {}
});

//Haz el código necesario para ocultar la sección del formulario de añadir un nuevo gatito cuando el usuario de clic en el botón cancelar. Recuerda también limpiar los valores de los inputs
const cancel = document.querySelector('.js-button-cancel');
cancel.addEventListener("click", (event) =>{
  event.preventDefault();
  formElement.classList.add('collapsed');
});