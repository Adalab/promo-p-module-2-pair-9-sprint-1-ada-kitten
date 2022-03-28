'use strict'
const formElement = document.querySelector('.new-form');
 
 /*if (formElement.classList.contains('collapsed')) {
  formElement.classList.remove('collapsed');
} else {
  formElement.classList.add('collapsed');
} */


const item = document.querySelector('.js-item');

function handleClickNewCatForm(event) {
  event.preventDefault();
  formElement.classList.toggle('collapsed');
}
item.addEventListener('click', handleClickNewCatForm);




const kittenImage1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName1 = "Anastacio";
const nameUpperCase1 = kittenName1.toUpperCase();
const kittenDesc1 =
  "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenRace1 = "British Shorthair";

const listElement= document.querySelector(".list");
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

/*function renderKitten(url, desc, name, race) {
  console.log('michi');
  
  return `<li class="card"><article><img class="card_img" src="${url}" alt="gatito"/><h3 class="card_title">${name}</h3><h4 class="card_race">${race}</h4><p class="card_description">${desc} </p></article></li>`;
}*/

/*
listElement.innerHTML += renderKitten(kittenImage1, kittenDesc1, kittenName1, kittenRace1);
listElement.innerHTML += renderKitten(kittenImage2, kittenDesc2, kittenName2, kittenRace2);
listElement.innerHTML += renderKitten(kittenImage3, kittenDesc3, kittenName3, kittenRace3); */



/*item.addEventListener("click", (event) =>{
  event.preventDefault();
  formElement.classList.toggle('collapsed');
}); */ //toggle cuando la das la pone o la quita (como add / remove) 

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

  if (valueDesc === "" && valuePhoto === "" && valueName === "") {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
    console.log('Debe rellenar todos los valores');
  } else {}
});


const race = document.querySelector('.js-race ');
const search = document.querySelector('.js-button');
const js_in_search_desc = document.querySelector('.js_in_search_desc');
const error = document.querySelector('.js-error');

search.addEventListener ("click", (event) =>{
  event.preventDefault();
    const valueRace = race.value;
    const valueJs_in_search_desc = js_in_search_desc.value;
    if (valueRace === "" || valueJs_in_search_desc === "")
    {error.innerHTML = 'Debe rellenar todos los valores'} else {}
  });

  const cancel = document.querySelector('.js-button-cancel');
  cancel.addEventListener("click", (event) =>{
    event.preventDefault();
    formElement.classList.add('collapsed');
  });


/*const listElement= document.querySelector(".list");*/

function renderKitten(kittenData) {
  
  return `<li class="card"><article><img class="card_img" src="${kittenData.image}" alt="gatito"/><h3 class="card_title">${kittenData.name}</h3><h4 class="card_race">${kittenData.race}</h4><p class="card_description">${kittenData.desc} </p></article></li>`;
}


const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;



//ejemplo de un objeto con la información del primer gatito
const kittenData_1 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

const kittenData_2 = {
  image: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'Fiona',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};


const kittenData_3 = {
  image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'Cielo',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

/*if( kittenDesc1.includes(descrSearchText)  ) {
  const content1 = renderKitten(kittenData_1);
  listElement.innerHTML = content1;
}


if( kittenDesc2.includes(descrSearchText)  ) {
const content2 = renderKitten(kittenData_2);
listElement.innerHTML = listElement.innerHTML + content2;
}


if( kittenDesc3.includes(descrSearchText)  ) {
const content3 = renderKitten(kittenData_3);
listElement.innerHTML = listElement.innerHTML + content3;
}*/
