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

  article.appendChild(title);
  article.appendChild(thumbnail);
  article.appendChild(price);
  app.appendChild(article);

  thumbnail.addEventListener('click', async ()=> {
    let urle = 'https://dummyjson.com/products/' + products[i].id ;
    const j = await fetch(urle); 
    const jjson = await j.json();
  })
}





