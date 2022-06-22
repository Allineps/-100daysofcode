const vegburger = document.getElementById('vegburger')    // alul a ertelmezes
const nav = document.getElementById('nav')

vegburger.addEventListener('click',function (Event){
  nav.classList.toggle('menuactive')
  vegburger.classList.toggle('fi-align-justify')
  vegburger.classList.toggle('fi-arrow-left')
})

// backendbol jon 
const products = [
  {
  name: 'Malna',
  picture:'malna.jpg',
  descreption: 'kezzel termelt bio',
  price: 3800,
  inStock: true,
},
{
  name: 'Afonya',
  picture:'afonya.jpg',
  descreption: 'kezzel termelt bio',
  price: 2500,
  inStock: true,

},
 {
  name: 'Szeder',
  picture:'szeder.png',
  descreption: 'kezzel termelt bio',
  price: 1800,
  inStock: true,
  variations:['feher','fekete']
}
]
const productsSection = document.getElementById('products')

products.forEach(product => { // = vel csak utolso elemt hasznal igy +=  kell hasznalni 
  productsSection.innerHTML += `<div>  
    <h2>${product.name}</h2>
    <p>${product.descreption}</p>
    <img src="./img/${product.picture}">
    <h3>${product.price}Ft</h3>
    <a href="#">Kosarba</a>
  </div>`  // ${} koze kell irni a valtozott es nem '' hasznalunk hanem ``!!!

})















































//const productsSection = document.getElementById('products')
//productsSection.innerHTML = `<div>
//<h2>${products[0].name}</h2>
//<p>${products[0].descreption}</p>
//<img src="./img/${products[0].picture}">
//<h3>${products[0].price}Ft</h3>
//<a href="#">Kosarba</a>
//</div>`  // ${} koze kell irni a valtozott es nem '' hasznalunk hanem ``!!!


// modern javascript vanilla js nincs keretrendszer : vue react angular  erdemes tanulni ezeket 

//adattipusok
// szamok 
//const number1 = 5
//const number2 = 7
//number1 + number2


// stringek szoveg '' kozott

//const greeting = 'Alex'



//boolen igaz vagz hamis 
//const inStock = true

//tomb 

//const products = ['malna','afonya','szeder']
// malna az 0 helyet foglalja el 

//objektum   
//const malna ={
  //name: 'malna',
  //picture: 'malna.jpg',
//}
// malna.picture ez a hivatkozasa 

// const nem valtozhato ertek
//const vat = 27
//let valtozhato ertek is lehet , inkabb const hasznaljuk 
//let amount = 0

//regi - nem hasznaljuk 
//var foo ='bar'

//dinamikus valtozo
