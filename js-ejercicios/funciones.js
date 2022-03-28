'use strict'
//Crea una función que se llame renderKitten() que reciba como parámetros todos los datos que tenemos de un gatito (URL, descripción, nombre y raza). Esta función devuelve un string con todo el HTML que representa al gatito en la página

function renderKitten(kittenData) {
  
    return `<li class="card"><article><img class="card_img" src="${kittenData.image}" alt="gatito"/><h3 class="card_title">${kittenData.name}</h3><h4 class="card_race">${kittenData.race}</h4><p class="card_description">${kittenData.desc} </p></article></li>`;
  }
  