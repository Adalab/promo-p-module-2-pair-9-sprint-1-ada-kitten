//almacenar la información de cada gatito
'use strict';

const listElement= document.querySelector(".list"); 

const kittenImage1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName1 = "Anastacio";
const nameUpperCase1 = kittenName1.toUpperCase();
const kittenDesc1 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace1 = "British Shorthair";


const kittenImage2 = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" ;
const kittenName2 = "Fiona";
const nameUpperCase2 = kittenName2.toUpperCase();
const kittenDesc2 =
  "Ruiseño, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace2 = "British Shorthair";

const kittenImage3 = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenName3 = "Cielo";
const nameUpperCase3 = kittenName3.toUpperCase();
const kittenDesc3 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace3 = "British Shorthair";


//interpola los variables creadas anteriormente en variable con el li de cada gatito.
function renderKitten(url, desc, name, race) {
  console.log('michi');
  
  return `<li class="card"><article><img class="card_img" src="${url}" alt="gatito"/><h3 class="card_title">${name}</h3><h4 class="card_race">${race}</h4><p class="card_description">${desc} </p></article></li>`;
}