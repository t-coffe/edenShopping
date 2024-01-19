import './style.css'

let url = "https://dummyjson.com/products";

const response = await fetch(url); 

const responseAsJson = await response.json();

const products = responseAsJson.products;


let currency = "euro";

const app = document.querySelector('#app');

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  const article = document.createElement('article');
  const title = document.createElement('h3');
  title.textContent = products[i].title;
  const thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', products[i].thumbnail);
  
  const price = document.createElement('p');
  price.textContent = products[i].price;
  const click = document.createElement('button');
  click.setAttribute('popovertarget','popImages');
  

  article.appendChild(title);
  click.appendChild(thumbnail);
  article.appendChild(click);
  article.appendChild(price);
  app.appendChild(article);
}



console.log(url);
const produit = await fetch(url);
const produitAsJson = await produit.json();
const images = produitAsJson.products;


for (let i = 0; i < products.length; i++) {
  let url = 'https://dummyjson.com/products/' + products[i].id;
  
}




