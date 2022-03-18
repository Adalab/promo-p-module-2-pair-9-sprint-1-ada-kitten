"use strict"; 
console.log ('Hola');
const formElement = document.querySelector('.new-form');
formElement.classList.remove('collapsed');

const listElement= document.queryselector(".js-list");
const content1 = ' <li class="card"><article><img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito"/><h3 class="card_title">Anastacio</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! </p> </article></li>';

const content2 = ' <li class="card"><article><img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito"/><h3 class="card_title">Fiona</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! </p> </article></li>';

const content3 = ' <li class="card"><article><img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito"/><h3 class="card_title">Cielo</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! </p> </article></li>';

listElement.innerHTML= content1;

