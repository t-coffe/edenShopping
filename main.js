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
  //console.log(title);
  const image = document.createElement('img');
  image.setAttribute('src', products[i].thumbnail);
  const price = document.createElement('p');
  price.textContent = price;

  article.appendChild(title);
  article.appendChild(image);
  article.appendChild(price);
  app.appendChild(article);
}










const article = document.createElement('article');
const title = document.createElement('h3');
title.textContent = "necklace";
const image = document.createElement('img');
image.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Seven-Stranded_Necklace_%28Satlari%29_MET_15.95.72.jpg');
const price = document.createElement('p');



