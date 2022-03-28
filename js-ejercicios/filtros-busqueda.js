'use strict'

//En este ejercicio vamos a comenzar a implementar el filtro de búsqueda por descripción. Para ello, modifica el código existente
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

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


//Utiliza la función includes antes de añadir cada gatito para solo mostrar aquellos gatitos que contengan la palabra introducida por la usuaria
if( kittenDesc1.includes(descrSearchText)  ) {
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
}
