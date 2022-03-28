//Crea una variable kittenDataList que almacenará los objetos kittenData_1, kittenData_2, kittenData_3 que contienen la informacion de cada gatito. Usa las variables con objetos del ejercicio de ayer para crear este array

const kittenDataList = [
    {
    image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
    name: 'Anastacio',
    desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
    race: 'British Shorthair',},
    {
    image: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
    name: 'Fiona',
    desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
    race: 'British Shorthair',
    },
    {
    image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
    name: 'Cielo',
    desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
    race: 'British Shorthair'
    },
  ];
  
  //Crea una nueva función renderKittenList(kittenDataList) que reciba como parámetro el listado de gatitos que creamos kittenDataList, y que utilice la función renderKittenList(kittenData)
  function renderKittenList(kittenDataList) {
    for (let i=0; i < kittenDataList.length; i ++) {
      listElement.innerHTML += renderKitten(kittenDataList[i]);
    }
  }
  renderKittenList(kittenDataList);